import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";

import HeaderBack from "../../components/HeaderBack";
import styles from "./styles";

import Logo from "../../assets/logo.png";
import Backgroud from "../../assets/backgroudhome.png";

function PageSucessoPassword() {
  const navigation = useNavigation();
  const { navigate } = useNavigation();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <>
      <ImageBackground
        style={styles.container}
        resizeMode="cover"
        source={Backgroud}
      >
        <HeaderBack color="#333" />
        <KeyboardAvoidingView
          enabled={Platform.OS === "ios"}
          behavior="padding"
        >
          <View style={styles.main}>
            <Image style={styles.mainlogo} source={Logo} />
            <View style={styles.mainInput}>
              <TextInput
                style={styles.mainInputText}
                placeholder="Nova senha"
                value={password}
                onChangeText={setPassword}
                placeholderTextColor="#535353"
              />
              <TextInput
                style={styles.mainInputText}
                placeholder="Confirma senha"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholderTextColor="#535353"
              />
            </View>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "10%",
            }}
          >
            <TouchableOpacity
              //   onPress={hadleNavigateToRecuperar}
              style={styles.mainInputButton}
            >
              <Text style={styles.mainInputButtonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </>
  );
}

export default PageSucessoPassword;
