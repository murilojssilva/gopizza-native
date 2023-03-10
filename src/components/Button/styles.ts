import styled, { css } from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export type ButtonTypeProps = "primary" | "secondary";

type ButtonContainerProps = {
  type: ButtonTypeProps;
};

export const ButtonContainer = styled(RectButton)<ButtonContainerProps>`
  flex: 1;
  max-height: 56px;
  min-height: 56px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, type }) =>
    type === "primary" ? theme.COLORS.SUCCESS_900 : theme.COLORS.PRIMARY_800};
`;

export const ButtonTitle = styled.Text`
  font-size: 14px;
  ${({ theme }) => css`
    color: ${theme.COLORS.TITLE};
    font-family: ${theme.FONTS.TEXT};
  `}
`;

export const ButtonLoad = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.TITLE,
}))``;
