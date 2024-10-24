import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

const App = () => {
  return (
    <main className="w-full bg-zinc-950 text-zinc-300 ">
      <Home />
      <About />
      <Projects />
    </main>
  );
};

export default App;
