import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";

import api from "../../../service/axios";
import HeaderBackEdit from "../../../components/HeaderBackEdit";

import styles from "./styles";
import Backgroud from "../../../assets/backgroudmenu.png";
import Logo from "../../../assets/logo.png";

function UserPerfil() {
  const route = useRoute();
  const { navigate } = useNavigation();
  //   const { user }: any = route.params;

  const [cargo, setCargo] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  function handleCreate() {
    let employee = false;
    if (cargo !== "Cliente") {
      employee = true;
    }

    if (!name || !email || !password || !phone) {
      return Alert.alert(
        "Atenção",
        "Preencha todos os campos para cadastrar novo usuario"
      );
    }

    async function create() {
      try {
        const response = await api.post("/users", {
          name,
          email,
          password,
          phone,
          employee,
        });

        console.log(response);
      } catch (error) {
        // console.log(error.response);
        return Alert.alert("Algo deu errado, verifique os dados novamente!");
      }

      //   navigate("Users");
    }
    Alert.alert(
      "Criar novo Usuário",
      "Você quer mesmo criar com esses dados?",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancelado"),
        },
        { text: "Confimar", onPress: () => create() },
      ]
    );
  }

  return (
    <>
      <ImageBackground
        style={styles.container}
        resizeMode="cover"
        source={Backgroud}
      >
        <HeaderBackEdit />

        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Criar novo usuário</Text>
        </View>

        <View style={styles.mainPageForm}>
          <View style={styles.fieldInput}>
            <Text style={styles.fieldInputText}>Cargo:</Text>
            <View style={styles.fieldInputTextInputProprietario}>
              <Picker
                selectedValue={cargo}
                style={styles.fieldInputTextInputProprietarioPicker}
                onValueChange={(itemValue: any, itemIndex) => {
                  setCargo(itemValue);
                }}
              >
                <Picker.Item label={"Cliente"} value={"Cliente"} />
                <Picker.Item label={"Funcionario"} value={"Funcionario"} />
              </Picker>
            </View>
          </View>

          <View style={styles.fieldInput}>
            <Text style={styles.fieldInputText}>Nome:</Text>
            <TextInput
              value={name}
              onChangeText={setName}
              style={styles.fieldInputTextInputNome}
            />
          </View>

          <View style={styles.fieldInput}>
            <Text style={styles.fieldInputText}>Email:</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              style={styles.fieldInputTextInputNome}
            />
          </View>

          <View style={styles.fieldInput}>
            <Text style={styles.fieldInputText}>Senha:</Text>
            <TextInput
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
              maxLength={6}
              style={styles.fieldInputTextInputNome}
            />
          </View>

          <View style={styles.fieldInput}>
            <Text style={styles.fieldInputText}>Telefone:</Text>
            <TextInput
              value={phone}
              keyboardType="phone-pad"
              onChangeText={setPhone}
              style={styles.fieldInputTextInputNome}
            />
          </View>
        </View>

        <View style={styles.containerButtons}>
          <TouchableOpacity
            onPress={handleCreate}
            style={styles.ButtonChangePassword}
          >
            <Text style={styles.ButtonText}>Criar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Image style={styles.footerImg} source={Logo} />
        </View>
      </ImageBackground>
    </>
  );
}

export default UserPerfil;
