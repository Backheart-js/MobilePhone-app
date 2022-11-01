import axios from "axios";
import apiConfig from "~/config/apiConfig";

const httpRequest = axios.create({
    baseURL: apiConfig.baseURL,
    headers: {
        "Content-Type": "application/json",
    },

    paramsSerializer: function (params) {
        return params
    },
})

export default httpRequest;