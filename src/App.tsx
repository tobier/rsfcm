import type { Component } from "solid-js";

const App: Component = () => {
  return (
    <div class="wrapper">
      <main class="container">
        <h1 style={{ "font-size": "72px" }}>
          <span style={{ color: "#CE2939" }}>Rally</span>
          <span style={{ color: "#FFFFFF" }}>Sim</span>
          <span style={{ color: "#477050" }}>Fans</span>
        </h1>
        <p aria-busy="true">Checking for updates...</p>
      </main>
    </div>
  );
};

export default App;
