import { publicRequest } from "./axios";

export const getSectors = async (setSectors) => {
  try {
    const res = await publicRequest.get("/getAllSectors");
    setSectors(res.data);
  } catch (error) {
    console.log(error);
  }
};
export const getCandidate = async (setCandidate) => {
  try {
    const res = await publicRequest.get(
      "/getcandidate/639623a1afdf8b1a66679fa0"
    );
    setCandidate(res.data);
  } catch (error) {
    console.log(error);
  }
};

export const update = async (data, setCandidate) => {
  console.log(data);
  try {
    const res = await publicRequest.patch(
      "/updatecandidate/639623a1afdf8b1a66679fa0",
      data
    );
    console.log(res.data);
    setCandidate(res.data);
  } catch (error) {
    console.log(error);
  }
};
