import { Platform } from "react-native";

export const BASE_URL =
  Platform.OS === "android" ? "http://102.129.82.63" : "http://localhost:3000";
export const SOCKET_URL =
  Platform.OS === "android" ? "ws://102.129.82.63" : "ws://localhost:3000";
