import { Link } from "react-router-dom";
import { topics } from "../../topics";

export default function TopicsIndex() {
  return (
    <div>
      <h1>Topics</h1>
      <ul>
        {topics.map(topic => (
          <li key={topic.slug}>
            <Link to={`/topics/${topic.slug}`}>
              {topic.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
