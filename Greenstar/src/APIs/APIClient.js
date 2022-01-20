import axios from "axios";
import * as AxiosLogger from "axios-logger";

const APIClient = axios.create();

APIClient.interceptors.request.use(AxiosLogger.requestLogger);
APIClient.interceptors.response.use(AxiosLogger.responseLogger);

export default APIClient;
