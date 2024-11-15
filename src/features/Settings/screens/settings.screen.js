import React, { useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import styled from "styled-components/native";
import { List, Avatar, Divider } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
  background-color: rgba(255, 255, 255, 0.4);
`;

const AvatarContainer = styled.View`
  align-items: center;
  padding: ${(props) => props.theme.space[3]};
`;

const CustomDivider = styled(Divider)`
  width: 70%;
  align-self: center;
  background-color: #000000;
`;

export const SettingsScreen = ({ navigation }) => {
  const { logout, user } = useContext(AuthenticationContext);

  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Icon
          size={180}
          icon="human"
          backgroundColor={colors.brand.primary}
        />
        <Spacer position="top" size="large">
          <Text variant="label">{user?.email}</Text>
        </Spacer>
      </AvatarContainer>
    
      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={(props) => (
            <List.Icon {...props} color={colors.ui.secondary} icon="heart" />
          )}
          onPress={() => navigation.navigate("Favourites")}
        />
     
        <SettingsItem
          title="Logout"
          left={(props) => (
            <List.Icon {...props} color={colors.ui.secondary} icon="door" />
          )}
          onPress={logout}
        />
      </List.Section>
    </SafeArea>
  );
};
