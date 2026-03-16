import NavigationService from '../../../navigation/NavigationService';
import { RouteConstant } from '../../../navigation/Constant';

export const useStartViewModel = () => {
  const navigateToLogin = () => {
    NavigationService.navigate(RouteConstant.Login);
  };

  const navigateToSignUp = () => {
    NavigationService.navigate(RouteConstant.SignUp);
  };

  const skipToHome = () => {
    NavigationService.navigate(RouteConstant.Main);
  };

  return {
    navigateToLogin,
    navigateToSignUp,
    skipToHome,
  };
};
