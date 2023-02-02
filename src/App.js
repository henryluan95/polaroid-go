import "./App.scss";
import Info from "./Components/Info/Info";
import Landing from "./Components/Landing/Landing";
import Video from "./Components/Video/Video";
import Films from "./Components/Films/Films";
import About from "./Components/About/About";
import Purchase from "./Components/Purchase/Purchase";
import Loading from "./Components/Loading/Loading";

export default function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Loading />
      <Landing />
      <Info />
      <Video />
      <Films />
      <About />
      <Purchase />
    </>
  );
}
