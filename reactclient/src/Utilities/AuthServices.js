import AxiosServices from "./AxiosServices";
import Constants from "./Constants";

const axiosService = new AxiosServices()

export default class AuthServices {
    SignUp(data) {
        return axiosService.post(Constants.API_URL_CREATE_BRUKER, data, false)
    }

    SignIn(data) {
        return axiosService.post(Constants.API_URL_LOGG_INN. data, false)
    }
}