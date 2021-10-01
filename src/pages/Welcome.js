import { Button, Box, Typography } from "@mui/material";

const Main = () => {
  return( <> 
    <Box component="main" sx={{ flexGrow: 1, p: 10 }}>
        <Typography pt={5} variant="h2" component="h1">
          Welcome to Learn English{" "}
        </Typography>
        <Typography py={4} pl={4} paragraph>
          In App you can learn new words by repetition. Additionally you can
          check them in DeepL.
        </Typography>
        <Button align="center" variant="outlined" href="#">
          Check your lessons
        </Button>
        </Box>
  </>)
};

export default Main;
