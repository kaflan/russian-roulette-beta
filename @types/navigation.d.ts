import { NavigatorScreenParams } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

export type ApplicationStackParamList = {
  Startup: NavigatorScreenParams;
  Ending: NavigatorScreenParams;
};

export type EndingScreenNavigationProp = NativeStackNavigationProp<
  ApplicationStackParamList,
  'Ending'
>;
export type ApplicationScreenProps =
  StackScreenProps<ApplicationStackParamList>;
