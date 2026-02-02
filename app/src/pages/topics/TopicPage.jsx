import { useParams } from "react-router-dom";
import { topicsBySlug } from "../../topics";
import BackButton from "../../components/BackButton.jsx";


export default function TopicPage() {
  const { topicSlug } = useParams();
  const topic = topicsBySlug[topicSlug];

  if (!topic) {
    return (
      <div>
        <h1>Topic not found</h1>
        <p>The topic “{topicSlug}” does not exist.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>{topic.title}</h1>
      <p>{topic.introduction}</p>
    </div>
  );
    <>
    <BackButton label="← Back to topics" />
    <h1>{topic.title}</h1>
    <p>{topic.introduction}</p>
    </>

}

