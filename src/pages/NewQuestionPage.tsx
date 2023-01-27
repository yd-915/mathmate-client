import { TextField, Button, Chip } from "@mui/material";
import { MuiChipsInput, MuiChipsInputChip } from "mui-chips-input";
import { FormEvent, useState } from "react";

function NewQuestion() {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState<MuiChipsInputChip[]>([]);
  const [text, setText] = useState("");

  const handleChange = (newTags: MuiChipsInputChip[]) => {
    setTags(newTags);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // send a POST request to the server with the form data
    // or, handle the form submission locally
  };

  return (
    <>
      <h1>New Question</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <MuiChipsInput
          value={tags}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          fullWidth
          multiline
          required
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" color="primary">
          Ask
        </Button>
      </form>
    </>
  );
}

export default NewQuestion;
