import NavigationService from '../../../navigation/NavigationService';
import { RouteConstant } from '../../../navigation/Constant';

export const useProfileViewModel = () => {
  const goBack = () => {
    NavigationService.goBack();
  };

  const navigateToEditProfile = () => {
    NavigationService.navigate(RouteConstant.EditProfile);
  };

  const user = {
    fullName: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+1 2345678900',
    address: '123 Delivery St, Mytown, USA',
    type: 'Driver',
  };

  return {
    goBack,
    navigateToEditProfile,
    user,
  };
};
