import { UserData } from '../models/User';

export type RootStackParamList = {
  OnboardingScreen: undefined;
  PostCategory: {
    data?: any;
  };
  OnBoarding1: undefined;
  OnBoarding2: undefined;
  OnBoarding3: undefined;
  ReportTribe: undefined;
  AddKid: undefined;
  ContactUs: undefined;
  Faqs: undefined;
  BottomTabNavigation: undefined;
  CreateAccountForm1: undefined;
  CreateAccountForm2: undefined;
  CreateAccountForm3: undefined;
  CreateNewTribe1: undefined;
  CreateNewTribe2: undefined;
  CreateNewTribe3: undefined;
  JoinTribe: undefined;
  InsightTribe: undefined;
  ResetPassword: undefined;
  CreateTribe: undefined;
  ForgotPassword: undefined;
  SignInScreen: undefined;
  SignUpScreen: undefined;
  OtpVerification: undefined;
  NotificationScreen: undefined;
  SettingsScreen: undefined;
  CreateNewPassword: undefined;
  CreateUserName: undefined;
  AddProfileScreen: undefined;
  TribeAdmin: undefined;
  InviteMember: undefined;
  TermsNPolicies: undefined;
  FilterScreen: undefined;
  SearchScreen: undefined;

  AboutAppScreen: undefined;
  FollowersFollowingScreen: undefined;
  CommentScreen: undefined;
  PollDetailsScreen: undefined;
  EditPollScreen: undefined;
  ReportScreen: undefined;
  LikeScreen: undefined;
  ProfileScreen: undefined;
  ImageCarousel: undefined;
  ChangePassword: undefined;
  OtherProfileScreen: undefined;
  NotificationSettingsScreen: undefined;
  ChatScreen: undefined;
  CreateGroupScreen: undefined;
  SelectUserListScreen: undefined;
  ChatListScreen: undefined;
  GroupDetailScreen: undefined;
  CreatePollScreen: undefined;
  CreateAccount: undefined;
  EditProfile: {
    user: UserData;
  },
  Condition: {
    title: string;
    content: string;
  };
  Maps: {
    latitude: number;
    longitude: number;
  };
  ReceivingOrderHistory: {
    isFromSettings?: boolean;
    title?: string;
  };
};

export const RouteConstant = {
  Walkthrough: 'Walkthrough',
  Start: 'Start',
  Login: 'Login',
  SignUp: 'SignUp',
  ForgotPassword: 'ForgotPassword',
  OTPVerification: 'OTPVerification',
  NewPassword: 'NewPassword',
  Main: 'Main',
  Notification: 'Notification',
  ChooseAddress: 'ChooseAddress',
  DeliveryMiles: 'DeliveryMiles',
  TransitAndReceiverDetails: 'TransitAndReceiverDetails',
  MyReviews: 'MyReviews',
  ChangePassword: 'ChangePassword',
  Profile: 'Profile',
  EditProfile: 'EditProfile',
  WebViewScreen: 'WebViewScreen',
  ContactUs: 'ContactUs',
  DeliveryDetails: 'DeliveryDetails',
  ItemDetails: 'ItemDetails',
  DeliverySelection: 'DeliverySelection',
  PaymentOptions: 'PaymentOptions',
  DeliveryConfirmation: 'DeliveryConfirmation',
  ReceivingOrderHistory: 'ReceivingOrderHistory',
} as const;

export const ReactQuaryConst = {
  COUNTRIES: 'countries',
  USER_DATA: 'userData',
}
