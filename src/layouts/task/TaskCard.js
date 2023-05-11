import { Box, Typography, Chip, Stack } from "@mui/material";

const TaskCard = ({
  id = 1,
  title = "sample title",
  description = "sample description",
  status = "Todo",
}) => {
  return (
    <Box
      sx={{
        p: 3,
        borderRadius: "6px",
        bgColor: "#FFFFFF",
        boxShadow: "0px 4px 48px #0000000A",
        height:'100%'
      }}
    >
      <Stack direction="row" justifyContent='space-between'>
        <Chip variant="outlined" color='primary' label={`#${id}`} />
        <Chip
          sx={{
            bgcolor: { Todo: "#FEB558", Inprocess: "#6DBBFA", Done: "#8022CE" }[
              status
            ],
          }}
          label={status}
        />
      </Stack>

      <Typography mt={1}  fontWeight={600} >
        {title}
      </Typography>

      <Typography variant="body1" mt={1}>{description}</Typography>
    </Box>
  );
};

export default TaskCard;
