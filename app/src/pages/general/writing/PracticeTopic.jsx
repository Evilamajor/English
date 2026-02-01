import { useParams, Link } from 'react-router-dom';

// Utility function to convert a kebab‑cased ID into a human‑readable title
function formatTitle(id) {
  return id
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default function PracticeTopic() {
  const { topicId } = useParams();
  const title = formatTitle(topicId);

  return (
    <div>
      {/* Navigation back to the practice topics list */}
      <nav style={{ marginBottom: '1rem' }}>
        <Link to="..">← Back to topics</Link>
      </nav>
      <h3>{title}</h3>
      <h4>Introduction</h4>
      <p>
        This section will provide background information about {title}. A
        detailed introduction will appear here in future iterations.
      </p>
      <h4>Vocabulary</h4>
      <p>
        A list of topic-specific vocabulary items will be added here. You can
        use these words to enhance your essays and speaking tasks.
      </p>
      <h4>Common Expressions</h4>
      <p>
        Useful phrases and collocations related to {title} will be included
        here. These expressions will help you articulate your ideas clearly.
      </p>
      <h4>Grammar Focus</h4>
      <p>
        Grammar structures relevant to this topic will be highlighted here. This
        section may include examples of passive voice, modals, conditionals and
        more.
      </p>
      <h4>Example Essay Prompts</h4>
      <p>
        Example essay questions for the topic of {title} will be listed here to
        inspire your own writing practice.
      </p>
    </div>
  );
}