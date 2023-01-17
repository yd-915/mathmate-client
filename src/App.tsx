import "./App.css";
import Navbar from "./components/navbar";
import useStore from "./store";

function App() {
  const store = useStore();

  return (
    <div>
      <Navbar/>
      <h1>{store.newQuestion}</h1>
    </div>
  );
}

export default App;
