import HttpClient from "../Utils/HttpClient"
import Storage from "../Utils/Storage";

const login = async (data) => {
    // console.log('authentication_profile/login_otp.php',data);
    return HttpClient.post('authentication_profile/login_otp.php', data);
}
const Register = async (data) => {
    return HttpClient.post('authentication_profile/register.php', data);
}

const FetchBrand = async () => {
    return HttpClient.post('authentication_profile/car_brand_fetch_all.php');
}

const FetchCar = async (data) => {
    return HttpClient.post('authentication_profile/car_fetch_by_brand_id.php', data);
}

const FetchCarSingle = async (data) => {
    return HttpClient.post('authentication_profile/car_fetch_single.php', data);
}

const FetchFuelType = async (data) => {
    return HttpClient.post('authentication_profile/car_fuel_fetch_by_transmission_type.php', data);
}


const getAccount = async () => {
    return Storage.get('account');
}

const setAccount = async (data) => {
    return Storage.set('account', data);
}
const getCar = async () => {
    return Storage.get('car');
}

const setCar = async (data) => {
    return Storage.set('car', data);
}
async function getToken() {
    return await Storage.get('token');
  }
  
  async function setToken(data) {
    return await Storage.set('token', data);
  }

const AuthService = {
    getAccount,
    setAccount,
    getToken,
    setToken,
    login,
    Register,
    setCar,
    getCar,
    FetchBrand,
    FetchCar,
    FetchCarSingle,
    FetchFuelType
}

export default AuthService;