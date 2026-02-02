import { workEmployment } from "./work-employment.js";

export const topics = [
  workEmployment,
];

export const topicsBySlug = Object.fromEntries(
  topics.map(topic => [topic.slug, topic])
);
