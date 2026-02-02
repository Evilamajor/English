import { Link } from "react-router-dom";
import { topics } from "../../topics";

export default function AgreeDisagree() {
  return (
    <div>
      <h1>Agree / Disagree Essays</h1>

      <p>
        Practise writing an opinion essay. Choose a topic to begin.
      </p>

      <ul>
        {topics.map(topic => (
          <li key={topic.slug}>
            <Link to={`/writing/agree-disagree/${topic.slug}`}>
              {topic.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
