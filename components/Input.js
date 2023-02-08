import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import globalStyles from "../styles/globalStyles";

const Input = (props) => {
  return (
    <View style={styles.formControl}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        {...props}
        style={styles.input}
        value={props.value}
        onChangeText={props.onKeyStroke}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  formControl: {
    width: "100%",
  },
  label: {
    marginVertical: 15,
    color: globalStyles.green,
    fontWeight: "bold",
  },
  input: {
    paddingHorizontal: 9,
    paddingVertical: 9,
    borderColor: globalStyles.green,
    borderWidth: 0.5,
    borderRadius: 6,
  },
});
