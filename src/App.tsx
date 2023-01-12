import { useRef } from "react";
import logo from "./logo.svg";
import { useAnimation } from "@mediamonks/react-animation";
import "./App.css";
import gsap from "gsap";

function App() {
  const ref = useRef<HTMLDivElement>(null);

  useAnimation(() => gsap.from(ref, { opacity: 0 }), []);

  return (
    <div className="App" ref={ref}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
