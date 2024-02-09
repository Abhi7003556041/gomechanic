import { createSlice } from '@reduxjs/toolkit'

export const ServiceSlice = createSlice({
    name: 'service',
    initialState: {
        serviceData: [],
        refress: false,
        safety_warranty_amount:0
    },
    reducers: {
        initCartService(state, action) {
            state.serviceData = action.payload;
            state.refress = !state.refress
        },
        addCartService(state, action) {
            state.serviceData = state.serviceData.concat(action.payload);
            state.refress = !state.refress
        },
        updateServiceCount(state, action) {
            let data = action.payload;
            let index = state.serviceData.findIndex(it => it.cart_id == data.id);
            if (index >= 0) {
              state.serviceData[index].quantity = data.quantity.toString();
            } 
          },
        deleteService(state, action) {
            console.log(action.payload);
            let serviceNewItems = state.serviceData.filter(
              it => it.cart_id != action.payload,
            );
            state.serviceData = serviceNewItems;
        },
        deleteCart(state,action) {
            state.serviceData = []
            state.refress = !state.refress
        },
        setSafety_warranty_amount(state,action){
            state.safety_warranty_amount = action.payload
            state.refress = !state.refress

        }
    }
})
export const { initCartService, addCartService,updateServiceCount, deleteService, deleteCart, setSafety_warranty_amount } = ServiceSlice.actions;

export default ServiceSlice.reducer;