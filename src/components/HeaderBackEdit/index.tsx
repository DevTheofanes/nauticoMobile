import React from "react";
import { View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Feather } from "@expo/vector-icons";
import styles from "./styles";

export default function headerBackEdit({ route, data }: any) {
  const navigation = useNavigation();

  function handleNavigateEdit() {
    navigation.navigate(route, { vessel: data });
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigation.goBack}>
        <Feather name="arrow-left" size={24} color="#FFD246" />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleNavigateEdit}>
        <Feather name="edit-2" size={20} color="#FFD246" />
      </TouchableOpacity>
    </View>
  );
}
