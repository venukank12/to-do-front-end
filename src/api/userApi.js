import api from "./api";

export const userLogin = async (data) => {
  try {
    return await api.post("/user/login", data);
  } catch (e) {
    throw e;
  }
};

export const userRegister = async(data)=>{
    try {
      return await api.post("/user/register", data);
    } catch (e) {
      throw e;
    }
  };
