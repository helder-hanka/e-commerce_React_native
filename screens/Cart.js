import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import EmptyMsg from "../components/EmptyMsg";
import CoursesInCart from "../components/CoursesInCart";
import globalStyles from "../styles/globalStyles";
import { remouveCourseCart } from "../redux/actions/actionRemoveCourseCart";
import { addPayment } from "../redux/actions/actionPayment";

const Cart = () => {
  const dispatch = useDispatch();
  const cartCourses = useSelector((state) => state.cart.cartCourses);
  const total = useSelector((state) => state.cart.total);

  // const deleteCourse = (courseId) => {
  //   dispatch(remouveCourseCart(courseId));
  // };

  const handlePayment = (cartCourses, total) => {
    dispatch(addPayment(cartCourses, total));
    alert("Paiment effectué");
  };

  return (
    <View style={styles.cartContainer}>
      {cartCourses.length > 0 ? (
        <View>
          <FlatList
            data={cartCourses}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CoursesInCart
                title={item.title}
                price={item.price}
                onDelete={() => dispatch(remouveCourseCart(item.id))}
                // onDelete={() => deleteCourse(item.id)}
              />
            )}
          />
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>
              Total: <Text style={styles.totalPrice}>{total.toFixed(2)}</Text>
            </Text>
            <TouchableOpacity onPress={() => handlePayment(cartCourses, total)}>
              <View style={styles.btnAddPayament}>
                <Text style={styles.btnAddPayamentText}>Payer</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <EmptyMsg text="Panier vide" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cartContainer: {
    padding: 20,
  },
  totalContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 19,
  },
  totalText: {
    fontWeight: "bold",
    fontSize: 19,
  },
  totalPrice: {
    color: globalStyles.green,
  },
  btnAddPayament: {
    borderRadius: 6,
    paddingVertical: 9,
    paddingHorizontal: 25,
    backgroundColor: globalStyles.orange,
  },
  btnAddPayamentText: {
    fontSize: 19,
  },
});

export default Cart;
