import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcrypt";

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  preferences: object;
}

const userSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true, maxlength: 12 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, maxlength: 12 },
  preferences: { type: Object, required: false },
});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password as string, 12);
});

export default mongoose.model<User>("User", userSchema);
