import { Box, Typography } from "@mui/material";

const BackendError = ({ errorMsg }) => {
  return (
    <Box
      display="flex"
      width="100%"
      my={2}
      p="4px 10px"
      sx={{
        backgroundColor: (theme) => `${theme.palette.error.main}40`,
        opacity: Boolean(errorMsg) ? 1 : 0,
      }}
      borderRadius={(theme) => theme.shape.borderRadius}
    >
      <Typography m="auto" fontSize="13px" lineHeight="19.5px" color="error">
        {errorMsg}
      </Typography>
    </Box>
  );
};

export default BackendError;