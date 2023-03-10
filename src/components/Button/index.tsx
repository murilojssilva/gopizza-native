import { RectButtonProps } from "react-native-gesture-handler";
import {
  ButtonContainer,
  ButtonLoad,
  ButtonTitle,
  ButtonTypeProps,
} from "./styles";

type ButtonProps = RectButtonProps & {
  title: string;
  type?: ButtonTypeProps;
  isLoading?: boolean;
};

export function Button({
  type = "primary",
  title,
  isLoading = false,
  ...rest
}: ButtonProps) {
  return (
    <ButtonContainer type={type} {...rest} enabled={!isLoading}>
      {isLoading ? <ButtonLoad /> : <ButtonTitle>{title}</ButtonTitle>}
    </ButtonContainer>
  );
}
