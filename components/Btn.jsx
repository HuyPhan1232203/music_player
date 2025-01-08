import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
const Btn = ({ title }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#841584",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default Btn;
