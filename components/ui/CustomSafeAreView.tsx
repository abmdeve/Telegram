import { SafeAreaView, StyleSheet, Text, View, ViewStyle } from "react-native";
import React, { FC } from "react";
import { COLORS } from "@/utils/Constants";

interface CustomProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

const CustomSafeAreView: FC<CustomProps> = ({ children, style }) => {
  return (
    <View style={[styles.container, style]}>
      <SafeAreaView />
      {children}
    </View>
  );
};

export default CustomSafeAreView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },
});
