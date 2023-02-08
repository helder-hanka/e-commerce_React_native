import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, Text, View, FlatList, Alert } from "react-native";
import { deleteCourse } from "../redux/actions/actionDeleCourse";
import EmptyMsg from "../components/EmptyMsg";
import globalStyles from "../styles/globalStyles";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const UserCourses = ({ navigation }) => {
  const loggedInMemberCourses = useSelector(
    (state) => state.courses.loggedInMemberCourses
  );
  if (!loggedInMemberCourses.length) {
    return <EmptyMsg text="Pas de cours à afficher" />;
  }

  const dispatch = useDispatch();

  const handleDeleteCourse = (courseId) => {
    Alert.alert("Attention", "Voulez-Vous supprimer ce cours?", [
      { text: "NON" },
      {
        text: "OUI",
        onPress: () => dispatch(deleteCourse(courseId)),
      },
    ]);
  };
  return (
    <FlatList
      data={loggedInMemberCourses}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.courseContainer}>
          <View style={styles.courseInfo}>
            <Text
              // Pas le droit de passé sur une 2eme ligne
              numberOfLines={1}
              style={styles.courseText}
            >
              {item.title}
            </Text>
            <Text style={styles.coursePrice}> {item.price} </Text>
          </View>
          <View style={styles.btnIcons}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Edit", {
                  courseId: item.id,
                })
              }
              style={styles.TouchableIcon}
            >
              <AntDesign name="edit" size={24} color={globalStyles.green} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleDeleteCourse(item.id)}
              style={styles.TouchableIcon}
            >
              <AntDesign name="delete" size={24} color={globalStyles.green} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  );
};

export default UserCourses;

const styles = StyleSheet.create({
  courseContainer: {
    backgroundColor: globalStyles.white,
    borderRadius: 10,
    marginVertical: 9,
    marginHorizontal: 17,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 9,
    paddingLeft: 9,
  },
  courseInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 9,
    paddingLeft: 9,
  },
  courseText: {
    width: "80%",
    color: globalStyles.green,
  },
  coursePrice: {},
  btnIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  TouchableIcon: {
    padding: 9,
  },
});
