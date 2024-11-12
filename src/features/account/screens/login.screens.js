import React, { useState, useContext } from "react";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  LoadingContainer,
  Loading,
  ErrorContainer,
  Title,
} from "../components/account.styles";
import { Text } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useContext(AuthenticationContext);

  

  return (
    <AccountBackground>
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
          <AccountCover />
          <Title>MacAgutu Meals To Go</Title>
          <AccountContainer>
            <AuthInput
              label="E-mail"
              value={email}
              textContentType="emailAddress"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={(u) => setEmail(u)}
            />
            <Spacer size="large">
              <AuthInput
                label="Password"
                value={password}
                textContentType="password"
                secureTextEntry
                autoCapitalize="none"
                onChangeText={(p) => setPassword(p)}
              />
            </Spacer>

            {error && (
          <ErrorContainer size="large">
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}

            <Spacer size="large">
              <AuthButton
                icon="lock-open-outline"
                mode="contained"
                onPress={()=>login(email,password)}
              >
                Login
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
