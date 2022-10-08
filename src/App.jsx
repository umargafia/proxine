import { About } from "./components/about/About";
import { Credit } from "./components/credit/Credit";
import { Nav } from "./components/navigation/Nav";
import "./global/global.scss";

function App() {
  return (
    <div className="app">
      <section className="sections">
        <Nav />
        <About />
        <Credit />
      </section>
    </div>
  );
}

export default App;
