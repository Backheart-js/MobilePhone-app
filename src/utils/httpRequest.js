import axios from "axios";
import apiConfig from "~/config/apiConfig";

const httpRequest = axios.create({
    baseURL: apiConfig.baseURL,
    headers: {
        "Content-Type": "application/json",
    }
})

httpRequest.interceptors.request.use(async (config) => config);

httpRequest.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }

        return response;
    },
    (error) => {
        throw error;
    },
);

export default httpRequest;