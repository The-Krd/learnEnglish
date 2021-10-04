import { Link } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";
import { Box, typography } from "@mui/system";
import { ButtonGroup } from "@mui/material";

const Learn = () => {
  return (
    <>
      <Container>
        <Typography variant="h2">Choose your lesson</Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography variant="h5">Title: About books</Typography>
            <Typography> Lesson about books</Typography>
          </Box>
          <ButtonGroup>
            <Button>10 words</Button>
            <Button component={Link} to="/lesson" variant="contained">
              Learn
            </Button>
          </ButtonGroup>
        </Box>
      </Container>
    </>
  );
};

export default Learn;
