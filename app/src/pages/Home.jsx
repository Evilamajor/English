import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Welcome</h1>
      <p>
        Select a topic to begin exploring the General or Business English modules.
      </p>

      <Link to="/topics">Browse all topics</Link>
    </div>
  );
}
