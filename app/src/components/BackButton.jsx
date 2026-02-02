import { useNavigate } from "react-router-dom";

export default function BackButton({ label = "← Back" }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      style={{ marginBottom: "1rem" }}
    >
      {label}
    </button>
  );
}
