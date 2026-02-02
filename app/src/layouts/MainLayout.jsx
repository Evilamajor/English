import { NavLink, Outlet } from "react-router-dom";

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
        <h2>English Platform</h2>

        <nav>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {/* Core */}
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/topics">Topics</NavLink>
            </li>

            <hr />

            {/* General English */}
            <li style={{ fontWeight: "bold", marginTop: "1rem" }}>
              General English
            </li>
            <li>
              <NavLink to="/general/writing">Writing</NavLink>
            </li>
            <li style={{ opacity: 0.6 }}>Vocabulary</li>
            <li style={{ opacity: 0.6 }}>Grammar</li>

            <hr />

            {/* Business English */}
            <li style={{ fontWeight: "bold", marginTop: "1rem" }}>
              Business English
            </li>
            <li>
              <NavLink to="/business/meetings">Meetings</NavLink>
            </li>
            <li>
              <NavLink to="/business/presentations">Presentations</NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      <main style={{ padding: "2rem", flex: 1 }}>
        <Outlet />
      </main>
    </div>
  );
}
