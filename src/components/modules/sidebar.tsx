import React from "react";

const Sidebar = () => {
  return (
    <div>
      <aside>
        <h2>Navigation</h2>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
