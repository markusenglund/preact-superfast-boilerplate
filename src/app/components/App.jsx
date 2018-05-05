import { h } from "preact";
import Router, { Link } from "preact-router";
import "./App.scss";

const Home = () => (
  <div>
    <h1>Home</h1>
    <Link href="/about">About</Link>
  </div>
);

const About = () => <h1>About</h1>;

const App = () => {
  const about = "/about";
  return (
    <Router>
      <Home path="/" />
      <About path={about} />
    </Router>
  );
};

export default App;
