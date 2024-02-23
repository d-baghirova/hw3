import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

const Navbar = () => {
  return (
    <View>
      <View style={styles.container}>
        <Pressable>
          <Text style={styles.back}>Back</Text>
        </Pressable>
        <Text style={styles.market}>Feed</Text>
        <Pressable>
          <Text style={styles.filter}>Filter</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    width: 380,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginTop: 20,
  },
  back: {
    fontSize: 18,
    color: "#5DB075",
  },
  filter: {
    fontSize: 18,
    color: "#5DB075",
  },
  market: {
    fontWeight: "bold",
    fontSize: 28,
  },
});
