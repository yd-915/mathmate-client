import { Card, Container, Stack } from "@mui/material";
import { initialQuestionObject, Question } from "../typescript";
import SearchInput from "../components/searchInput";
import { MuiChipsInput } from "mui-chips-input";
import { useState } from "react";
import useStore, { StoreState } from "../store/store";

const TEST_CONTENT = `Natus beatae eaque adipisci perspiciatis aliquam et enim sed et enim sed 
aliquam et enim sed et enim sed jsfgku
occaecati beatae eaque adipisc....`;

const questions: Question[] = [
  {
    ...initialQuestionObject,
    id: "1",
    title: "QUESTION TITLE 1",
    question: TEST_CONTENT,
  },
  {
    ...initialQuestionObject,
    id: "2",
    title: "QUESTION TITLE 2",
    question: TEST_CONTENT,
  },
  {
    ...initialQuestionObject,
    id: "3",
    title: "QUESTION TITLE 3",
    question: TEST_CONTENT,
  },
];

function SearchResult() {
  const selectedQuestion = useStore(
    (state: StoreState) => state.selectedQuestion
  );

  const handleChipsChange = (newTags: string[]) => {};

  return (
    <>
      <Container sx={{ my: 2, justifyContent: "flex-start" }}>
        <SearchInput text={selectedQuestion?.question} />
      </Container>

      <MuiChipsInput
        value={selectedQuestion.tags}
        onChange={handleChipsChange}
        fullWidth
        sx={{ mb: 2 }}
      />

      <Stack spacing={2}>
        {questions.map((question) => (
          <Card key={question.id}>
            <h3>{question.title}</h3>
            <p>{question.question}</p>
          </Card>
        ))}
      </Stack>
    </>
  );
}

export default SearchResult;
