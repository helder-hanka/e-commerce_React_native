import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CoursItem from "../components/CoursItem";
import EmptyMsg from "../components/EmptyMsg";
import { addToCart } from "../redux/actions/actionAddToCart";

const Landing = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (course) => {
    dispatch(addToCart(course));
    alert("Formation ajoutée au panier");
  };
  const existingCourses = useSelector((state) => state.courses.existingCourses);
  const cousesToDisplay = existingCourses.filter(
    (course) => course.selected === false
  );

  if (!existingCourses.length) {
    return <EmptyMsg text="Pas de cous à affiché" />;
  }
  return (
    <FlatList
      data={cousesToDisplay}
      renderItem={({ item }) => (
        <CoursItem
          image={item.image}
          title={item.title}
          price={item.price}
          viewDetails={() =>
            navigation.navigate("Details", {
              courseId: item.id,
              title: item.title,
            })
          }
          onAddToCart={() => handleAddToCart(item)}
        />
      )}
    />
  );
};

export default Landing;

const styles = StyleSheet.create({});
