import { View, Text, TextStyle, StyleSheet } from "react-native";
import React, { FC } from "react";
import { RFValue } from "react-native-responsive-fontsize";

interface Props {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  style?: TextStyle | TextStyle[];
  children: React.ReactNode;
  numberOfLines?: any;
}

const CustomText: FC<Props> = ({ variant, style, children, numberOfLines }) => {
  let computerFontSize = RFValue(12);

  switch (variant) {
    case "h1":
      computerFontSize = RFValue(24);
      break;
    case "h2":
      computerFontSize = RFValue(22);
      break;
    case "h3":
      computerFontSize = RFValue(20);
      break;
    case "h4":
      computerFontSize = RFValue(18);
      break;
    case "h5":
      computerFontSize = RFValue(16);
      break;
    case "h6":
      computerFontSize = RFValue(14);
      break;

    default:
      computerFontSize = RFValue(12);
    // break;
  }

  return (
    <Text
      style={{
        fontSize: computerFontSize,
        ...styles.text,
        ...style,
      }}
      numberOfLines={numberOfLines ? numberOfLines : undefined}
    >
      {children}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    textAlign: "center",
  },
});
