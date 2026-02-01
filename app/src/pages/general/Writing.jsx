import { NavLink, Routes, Route } from 'react-router-dom';

import Explanation from './writing/Explanation.jsx';
import Structure from './writing/Structure.jsx';
import Language from './writing/Language.jsx';
import Mistakes from './writing/Mistakes.jsx';
import Practice from './writing/Practice.jsx';
import PracticeTopic from './writing/PracticeTopic.jsx';

export default function Writing() {
  return (
    <div>
      <h2>Writing</h2>
      <nav>
        <ul className="sub-menu">
          <li>
            <NavLink to="explanation">Explanation</NavLink>
          </li>
          <li>
            <NavLink to="structure">Structure</NavLink>
          </li>
          <li>
            <NavLink to="language">Language</NavLink>
          </li>
          <li>
            <NavLink to="mistakes">Common Mistakes</NavLink>
          </li>
          <li>
            <NavLink to="practice">Practice</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route index element={<p>Select a section to explore writing techniques.</p>} />
        <Route path="explanation" element={<Explanation />} />
        <Route path="structure" element={<Structure />} />
        <Route path="language" element={<Language />} />
        <Route path="mistakes" element={<Mistakes />} />
        <Route path="practice" element={<Practice />} />
        {/* Individual practice topics – nested route */}
        <Route path="practice/:topicId" element={<PracticeTopic />} />
      </Routes>
    </div>
  );
}