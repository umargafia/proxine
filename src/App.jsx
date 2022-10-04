import { About } from "./components/about/About";
import { Nav } from "./components/navigation/Nav";
import "./global/global.scss";

function App() {
  return (
    <div className="app">
      <section className="sections">
        <Nav />
        <About/>
     </section>
    </div>
  );
}

export default App;
