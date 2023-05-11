import {
    Typography,
    Link,
  } from "@mui/material";

const Copyright = (props) => (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        www.todo.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );

  export default Copyright;