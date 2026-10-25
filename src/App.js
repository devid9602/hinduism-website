import Nav from "./components/Nav";
import Thread from "./components/Thread";
import Hero from "./components/Hero";
import Descent from "./components/Descent";
import About from "./components/About";
import Videos from "./components/Videos";
import Series from "./components/Series";
import Granth from "./components/Granth";
import Darshan from "./components/Darshan";
import Shabd from "./components/Shabd";
import Shruti from "./components/Shruti";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <Thread />
      <main>
        <Hero />
        <Descent />
        <About />
        <Videos />
        <Series />
        {/* Reference: the part of the site that is useful on its own */}
        <Granth />
        <Darshan />
        <Shabd />
        <Shruti />
      </main>
      <Footer />
    </>
  );
}
