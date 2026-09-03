import { Redirect, Stack } from "expo-router";
import { View, Text } from "react-native";
import { useAuth } from "@clerk/expo";
import { HeaderShownContext } from "expo-router/build/react-navigation";

const AuthLayout = () => {
  // const isauth = true;
  // if(isauth) return <Redirect href={"/(tabs)"} />

  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) return null;
  if (isSignedIn) return <Redirect href={"/(tabs)"} />;

  return <Stack screenOptions={{ headerShown: false }} />;
};

export default AuthLayout;
