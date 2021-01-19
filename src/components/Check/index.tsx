import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

export default function headerBackEdit({
  //   onPress,
  checked,
  colorP,
  colorS,
}: any) {
  const navigation = useNavigation();

  const [checkedPress, setCheckedPress] = useState(Boolean);

  useEffect(() => {
    setCheckedPress(checked);
  }, []);

  return (
    <RectButton onPress={() => setCheckedPress(!checkedPress)}>
      <View
        style={{
          height: 20,
          width: 20,
          borderRadius: 2,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: checked ? colorP : colorS,
        }}
      >
        <Icon size={17} color="#fff" name="x" />
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  CheckBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    margin: 8,
    color: "#fff",
    fontWeight: "bold",
    left: 5,
  },
});
