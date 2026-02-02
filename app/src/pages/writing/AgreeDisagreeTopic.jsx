import { useParams } from "react-router-dom";
import { topicsBySlug } from "../../topics";
import BackButton from "../../components/BackButton.jsx";


export default function AgreeDisagreeTopic() {
  const { topicSlug } = useParams();
  const topic = topicsBySlug[topicSlug];

  if (!topic) {
    return <p>Topic not found.</p>;
  }

  return (
    <div>
        <BackButton label="← Back" />

      <h1>Agree / Disagree Essay</h1>
      <h2>{topic.title}</h2>

      <section>
        <h3>Essay Structure</h3>
        <ol>
          <li>Introduction stating your opinion</li>
          <li>First argument supporting your view</li>
          <li>Second argument supporting your view</li>
          <li>Conclusion reinforcing your opinion</li>
        </ol>
      </section>

      <section>
        <h3>Topic Context</h3>
        <p>{topic.introduction}</p>
      </section>

      <section>
        <h3>Task</h3>
        <p>
          Do you agree or disagree with the following statement related to
          <strong> {topic.title}</strong>?
        </p>
      </section>
    </div>
  );
}
