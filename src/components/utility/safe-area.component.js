import { Platform, StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components/native";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-top: ${Platform.OS === 'android' && StatusBar.currentHeight ? `${StatusBar.currentHeight}px` : '0px'};
`;
