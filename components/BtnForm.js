import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import globalStyles from "../styles/globalStyles";

const BtnForm = ({ btnTex, activate, handlePress }) => {
  return (
    <Pressable onPress={handlePress} disabled={activate}>
      <View
        style={{
          ...styles.btnContainer,
          backgroundColor: activate ? globalStyles.orange : globalStyles.green,
        }}
      >
        <Text
          style={{
            ...styles.btnText,
            color: activate ? globalStyles.darkGrey : globalStyles.white,
          }}
        >
          {btnTex}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    borderRadius: 6,
    paddingVertical: 9,
    paddingHorizontal: 25,
    backgroundColor: globalStyles.orange,
    marginTop: 20,
  },
  btnText: {
    fontSize: 19,
    textAlign: "center",
  },
});

export default BtnForm;
