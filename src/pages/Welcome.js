import { Button, Box, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 10 }}>
        <Typography pt={5} variant="h2" component="h1">
          Welcome to Learn English{" "}
        </Typography>
        <Typography py={4} pl={4} paragraph>
          In App you can learn new words by repetition. Additionally you can
          check them in DeepL.
        </Typography>
        <Button
          variant="outlined"
          href="#"
          endIcon={<KeyboardArrowRightIcon />}
          component={Link}
          to="/learn"
        >
          Check your lessons
        </Button>
      </Box>
    </>
  );
};

export default Main;
