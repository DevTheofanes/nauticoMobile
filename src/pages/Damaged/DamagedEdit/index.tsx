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

function DamagedEdit() {
  const route = useRoute();
  const { damaged }: any = route.params;
  const { navigate } = useNavigation();
  const [obs, setObs] = useState("");

  function handleUpdate() {
    if (!obs) {
      alert("Preencha a descrição da avaria");
      return;
    }

    async function update() {
      await api.put(`/damaged/${damaged.id}`, {
        comments: obs,
      });
      navigate("Vessels");
    }

    Alert.alert("Editar avaria", "Você quer mesmo salvar esses dados?", [
      {
        text: "Cancelar",
      },
      { text: "Confimar", onPress: () => update() },
    ]);
  }
  useEffect(() => {
    setObs(damaged.comments);
    // console.log(damageds);
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
          <Text style={styles.titleText}>Editar Avaria</Text>
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
            <TouchableOpacity style={styles.ButtonDelete}>
              <Text style={styles.ButtonText}>Apagar avaria</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleUpdate()}
              style={styles.ButtonChangePassword}
            >
              <Text style={styles.ButtonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}

export default DamagedEdit;
