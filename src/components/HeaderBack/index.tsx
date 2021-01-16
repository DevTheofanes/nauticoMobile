import React from "react";
import { View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Feather } from "@expo/vector-icons";
import styles from "./styles";

export default function headerBack() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigation.goBack}>
        <Feather name="arrow-left" size={24} color="#FFD246" />
      </TouchableOpacity>
      <TouchableOpacity></TouchableOpacity>
    </View>
  );
}
