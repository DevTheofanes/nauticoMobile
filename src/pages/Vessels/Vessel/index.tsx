import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Api from "../../../service/auth";

import Backgroud from "../../../assets/backgroudmenu.png";
import HeaderBackEdit from "../../../components/HeaderBackEdit";
import styles from "./styles";
import Grupo56 from "../../../assets/Grupo56.png";
import Pasta from "../../../assets/Caminho46.png";
import Logo from "../../../assets/logo.png";

function Vessel() {
  const route: any = useRoute();
  const { navigate } = useNavigation();
  const { vessel }: any = route.params;

  const [jetski, setjetski] = useState("");
  const [name, setName] = useState("");
  const [proprietario, setProprietario] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [ano, setAno] = useState("");
  const [comprimentototal, setComprimentototal] = useState("");
  const [motor, setMotor] = useState("");
  const [combustivel, setCombustivel] = useState("");

  function hadleNavigateToAvarias() {
    navigate("Avarias");
  }
  function hadleNavigateToAchadosPerdidos() {
    navigate("AchadosPedidos");
  }
  function hadleNavigateToCheckList() {
    navigate("CheckList");
  }

  async function loadDataVessel() {
    setjetski(vessel.jetski);
    setName(vessel.name);
    setProprietario(vessel.proprietario);
    setMarca(vessel.marca);
    setModelo(vessel.modelo);
    setAno(vessel.ano);
    setComprimentototal(vessel.comprimentototal);
    setMotor(vessel.motor);
    setCombustivel(vessel.combustivel);
  }

  useEffect(() => {
    loadDataVessel();
  }, []);

  return (
    <>
      <ImageBackground
        style={styles.container}
        resizeMode="cover"
        source={Backgroud}
      >
        <HeaderBackEdit route="VesselEdit" data={vessel} />
        <View style={styles.containerbox}>
          <Image source={Grupo56} />
          <Text style={styles.containerboxText}>
            Dados {jetski ? "do Jetski" : "da Lancha"}
          </Text>
        </View>

        <View style={styles.forms}>
          <View style={styles.fieldInput}>
            <Text style={styles.fieldInputText}>Nome:</Text>
            <TextInput
              value={name}
              onChangeText={setName}
              style={styles.fieldInputTextInputNome}
              editable={false}
            />
          </View>

          <View style={styles.fieldInput}>
            <Text style={styles.fieldInputText}>Proprietário:</Text>
            <TextInput
              value={proprietario}
              editable={false}
              onChangeText={setProprietario}
              style={styles.fieldInputTextInputProprietario}
            />
          </View>

          <View style={styles.fieldInput}>
            <Text style={styles.fieldInputText}>Marca:</Text>
            <TextInput
              value={marca}
              editable={false}
              onChangeText={setMarca}
              style={styles.fieldInputTextInputMarca}
            />
          </View>

          <View style={styles.fieldInput}>
            <Text style={styles.fieldInputText}>Modelo:</Text>
            <TextInput
              value={modelo}
              editable={false}
              onChangeText={setModelo}
              style={styles.fieldInputTextInputModelo}
            />
          </View>

          <View style={styles.fieldInput}>
            <Text style={styles.fieldInputText}>Ano:</Text>
            <TextInput
              value={ano}
              editable={false}
              onChangeText={setAno}
              style={styles.fieldInputTextInputAno}
            />
          </View>

          <View style={styles.fieldInput}>
            <Text style={styles.fieldInputText}>Comprimento total:</Text>
            <TextInput
              editable={false}
              value={comprimentototal}
              onChangeText={setComprimentototal}
              style={styles.fieldInputTextInputComprimentoTotal}
            />
          </View>

          <View style={styles.fieldInput}>
            <Text style={styles.fieldInputText}>Motor:</Text>
            <TextInput
              editable={false}
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
              editable={false}
              value={combustivel}
              onChangeText={setCombustivel}
              style={styles.fieldInputTextInputCapacidadeDeCombustivel}
            />
          </View>

          <View style={styles.mainpastas}>
            <View style={styles.mainpastas}>
              <Image source={Pasta} />
              <Text
                onPress={() => navigate("Damaged", { id: vessel.id })}
                style={styles.mainpastasText}
              >
                Avarias
              </Text>
            </View>

            <View style={styles.mainpastas}>
              <Image source={Pasta} />
              <Text
                onPress={() => navigate("Findings", { id: vessel.id })}
                style={styles.mainpastasText}
              >
                Achados
              </Text>
            </View>

            <View style={styles.mainpastas}>
              <Image source={Pasta} />
              <Text
                onPress={hadleNavigateToCheckList}
                style={styles.mainpastasText}
              >
                CheckList
              </Text>
            </View>
          </View>

          <View style={styles.footer}>
            <Image style={styles.footerImg} source={Logo} />
          </View>
        </View>
      </ImageBackground>
    </>
  );
}
export default Vessel;
