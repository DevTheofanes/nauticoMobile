import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  FlatList,
  TextInput,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import api from "../../service/axios";

import Backgroud from "../../assets/backgroudmenu.png";
import styles from "./styles";
import HeaderBack from "../../components/HeaderBack";

function EmbarcacaoList() {
  const [name, setName] = useState("");
  const [vessels, setVessels]: any = useState([]);

  const { navigate } = useNavigation();

  function handleNavigateToVessel(vessel: any) {
    navigate("Vessel", { vessel });
  }

  async function loadVessels() {
    const response = await api.get("/vessels");
    setVessels(response.data.allVessels);
  }

  useEffect(() => {
    loadVessels();
  }, []);

  return (
    <>
      <ImageBackground
        style={styles.container}
        resizeMode="cover"
        source={Backgroud}
      >
        <HeaderBack />

        <View style={styles.boxTitle}>
          <Text style={styles.title}>Todas as embarcações </Text>
        </View>

        <View style={styles.content}>
          <FlatList
            data={vessels}
            keyExtractor={(vessel): any => String(vessel.id)}
            renderItem={({ item: vessel }) => (
              <TouchableOpacity
                style={styles.boxItem}
                onPress={() => handleNavigateToVessel(vessel)}
              >
                <View style={styles.contentItem}>
                  <Text style={styles.textItem}>
                    <Text style={styles.textBold}>PROPRIETARIO:</Text>{" "}
                    {vessel.proprietario}
                  </Text>
                  <Text style={styles.textItem}>
                    <Text style={styles.textBold}>MARCA:</Text> {vessel.marca}
                  </Text>
                  <Text style={styles.textItem}>
                    <Text style={styles.textBold}>MODELO:</Text> {vessel.modelo}
                  </Text>
                </View>
                <View style={styles.alignView}>
                  <View style={styles.tagBox}>
                    <Text style={styles.tagText}>
                      {vessel.jetski ? "JETSKI" : "LANCHA"}
                    </Text>
                  </View>
                  <Text style={styles.textItem}>
                    <Text style={styles.textBold}>ANO:</Text> {vessel.ano}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>

        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.containerButton}
            onPress={() => navigate("VesselNew")}
          >
            <Feather name="plus" size={18} color="#FFF" />
            <Text style={styles.containerButtonText}>
              CADASTRAR NOVA EMBARCAÇÃO
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </>
  );
}

export default EmbarcacaoList;
