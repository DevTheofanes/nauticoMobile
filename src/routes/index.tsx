import React from "react";
import { ActivityIndicator, View, StatusBar } from "react-native";

import AuthRoutes from "./authRoutes";
import AppRoutes from "./AppStack";

import { useAuth } from "../hooks/auth";

const Routes: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="666" />
      </View>
    );
  }
  return user ? (
    <>
      {/* <StatusBar barStyle="light-content" backgroundColor="#28262e" /> */}
      <AppRoutes />
    </>
  ) : (
    <AuthRoutes />
  );
  //   return <AppRoutes />;
};

export default Routes;
