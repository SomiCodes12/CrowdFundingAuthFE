import axios from "axios";

const url: string = "https://set07superproject.onrender.com";
export const getSingleUserAPI = async (userID: any) => {
  try {
    return await axios
      .get(`${url}/api/${userID}/single-account`)
      .then((res) => {
        return res.data.data;
      });
  } catch (error) {
    console.log(error);
  }
};

export const getAllUserAPI = async () => {
  try {
    return await axios.get(`${url}/api/all-accounts`);
  } catch (error) {
    console.log(error);
  }
};
