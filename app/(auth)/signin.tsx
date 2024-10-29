import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import CustomSafeAreView from "@/components/ui/CustomSafeAreView";
import LottieView from "lottie-react-native";
import { siginStyles } from "@/styles/signinStyles";
import CustomText from "@/components/ui/CustomText";

const Page = () => {
  const handleSigin = async () => {};

  return (
    <CustomSafeAreView style={siginStyles.container}>
      <LottieView
        autoPlay
        loop
        style={siginStyles.animation}
        source={require("@/assets/animations/telegram.json")}
      />
      <CustomText variant="h3" style={siginStyles.title}>
        Welcome to Telegram
      </CustomText>
      <CustomText style={siginStyles.message}>
        Message are heavily and can self-destruct.
      </CustomText>

      <TouchableOpacity style={siginStyles.loginBtn} onPress={handleSigin}>
        <Image
          source={require("@/assets/icons/google.png")}
          style={siginStyles.googleIcon}
        />
        <CustomText style={siginStyles.loginBtnText}>
          Sign in with Google
        </CustomText>
      </TouchableOpacity>
    </CustomSafeAreView>
  );
};

export default Page;
