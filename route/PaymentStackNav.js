import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Payments from "../screens/Payments";

const PaymentStackNavigator = createStackNavigator();

export const PaymentStackNav = () => {
  return (
    <PaymentStackNavigator.Navigator>
      <PaymentStackNavigator.Screen
        name="Payments"
        component={Payments}
        options={{ headerShown: false }}
      />
    </PaymentStackNavigator.Navigator>
  );
};
