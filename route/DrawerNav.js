import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";
import { CousesStackNavigator } from "./CoursesStackNav";
import { CartStackNav } from "./CartStackNav";
import { PaymentStackNav } from "./PaymentStackNav";
import globalStyles from "../styles/globalStyles";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderIcon from "../components/CustomHeaderIcon";
import { UserNavigator } from "./UserStackNav";

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation, route }) => ({
        headerStyle: { backgroundColor: globalStyles.green },
        headerTitleStyle: { fontWeight: "bold" },
        headerTintColor: globalStyles.white,

        headerRight: () =>
          route.name === "Mycourses" ? (
            <HeaderButtons HeaderButtonComponent={CustomHeaderIcon}>
              <Item
                title="Editer"
                iconName="library-add"
                onPress={() =>
                  navigation.navigate("Edit", {
                    title: "créer un cours",
                  })
                }
              />
            </HeaderButtons>
          ) : route.name === "Edit" ? (
            { title: route.params.title }
          ) : (
            <HeaderButtons HeaderButtonComponent={CustomHeaderIcon}>
              <Item
                title="Panier"
                iconName="shopping-cart"
                onPress={() => navigation.navigate("Cart")}
              />
            </HeaderButtons>
          ),
      })}
    >
      <Drawer.Screen
        name="Home"
        component={CousesStackNavigator}
        options={{
          title: "Catalogue",
          drawerIcon: () => (
            <MaterialIcons name="menu" size={24} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Carts"
        component={CartStackNav}
        options={{
          title: "Panier",
          drawerIcon: () => (
            <MaterialIcons name="shopping-cart" size={24} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Payment"
        component={PaymentStackNav}
        options={{
          title: "Achats",
          drawerIcon: () => (
            <MaterialIcons name="credit-card" size={24} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Mycourses"
        component={UserNavigator}
        options={{
          title: "Mes cours",
          drawerIcon: () => (
            <MaterialIcons name="mic" size={24} color="black" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
