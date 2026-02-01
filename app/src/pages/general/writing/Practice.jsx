import { Link } from 'react-router-dom';

// Define a minimal set of practice topics. Each topic has a unique ID for
// routing and a human‑readable label displayed to the learner.
const topics = [
  { id: 'work-employment', label: 'Work & Employment' },
  { id: 'education', label: 'Education' },
  { id: 'technology', label: 'Technology' },
  { id: 'health', label: 'Health' },
  { id: 'environment', label: 'Environment' },
];

export default function Practice() {
  return (
    <div>
      <h3>Writing – Practice Topics</h3>
      <p>
        Select a topic to practise writing essays. Each topic page includes
        useful vocabulary, expressions, grammar structures, and example
        prompts.
      </p>
      <ul>
        {topics.map((topic) => (
          <li key={topic.id}>
            {/* Use a relative link so that nested routing works correctly */}
            <Link to={topic.id}>{topic.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}