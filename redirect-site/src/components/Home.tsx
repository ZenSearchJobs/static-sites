import { A } from "@solidjs/router";
import "./Home.css";
import { useLocation } from "solid-start";

export default function Home() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <main>
      <div id="container">
        <h2>🎉 Jobcrawler has become ZenSearch! 🚀</h2>
        <a href="https://zensearch.jobs" target="_blank">
          <button type="button">Go to ZenSearch</button>
      </a>
      </div>
    </main>
  );
}
