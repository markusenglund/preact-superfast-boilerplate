import { h, Component } from "preact";
import Router, { Link } from "preact-router";
import { Helmet } from "react-helmet";

class Home extends Component {
  render() {
    return (
      <div style={{ color: "gold" }}>
        <Helmet>
          <title>Home II</title>
        </Helmet>
        <h1>Home</h1>
        <Link href="/about">About</Link>
      </div>
    );
  }
}

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
