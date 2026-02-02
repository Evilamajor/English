import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import TopicPage from "./pages/topics/TopicPage.jsx";
import TopicsIndex from "./pages/topics/TopicsIndex.jsx";
import Writing from "./pages/general/Writing.jsx";
import AgreeDisagree from "./pages/writing/AgreeDisagree.jsx";
import AgreeDisagreeTopic from "./pages/writing/AgreeDisagreeTopic.jsx";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="topics" element={<TopicsIndex />} />
        <Route path="topics/:topicSlug" element={<TopicPage />} />
        <Route path="general/writing" element={<Writing />} />
        <Route path="writing/agree-disagree" element={<AgreeDisagree />} />
        <Route path="writing/agree-disagree/:topicSlug" element={<AgreeDisagreeTopic />} />

      </Route>
    </Routes>
  );
}
