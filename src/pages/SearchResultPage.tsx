import {
  Card,
  Container,
  Stack,
} from "@mui/material";
import Navbar from "../components/navbar";
import { initialQuestionObject, Question } from "../typescript";
import SearchInput from "../components/searchInput";
import { MuiChipsInputChip, MuiChipsInput } from "mui-chips-input";
import { useState } from "react";

const TEST_CONTENT = `Natus beatae eaque adipisci perspiciatis aliquam et enim sed et enim sed 
aliquam et enim sed et enim sed jsfgku
occaecati beatae eaque adipisc....`;

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


function SearchResult() {

  const [tags, setTags] = useState<MuiChipsInputChip[]>(["aaaaa","bbbbbb"]);

  const handleChange = (newTags: MuiChipsInputChip[]) => {
    setTags(newTags);
  };
 
  return (
    <>
      <Container sx={{ my: 2, justifyContent: "flex-start" }}>
        <SearchInput />
      </Container>

      <MuiChipsInput
          value={tags}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />

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
