import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import { useNavigation, useRoute } from "@react-navigation/native";
import api from "../../service/axios";

import HeaderBack from "../../components/HeaderBack";

import Backgroud from "../../assets/backgroudmenu.png";
import styles from "./styles";

function Damaged() {
  const { navigate } = useNavigation();
  const route = useRoute();
  const { id }: any = route.params;
  const [damageds, setDamageds]: any = useState([]);

  async function loadDamaged() {
    const response = await api.get(`/damaged/${id}`);
    console.log(id);
    setDamageds(response.data.damaged);
  }

  useEffect(() => {
    loadDamaged();
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

        <View style={styles.boxTitle}>
          <Text style={styles.title}>Avarias dessa embarcação</Text>
        </View>

        <View style={styles.content}>
          <FlatList
            data={damageds}
            keyExtractor={(damaged) => String(damaged.id)}
            renderItem={({ item: damaged }) => (
              <TouchableOpacity
                style={styles.boxItem}
                onPress={() => navigate("DamagedEdit", { damaged })}
              >
                <View style={styles.contentItem}>
                  <Text style={styles.textItem}>
                    <Text style={styles.textBold}>Observações:</Text>{" "}
                    {damaged.comments}
                  </Text>
                </View>
                <View style={styles.tagBox}>
                  <Text style={styles.tagText}>
                    {/* {damaged.employee ? "FUNCIONARIO" : "CLIENTE"} */}
                    17/01/2021
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>

        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.containerButton}
            onPress={() => navigate("DamagedNew", { id })}
          >
            <Feather name="plus" size={18} color="#FFF" />
            <Text style={styles.containerButtonText}>
              CADASTRAR NOVA AVARIA
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </>
  );
}

export default Damaged;
