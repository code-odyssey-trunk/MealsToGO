import styled from "styled-components/native";

export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const Info = styled.View`
  padding-top: ${(props) => props.theme.space[3]};
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[1]};
`;

export const Section = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SectionEnd = styled.View`
  flex-direction: row;
`;

export const Icon = styled.Image`
  width: 15px, 
  height: 15px
`;
