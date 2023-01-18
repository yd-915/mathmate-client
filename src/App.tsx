import "./App.css";
import Navbar from "./components/navbar";
import useStore from "./store/store";

function App() {
  const newQuestion = useStore((state) => state.newQuestion);
  const isLoggedIn = useStore((state) => state.isLoggedIn);

  console.log(isLoggedIn);
  return (
    <div>
      <Navbar />
      <h1>{newQuestion}</h1>
      <h2>{isLoggedIn.toString()}</h2>
    </div>
  );
}

export default App;
