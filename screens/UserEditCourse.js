import React, { useReducer } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { editCourse } from "../redux/actions/actionEditCourse";
import { createCourse } from "../redux/actions/actionCreateCourse";
import { formReducer } from "../formData/formReducer";
import Input from "../components/Input";
import BtnForm from "../components/BtnForm";
import globalStyles from "../styles/globalStyles";

const UserEditCourse = ({ route, navigation }) => {
  const courseId = route.params.courseId;
  const dispatch = useDispatch();

  const course = useSelector((state) =>
    state.courses.loggedInMemberCourses.find((course) => course.id === courseId)
  );

  formInitialState = {
    inputValues: {
      title: course ? course.title : "",
      img: course ? course.image : "",
      price: course ? course.price : "",
      desc: course ? course.description : "",
    },
    isValidInput: {
      title: course ? true : false,
      img: course ? true : false,
      price: course ? true : false,
      desc: course ? true : false,
    },
    isValidForm: course ? true : false,
  };

  const [formState, formActionDispatch] = useReducer(
    formReducer,
    formInitialState
  );

  const handlePress = () => {
    const { title, img, price, desc } = formState.inputValues;
    if (courseId) {
      dispatch(editCourse(courseId, title, img, desc));
    } else {
      dispatch(createCourse(title, desc, img, +price));
    }
    navigation.goBack();
  };

  const inputHandler = (inputName, text) => {
    let isValidInput = false;
    if (text.length > 0) {
      isValidInput = true;
    }
    formActionDispatch({
      type: "INPUT_VALIDATION",
      value: text,
      isValid: isValidInput,
      input: inputName,
    });
  };

  return (
    <ScrollView>
      <View style={styles.formContainer}>
        <Input
          label="Titre"
          value={formState.inputValues.title}
          onKeyStroke={(text) => inputHandler("title", text)}
        />
        <Input
          label="Image (URL)"
          value={formState.inputValues.img}
          onKeyStroke={(text) => inputHandler("img", text)}
        />

        {course ? null : (
          <Input
            label="Price"
            value={formState.inputValues.price}
            onKeyStroke={(text) => inputHandler("price", text)}
            keyboardType="decimal-pad"
          />
        )}

        <Input
          label="Information"
          value={formState.inputValues.desc}
          onKeyStroke={(text) => inputHandler("desc", text)}
          multiline
          numberOfLines={5}
        />
        <BtnForm
          handlePress={handlePress}
          btnTex={
            formState.isValidForm
              ? "Valider"
              : "Veuillez remplir tous les champs"
          }
          activate={formState.isValidForm ? false : true}
        />
      </View>
    </ScrollView>
  );
};

export default UserEditCourse;

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: globalStyles.white,
    borderRadius: 9,
    padding: 20,
    margin: 20,
  },
});
