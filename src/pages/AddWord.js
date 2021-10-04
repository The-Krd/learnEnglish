import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

const AddWord = () => {
  const [englishWord, setEnglishWord] = useState("");
  const [polishWord, setPolishWord] = useState("");
  const [englishWordError, setEnglishWordError] = useState(false);
  const [polishWordError, setPolishWordError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (englishWord.trim().length <= 2) {
      setEnglishWordError(true);
    }
    if (polishWord.trim().length <= 2) {
      setPolishWordError(true);
    }
    if (englishWord && polishWord) {
      console.log("Submit: " + polishWord + " " + englishWord);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 20,
        maxWidth: 500,
      }}
    >
      <Typography variant="h2">Add new word</Typography>
      <TextField
        onChange={(e) => {
          setEnglishWord(e.target.value);
          setEnglishWordError(false);
        }}
        label="In english"
        variant="standard"
        error={englishWordError}
      />
      <TextField
        onChange={(e) => {
          setPolishWord(e.target.value);
          setPolishWordError(false);
        }}
        label="In polish"
        variant="standard"
        error={polishWordError}
      />
      <Button variant="outlined" style={{ marginTop: 25, width: 200, alignSelf: "center" }} type="submit">
        Add
      </Button>
    </form>
  );
};

export default AddWord;
