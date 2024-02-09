import HttpClient from "../Utils/HttpClient"
import Storage from "../Utils/Storage";

const FetchServiceCategory = async (data) => {
    return HttpClient.post('home/category_fetch_all.php', data);
}

const FetchAllService = async (data) => {
    return HttpClient.post('home/service_fetch_by_category_id.php', data);
}

const FetchSingleService = async (data) => {
    return HttpClient.post('home/service_fetch_single.php', data);
}

const FetchSubService = async (data) => {
    return HttpClient.post('home/service_customize_fetch_by_service_id.php', data);
}

const FetchCart = async (data) => {
    return HttpClient.post('cart/cart_fetch.php', data);
}

const FetchDet = async (data) => {
    return HttpClient.get('/api/admin/getAllExam');
}

const deleteCart = async (data) => {
    return HttpClient.post('cart/cart_delete.php', data);
}

const updateCart = async (data) => {
    return HttpClient.post('cart/cart_update_quantity.php', data);
}

const FetchTimeSlot = async (data) => {
    return HttpClient.post('checkout/time_slot_fetch.php', data);
}

const AddToCartService = async(data) => {
    return HttpClient.post('cart/cart_add.php', data);
}

const OrderService = async(data) => {
    return HttpClient.post('checkout/add_order_check_out.php', data);
}

const MainService = {
 FetchServiceCategory,
 FetchAllService,
 FetchSingleService,
 FetchSubService,
 AddToCartService,
 FetchCart,
 deleteCart,
 updateCart,
 FetchTimeSlot,
 OrderService,
 FetchDet
}

export default MainService;