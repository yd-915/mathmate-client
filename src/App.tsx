import "./App.css";
import useStore from "./store";

function App() {
  const store = useStore();

  return (
    <div>
      <h1>{store.newQuestion}</h1>
    </div>
  );
}

export default App;
