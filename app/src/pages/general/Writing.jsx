import { Link } from "react-router-dom";

export default function Writing() {
  return (
    <div>
      <h1>Writing</h1>

      <p>
        Practise structured writing by selecting an essay type. Each essay type
        follows a clear format and can be applied to multiple topics.
      </p>

      <nav>
        <ul className="sub-menu">
          <li>
            <Link to="/writing/agree-disagree">
              Agree / Disagree Essays
            </Link>
          </li>

          <li>
            <Link to="/writing/problem-solution">
              Problem / Solution Essays
            </Link>
          </li>

          {/* Future */}
          {/*
          <li>
            <Link to="/writing/discussion">
              Discussion Essays
            </Link>
          </li>
          */}
        </ul>
      </nav>
    </div>
  );
}
