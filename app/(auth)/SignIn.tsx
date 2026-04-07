import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const SignIn = () => {
  return (
    <View>
      <Text>SignIn</Text>
      <Link
        className="mt-4 rounded bg-primary text-white p-4"
        href="/(auth)/SignUp"
      >
        Sign-Up
      </Link>
    </View>
  );
};

export default SignIn;
