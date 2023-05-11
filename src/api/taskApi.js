import api from "./api";

export const getMyTasks = async (page) => {
  try {
    return await api.get(`/task?page=${page}`);
  } catch (e) {
    throw e;
  }
};

export const createNewTask = async(data)=>{
    try {
      return await api.post("/task", data);
    } catch (e) {
      throw e;
    }
  };
