import React, { useState } from "react";
import { ActivityIndicator } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  LoadingContainer,
  Loading,
  Title,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onRegister = async () => {
    setIsLoading(true);

    // Simulate a registration API call
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate("Login"); // Navigate to login after registration
    }, 4000); // 4000 ms = 4 seconds for demonstration
  };

  return (
    <AccountBackground>
      <AccountCover />
      

      {isLoading ? (
        <LoadingContainer>
          <Loading
            size={50}
            animating={true}
            theme={{ colors: { primary: "tomato" } }}
          />
        </LoadingContainer>
      ) : (
        <>
        <AccountContainer>
            <Title>Meals To Go</Title>
          <AuthInput
            label="E-mail"
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(u) => setEmail(u)}
          />
          <Spacer size="large">
            <AuthInput
              label="Password"
              textContentType="password"
              secureTextEntry
              autoCapitalize="none"
              onChangeText={(p) => setPassword(p)}
            />
          </Spacer>
          <Spacer size="large">
            <AuthInput
              label="Repeat Password"
              textContentType="password"
              secureTextEntry
              autoCapitalize="none"
              onChangeText={(p) => setRepeatedPassword(p)}
            />
          </Spacer>
          <Spacer size="large">
            <AuthButton icon="email" mode="contained" onPress={onRegister}>
              Register
            </AuthButton>
          </Spacer>
        </AccountContainer>
        <Spacer size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
        </>
      )}
      
     
    </AccountBackground>
  );
};
