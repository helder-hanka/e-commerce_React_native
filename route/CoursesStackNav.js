import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderIcon from "../components/CustomHeaderIcon";
import Landing from "../screens/Landing";
import CourseInfos from "../screens/CourseInfos";
// import Cart from "../screens/Cart";
import globalStyles from "../styles/globalStyles";

const cousesStackNavigator = createStackNavigator();

export const CousesStackNavigator = () => {
  return (
    <cousesStackNavigator.Navigator
      // screenOptions={({ navigation }) => ({
      //   headerStyle: { backgroundColor: globalStyles.green },
      //   headerTitleStyle: { fontWeight: "bold" },
      //   headerTintColor: globalStyles.white,
      //   headerRight: () => (
      //     <HeaderButtons HeaderButtonComponent={CustomHeaderIcon}>
      //       <Item
      //         title="Panier"
      //         iconName="shopping-cart"
      //         onPress={() => navigation.navigate("Cart")}
      //       />
      //     </HeaderButtons>
      //   ),
      // })}
      screenOptions={{ headerShown: false }}
    >
      <cousesStackNavigator.Screen name="Landing" component={Landing} />
      <cousesStackNavigator.Screen
        name="Details"
        component={CourseInfos}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />
      {/* <cousesStackNavigator.Screen name="Cart" component={Cart} /> */}
    </cousesStackNavigator.Navigator>
  );
};
