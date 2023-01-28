import useStore from "../store/store";
import Navbar from "../components/navbar";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

function Home() {
  const newQuestion = useStore((state) => state.newQuestion);
  const isLoggedIn = useStore((state) => state.isLoggedIn);

  const navigate = useNavigate();

  return (
    <div>
      <h1>{newQuestion}</h1>
      <h2>{isLoggedIn.toString()}</h2>
      <div>
        <Button
          sx={{ mb: 2 }}
          variant="contained"
          onClick={() => {
            navigate("/newQuestion");
          }}
        >
          Ask your mate a math question
        </Button>
      </div>
      <Button
        variant="contained"
        onClick={() => {
          navigate("/searchResult");
        }}
      >
        Search
      </Button>
    </div>
  );
}

export default Home;
