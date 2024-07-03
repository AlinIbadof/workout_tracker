import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="text-xl">Home</div>
      <button>
        <Link to="/route1">Route1 (protected)</Link>
      </button>
    </>
  );
}
