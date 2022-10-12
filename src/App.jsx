import { About } from "./components/about/About";
import { Credit } from "./components/credit/Credit";
import { Flight } from "./components/flight/Flight";
import { Nav } from "./components/navigation/Nav";
import "./global/global.scss";

function App() {
  return (
    <div className="app">
      <section className="sections">
        <Nav />
        <About />
        <Credit />
        <Flight/>
      </section>
    </div>
  );
}

export default App;
