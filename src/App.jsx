import "./App.css";
import Chart from "./Components/Chart/Chart";
import NavBar from "./Components/NavBar/NavBar";
import Phones from "./Components/Phones/Phones";
import PriceOptions from "./Components/PriceOptions/PriceOptions";
function App() {
  return (
    <>
      <NavBar></NavBar>
      <PriceOptions></PriceOptions>
      <Phones></Phones>
      <Chart></Chart>
    </>
  );
}

export default App;
