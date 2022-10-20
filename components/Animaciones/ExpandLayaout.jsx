import React, { useState } from "react";
import { LayoutAnimation, Platform, StyleSheet, Text, TouchableOpacity, UIManager, View } from "react-native";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
const ExpandLayout = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={style.container}>
      <TouchableOpacity
        onPress={() => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
          setExpanded(!expanded);
        }}
      >
        <Text style={style.tile}>Press me to {!expanded ? "collapse" : "expand"}!</Text>
      </TouchableOpacity>
      {!expanded && (
        <View style={style.tile}>
          <Text style={style.tile}>I disappear sometimes!</Text>
          <Text style={style.tile}>I disappear sometimes!</Text>
          <Text style={style.tile}>I disappear sometimes!</Text>
          <Text style={style.tile}>I disappear sometimes!</Text>
          <Text style={style.tile}>I disappear sometimes!</Text>
        </View>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  tile: {
    borderWidth: 0.5,
    color: "#d6d7da"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "#34054F",
    height:700
  }
});

export default ExpandLayout;