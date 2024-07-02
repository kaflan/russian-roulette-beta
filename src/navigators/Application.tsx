import React from 'react';
import { SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Startup, EndingScreen } from '../screens';
import { useTheme } from '../hooks';
import { ApplicationStackParamList } from '../../@types/navigation';

const Stack = createStackNavigator<ApplicationStackParamList>();

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, NavigationTheme } = useTheme();
  const { colors } = NavigationTheme;

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Startup"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Startup" component={Startup} />
          <Stack.Screen name="Ending" component={EndingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default ApplicationNavigator;
