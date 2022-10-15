import { About } from "./components/about/About";
import { Comments } from "./components/comments/Comments";
import { Credit } from "./components/credit/Credit";
import { Flight } from "./components/flight/Flight";
import { Footer } from "./components/footer/Footer";
import { Nav } from "./components/navigation/Nav";


function App() {
  return (
    <div className="app">
      <section className="sections">
        <Nav />
        <About />
        <Credit />
        <Flight />
        <Comments />
        <Footer />
      </section>
    </div>
  );
}

export default App;
