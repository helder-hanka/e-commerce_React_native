import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// import { CousesStackNavigator } from "./CoursesStackNav";
import DrawerNav from "./DrawerNav";

export const AppNav = () => {
  return (
    <NavigationContainer>
      {/* <CousesStackNavigator /> */}
      <DrawerNav />
    </NavigationContainer>
  );
};

export default AppNav;
