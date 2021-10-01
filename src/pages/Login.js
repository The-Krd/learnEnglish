import { Input, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Login = () => {
  return (
    <Box>
      <Typography align="center" variant="h4" color="primary" gutterBottom>
        Please Login
      </Typography>
      <Box >
         <Typography variant="caption">Login</Typography>
        <Input>Name</Input>
        <Typography variant="caption">Password</Typography>
        <Input>Name</Input>
      </Box>
    </Box>
  );
};

export default Login;
