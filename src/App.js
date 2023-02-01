import "./App.scss";
import Info from "./Components/Info/Info";
import Landing from "./Components/Landing/Landing";
import Video from "./Components/Video/Video";
import Films from "./Components/Films/Films";
import About from "./Components/About/About";

export default function App() {
  return (
    <>
      <Landing />
      <Info />
      <Video />
      <Films />
      <About />
    </>
  );
}
