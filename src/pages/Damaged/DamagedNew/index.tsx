import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";

import api from "../../../service/axios";
import HeaderBack from "../../../components/HeaderBack";
import styles from "./styles";

import Backgroud from "../../../assets/backgroudmenu.png";
import Logo from "../../../assets/logo.png";
// import Pasta from "../../../assets/Caminho46.png";

function DamagedNew() {
  const route = useRoute();
  const { id }: any = route.params;
  const { navigate } = useNavigation();
  const [obs, setObs] = useState("");

  function handleCreate() {
    if (!obs) {
      alert("Preencha a descrição da avaria");
      return;
    }

    async function create() {
      await api.post("/damaged", {
        comments: obs,
        vesselId: id,
      });
      navigate("Vessels");
    }

    Alert.alert(
      "Criar avaria",
      "Você quer mesmo criar uma avaria com esses dados?",
      [
        {
          text: "Cancelar",
        },
        { text: "Confimar", onPress: () => create() },
      ]
    );
  }
  useEffect(() => {
    console.log(id);
  }, []);

  return (
    <>
      <ImageBackground
        style={styles.container}
        resizeMode="cover"
        source={Backgroud}
      >
        <HeaderBack />

        <View style={styles.titleBox}>
          <Text style={styles.titleText}>Nova Avaria</Text>
        </View>

        <View style={styles.header}>
          <Image style={styles.headerImg} source={Logo} />
        </View>

        <View style={styles.content}>
          <View>
            <TextInput
              style={styles.textInput}
              placeholder="Descrição"
              placeholderTextColor="#535353"
              value={obs}
              onChangeText={setObs}
              underlineColorAndroid="transparent"
              numberOfLines={10}
              multiline={true}
            />
          </View>
          <View style={styles.containerButtons}>
            <TouchableOpacity
              onPress={() => handleCreate()}
              style={styles.ButtonChangePassword}
            >
              <Text style={styles.ButtonText}>Criar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}

export default DamagedNew;
