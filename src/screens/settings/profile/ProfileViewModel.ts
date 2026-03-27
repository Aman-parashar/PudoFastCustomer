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
    email: 'samplemail@gmail.com',
    phone: '+1 4578451412',
    address: 'B103, Abs cir, nxh St',
    type: 'Walker',
  };

  return {
    goBack,
    navigateToEditProfile,
    user,
  };
};
