import { Title } from "solid-start";
import Counter from "~/components/Counter";
import { A } from "@solidjs/router";
import "./index.css";

export default function Home() {
  return (
    <main>
    <div id="container">
      <h2>🎉 Jobcrawler has become ZenSearch! 🚀</h2>
      <p>
        <A href="https://zensearch.jobs">Visit us at our new home to keep finding great jobs for you</A>
      </p>
    </div>
  </main>
  );
}
