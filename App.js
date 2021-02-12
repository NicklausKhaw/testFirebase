import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./src/screens/HomeScreen";
import AuthScreen from "./src/screens/AuthScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "E-Parking App",
    },
  }
);

const AuthNavigator = createStackNavigator(
  {
    Auth: AuthScreen,
  },
  {
    defaultNavigationOptions: AuthScreen.navigationOptions.headerTitle,
  }
);

const MainNavigator = createSwitchNavigator({
  Auth: AuthNavigator,
  Stack: navigator,
});

export default createAppContainer(MainNavigator);

//askhdlkasdlksadh
