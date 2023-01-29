import useStore, { StoreState } from "../store/store";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

function Home() {
  const isLoggedIn = useStore((state: StoreState) => state.isLoggedIn);

  const navigate = useNavigate();

  return (
    <div>
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
