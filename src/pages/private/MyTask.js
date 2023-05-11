import React from "react";
import { getMyTasks } from "../../api/taskApi";
import TaskCard from "../../layouts/task/TaskCard";
import { Box, Grid, Pagination, Typography } from "@mui/material";

const MyTaskPage = () => {
  const [{ isLoading, myTasks, currentPage, totalPages }, setState] =
    React.useState({
      isLoading: true,
      myTasks: [],
      currentPage: 1,
      totalPages: 1,
    });

  React.useEffect(() => {
    const getMyTaskList = async () => {
      try {
        const res = await getMyTasks(currentPage);
        setState((preState) => ({
          ...preState,
          isLoading: false,
          myTasks: res.data?.tasks || [],
          currentPage: res.data?.pagination?.currentPage || 1,
          totalPages: res.data?.pagination?.totalPages || 1,
        }));
      } catch (e) {
        setState((preState) => ({
          ...preState,
          isLoading: false,
        }));
      }
    };

    getMyTaskList();
  }, [currentPage]);

  const handlePaginationClick = (_,nextPage)=>setState(preState=>({
    ...preState,
    currentPage:nextPage
  }));

  return (
    <Box>
      <Typography mb={3} fontWeight={600} variant="h5">
        My Tasks
      </Typography>
      <Grid container spacing={1}>
        {!isLoading && myTasks.length === 0 && <Box>No Tasks created Yet</Box>}
        {myTasks.map((taskItem) => (
          <Grid key={taskItem.id} item xs={12} sm={6} md={4} xl={3}>
            <TaskCard {...taskItem} />
          </Grid>
        ))}
      </Grid>
      {!isLoading && totalPages>1 && <Box display='flex' justifyContent='flex-end' mt={3}>
      <Pagination count={totalPages} onChange={handlePaginationClick} variant="outlined" shape="rounded"/>
      </Box>}
    </Box>
  );
};
export default MyTaskPage;
