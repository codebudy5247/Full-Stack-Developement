import * as axios from "axios";

const apiURL = "https://rapid-api5247.herokuapp.com/api";

function normalizeServerResponse(serverResponse: any) {
  let response = serverResponse.data;
  return response;
}

export async function getContacts() {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "get",
      url: `${apiURL}/contacts`,
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    console.log(error);

    return [error, null];
  }
}
