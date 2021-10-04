import { Button, Container, Input, Typography } from "@mui/material";
import { Box } from "@mui/system";
import LoginIcon from "@mui/icons-material/Login";

const Login = () => {

  return (
    <Container >
        <Typography
        mt={4}
          align="center"
          variant="h4"
          color="primary"
          gutterBottom
        >
          Please Login
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
          <Typography mt={3} variant="caption">
            Login
          </Typography>
          <Input>Name</Input>
          <Typography mt={3} variant="caption">
            Password
          </Typography>
          <Input>Name</Input>
          <Button
            onClick={() => {
              console.log("submit clicked");
            }}
            type="submit"
            variant="contained"
            endIcon={<LoginIcon fontSize="small" />}
            sx={{marginTop: 4}}
          >
            Login
          </Button>
        </Box>
    </Container>
  );
};

export default Login;
