import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import globalStyles from "../styles/globalStyles";
import { AntDesign } from "@expo/vector-icons";
import CoursesOverView from "./CoursesOverView";

const PaidItems = ({ totalPrice, date, courseDetails }) => {
  const [isShowing, setIsShowing] = useState(false);
  const handleShow = () => {
    setIsShowing((prevState) => !prevState);
  };
  return (
    <ScrollView style={styles.paidCoursesContainer}>
      <View style={styles.paidCourses}>
        <Text style={styles.totaPaid}> {totalPrice.toFixed(2)} €</Text>
        <Text style={styles.date}> {date} </Text>
      </View>
      <TouchableOpacity style={styles.iconBtn} onPress={handleShow}>
        <AntDesign
          name={isShowing ? "minuscircleo" : "pluscircleo"}
          size={24}
          color={globalStyles.green}
        />
      </TouchableOpacity>
      {isShowing && (
        <View style={styles.detailPaidCourses}>
          {courseDetails.courses.map((course) => (
            <CoursesOverView
              key={course.id}
              title={course.title}
              price={course.price}
            />
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  paidCoursesContainer: {
    backgroundColor: globalStyles.white,
    borderRadius: 10,
    margin: 20,
    padding: 15,
  },
  paidCourses: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 15,
  },
  totaPaid: {
    fontSize: 18,
  },
  date: {
    fontSize: 16,
  },
  iconBtn: {
    alignSelf: "flex-end",
  },
  detailPaidCourses: {
    marginTop: 20,
    borderTopColor: globalStyles.lightGrey,
    borderTopWidth: 1,
  },
});

export default PaidItems;
