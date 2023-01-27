import {
  Card,
  Container,
  Divider,
  IconButton,
  InputBase,
  Paper,
  Stack,
} from "@mui/material";
import Navbar from "../components/navbar";
import { initialQuestionObject, Question } from "../typescript";
import SearchInput from "../components/searchInput";

const TEST_CONTENT = `Natus beatae eaque adipisci perspiciatis aliquam et enim sed et enim sed 
aliquam et enim sed et enim sed jsfgku
occaecati beatae eaque adipisc....`;

function SearchResult() {
  const questions: Question[] = [
    {
      ...initialQuestionObject,
      title: "QUESTION TITLE 1",
      question: TEST_CONTENT,
    },
    {
      ...initialQuestionObject,
      title: "QUESTION TITLE 2",
      question: TEST_CONTENT,
    },
    {
      ...initialQuestionObject,
      title: "QUESTION TITLE 3",
      question: TEST_CONTENT,
    },
  ];

  return (
    <>
      <Navbar />

      <Container sx={{ my: 2, justifyContent: "flex-start" }}>
        <SearchInput />
      </Container>

      <Stack spacing={2}>
        {questions.map((question) => (
          <Card>
            <h3>{question.title}</h3>
            <p>{question.question}</p>
          </Card>
        ))}
      </Stack>
    </>
  );
}

export default SearchResult;
