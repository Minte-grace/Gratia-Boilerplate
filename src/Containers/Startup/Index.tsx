import React, { useEffect } from "react";
import { ActivityIndicator, View, Text } from "react-native";
import { useDispatch } from "react-redux";
import InitStartup from "../../Store/Startup/Init";
import { useTranslation } from "react-i18next";
import { Brand } from "../../Components";

const IndexStartupContainer = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(InitStartup.action());
  }, [dispatch]);

  return (
    <View style={{backgroundColor:'red'}}>
      <Brand />
      <ActivityIndicator size={"large"} style={{}} />
      <Text>jhvhjhvjvjhv</Text>
      <Text style={{}}>{t("welcome")}gcgchgchgvhgvh</Text>
    </View>
  );
};

export default IndexStartupContainer;
