import { StyleSheet, Text, View } from "react-native";
import React from "react";
import globalStyles from "../styles/globalStyles";

const CoursesOverView = (props) => {
  return (
    <View style={styles.courseContainer}>
      <Text numberOfLines={1} style={styles.title}>
        {props.title}
      </Text>
      <Text style={styles.price}> {props.price} €</Text>
    </View>
  );
};

export default CoursesOverView;

const styles = StyleSheet.create({
  courseContainer: {
    backgroundColor: globalStyles.white,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginTop: 9,
  },
  title: {
    white: "70%",
  },
  price: {
    color: globalStyles.dimGray,
  },
});
