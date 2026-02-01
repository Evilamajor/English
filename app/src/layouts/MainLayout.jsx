import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside
        style={{
          width: "240px",
          padding: "1rem",
          borderRight: "1px solid #ddd",
        }}
      >
        <h3>English Platform</h3>
        <p>Navigation will go here</p>
      </aside>

      <main style={{ flex: 1, padding: "2rem" }}>
        <Outlet />
      </main>
    </div>
  );
}
