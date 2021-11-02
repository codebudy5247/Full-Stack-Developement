import * as axios from "axios";

const apiURL = `${process.env.REACT_APP_ORUNPAY_API}`;

interface ResponseData {
  data: any;
  status: any;
}

function normalizeServerResponse(serverResponse: any) {
  let response: ResponseData = {
    data: serverResponse.data,
    status: serverResponse.status,
  };

  return response;
}

export async function getKYCToken(
  userEmail?: string,
  levelName?: string,
  jwtToken?: string
) {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "get",
      url: `${apiURL}/kyc/internal/kyc_token`,
      params: {
        email: userEmail,
        levelName: levelName,
      },
      headers: { Authorization: "Bearer " + jwtToken },
    };

    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);

    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerResponse(error);

    return [errorObject, null];
  }
}

export async function getTransactionDetail(
  TranxID?: string,
  jwtToken?: string
) {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "get",
      url: `${apiURL}/sep24/transaction?id=${TranxID}`,
      headers: { Authorization: "Bearer " + jwtToken },
    };

    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);

    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerResponse(error);

    return [errorObject, null];
  }
}

export async function getFeeInfo() {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "get",
      url: `${apiURL}/sep24/info`,
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);

    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerResponse(error);

    return [errorObject, null];
  }
}
