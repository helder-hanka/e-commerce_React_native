import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNav from "./DrawerNav";

export const AppNav = () => {
  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  );
};

export default AppNav;
