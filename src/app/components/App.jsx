import { h } from "preact";
import Router, { Link } from "preact-router";
import styled, { css } from "preact-emotion";

const HomeContainer = styled.div`
  color: pink;
`;

const blueStyle = css`
  background: blue;
`;

const Home = () => (
  <HomeContainer>
    <h1 className={blueStyle}>Home</h1>
    <Link href="/about">About</Link>
  </HomeContainer>
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
