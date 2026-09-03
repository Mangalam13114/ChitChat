import { useAuth } from "@clerk/expo";
import { View, Text, ScrollView, Pressable } from "react-native";

const ProfileTab = () => {
  const { signOut } = useAuth();
  
  return (
    <ScrollView className="bg-surface" contentInsetAdjustmentBehavior="automatic">
      <Text className="text-white">Profile Tab</Text>
      <Pressable onPress={() => signOut()} className="mt-4 px-4 py-2 rounded-lg" style={{ backgroundColor: "red" }}>
        <Text className="text-white">SignOut</Text>
      </Pressable>
    </ScrollView>
  );
};

export default ProfileTab;
