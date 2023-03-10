import { TextInputProps } from "react-native";
import { InputContainer, InputTypeProps } from "./styles";

type InputProps = TextInputProps & {
  type?: InputTypeProps;
};

export function Input({ type = "primary", ...rest }: InputProps) {
  return <InputContainer type={type} {...rest} />;
}
