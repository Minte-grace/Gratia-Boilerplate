import React from "react";
import { View, Text, Image } from "react-native";

interface Props {
  height?: number | string;
  width?: number | string;
  mode?: "contain" | "cover" | "stretch" | "repeat" | "center";
}

const Brand = ({ height, width, mode }: Props) => {
  return (
    <View style={{ height, width }}>
      <Text>Button</Text>
    </View>
  );
};

Brand.defaultProps = {
  height: 200,
  mode: "contain",
  width: 200,
};

export default Brand;
