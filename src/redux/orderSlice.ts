import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OrderState, Address } from '../models/Order';

const initialState: OrderState = {
  pickupAddress: null,
  deliveryAddress: null,
  miles: 0,
  receiverName: '',
  receiverPhone: '',
  packageDetails: '',
  isLoading: false,
  error: null,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setPickupAddress: (state, action: PayloadAction<Address>) => {
      state.pickupAddress = action.payload;
    },
    setDeliveryAddress: (state, action: PayloadAction<Address>) => {
      state.deliveryAddress = action.payload;
    },
    setMiles: (state, action: PayloadAction<number>) => {
      state.miles = action.payload;
    },
    setReceiverDetails: (state, action: PayloadAction<{ name: string; phone: string }>) => {
      state.receiverName = action.payload.name;
      state.receiverPhone = action.payload.phone;
    },
    setPackageDetails: (state, action: PayloadAction<string>) => {
      state.packageDetails = action.payload;
    },
    resetOrder: (state) => {
      return initialState;
    },
  },
});

export const {
  setPickupAddress,
  setDeliveryAddress,
  setMiles,
  setReceiverDetails,
  setPackageDetails,
  resetOrder,
} = orderSlice.actions;
export default orderSlice.reducer;
