export interface Address {
  address: string;
  latitude: number;
  longitude: number;
}

export interface OrderState {
  pickupAddress: Address | null;
  deliveryAddress: Address | null;
  miles: number;
  receiverName: string;
  receiverPhone: string;
  packageDetails: string;
  isLoading: boolean;
  error: string | null;
}
