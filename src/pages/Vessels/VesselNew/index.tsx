import React, { useState, useEffect } from "react";
import {
  View,
  KeyboardAvoidingView,
  Text,
  Image,
  ImageBackground,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";

import api from "../../../service/axios";
import HeaderBack from "../../../components/HeaderBack";
import styles from "./styles";

import Backgroud from "../../../assets/backgroudmenu.png";
import Grupo56 from "../../../assets/Grupo56.png";

function Vessel() {
  const { navigate } = useNavigation();

  const [users, setUsers]: any = useState([]);
  const [userId, setUserId]: any = useState("");
  const [jetski, setjetski]: any = useState("");
  const [name, setName] = useState("");
  const [proprietario, setProprietario] = useState("Selecione um cliente:");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [ano, setAno] = useState("");
  const [comprimentototal, setComprimentototal] = useState("");
  const [motor, setMotor] = useState("");
  const [combustivel, setCombustivel] = useState("");

  function handleUpdate() {
    if (
      !name ||
      !proprietario ||
      !marca ||
      !modelo ||
      !ano ||
      !comprimentototal ||
      !motor ||
      !combustivel
    ) {
      alert("Preencha todos os campos!");
      return;
    }

    async function update() {
      // await api.delete(`/vessels/${vessel.id}`);
      navigate("Home");
    }

    Alert.alert("Editar Embarcação", "Você quer mesmo salvar esses dados?", [
      {
        text: "Cancelar",
      },
      { text: "Confimar", onPress: () => update() },
    ]);
  }

  async function loadUsers() {
    const response = await api.get("/users");
    setUsers(response.data.allClients);
  }

  function saveDados(id: number) {
    for (const user in users) {
      if (Object.prototype.hasOwnProperty.call(users, user)) {
        const element = users[user];
        console.log(id);
        if (element.id === id) {
          // console.log(element);
          setUserId(id);
          setProprietario(element.name);
        }
      }
    }
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <>
      {/* <KeyboardAvoidingView style={styles.container} enabled> */}
      <ImageBackground
        style={styles.container}
        resizeMode="cover"
        source={Backgroud}
      >
        <HeaderBack />

        <View style={styles.containerbox}>
          <Image source={Grupo56} />
          <Text style={styles.containerboxText}>
            Dados {jetski ? "do Jetski" : "da Lancha"}
          </Text>
        </View>

        <View style={styles.forms}>
          <View style={styles.fieldInput}>
            <Text style={styles.fieldInputText}>Proprietário:</Text>
            {/* <TextInput
                value={proprietario}
                onChangeText={setProprietario}
                style={styles.fieldInputTextInputProprietario}
              /> */}
            <View style={styles.fieldInputTextInputProprietario}>
              <Picker
                selectedValue={proprietario}
                style={styles.fieldInputTextInputProprietarioPicker}
                onValueChange={(itemValue: any, itemIndex) => {
                  setProprietario(itemValue);
                  saveDados(itemValue);
                }}
              >
                {users.map((user: any) => {
                  return (
                    <Picker.Item
                      key={String(user.id)}
                      label={user.name}
                      value={user.id}
                    />
                  );
                })}
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
            <Text style={styles.fieldInputText}>Marca:</Text>
            <TextInput
              value={marca}
              onChangeText={setMarca}
              style={styles.fieldInputTextInputMarca}
            />
          </View>

          <View style={styles.fieldInput}>
            <Text style={styles.fieldInputText}>Modelo:</Text>
            <TextInput
              value={modelo}
              onChangeText={setModelo}
              style={styles.fieldInputTextInputModelo}
            />
          </View>

          <View style={styles.fieldInput}>
            <Text style={styles.fieldInputText}>Ano:</Text>
            <TextInput
              value={ano}
              onChangeText={setAno}
              style={styles.fieldInputTextInputAno}
            />
          </View>

          <View style={styles.fieldInput}>
            <Text style={styles.fieldInputText}>Comprimento total:</Text>
            <TextInput
              value={comprimentototal}
              onChangeText={setComprimentototal}
              style={styles.fieldInputTextInputComprimentoTotal}
            />
          </View>

          <View style={styles.fieldInput}>
            <Text style={styles.fieldInputText}>Motor:</Text>
            <TextInput
              value={motor}
              onChangeText={setMotor}
              style={styles.fieldInputTextInputMotor}
            />
          </View>

          <View style={styles.fieldInput}>
            <Text style={styles.fieldInputText}>
              Capacidade de Combustível:
            </Text>
            <TextInput
              value={combustivel}
              onChangeText={setCombustivel}
              style={styles.fieldInputTextInputCapacidadeDeCombustivel}
            />
          </View>

          <View style={styles.containerButtons}>
            <TouchableOpacity onPress={handleUpdate} style={styles.ButtonSave}>
              <Text style={styles.ButtonText}>Criar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      {/* </KeyboardAvoidingView> */}
    </>
  );
}
export default Vessel;
