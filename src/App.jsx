import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import { useRef } from "react";
import Agency from "./components/Agency";
import Action from "./components/Action";
import Social from "./components/Social";

function App() {
  const aboutRef = useRef(null);
  const agencyRef = useRef(null);
  const actionRef = useRef(null);
  const homeRef = useRef(null);

  return (
    <>
      <Home
        homeRef={homeRef}
        aboutRef={aboutRef}
        agencyRef={agencyRef}
        actionRef={actionRef}
      />
      {/* <About aboutRef={aboutRef} /> */}
      <Agency agencyRef={agencyRef} />
      <Action actionRef={actionRef} />
      <Social
        homeRef={homeRef}
        aboutRef={aboutRef}
        agencyRef={agencyRef}
        actionRef={actionRef}
      />
    </>
  );
}

export default App;
