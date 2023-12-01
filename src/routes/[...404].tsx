import { Title } from "solid-start";
import "./404.css";

function goHome() {
  window.location.href = "/";
}

export default function NotFound() {
  return (
    <main>
      <Title>Not Found</Title>
      <div className="container">
        <h1 className="errorCode">404</h1>
        <p className="errorMessage">
          These are not the HTML nodes you’re looking for.
        </p>
        <p className="errorMessage">
          Back to home, go. And find your page, you will.
        </p>
        <button className="goHome" onClick={goHome}>
          Go Home
        </button>
      </div>
    </main>
  );
}
