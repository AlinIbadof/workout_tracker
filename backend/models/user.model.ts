import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcrypt";

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  preferences: object;
  availableAvatars: string[];
  selectedAvatar: string;
}

const DEFAULT_AVATARS = [
  "defaultAvatarOne",
  "defaultAvatarTwo",
  "defaultAvatarThree",
];

const userSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true, maxlength: 12 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  preferences: { type: Object, required: false },
  availableAvatars: {
    type: Array,
    default: [...DEFAULT_AVATARS],
  },
  selectedAvatar: { type: String, default: DEFAULT_AVATARS[0] },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password as string, salt);
});

export default mongoose.model<User>("User", userSchema);
