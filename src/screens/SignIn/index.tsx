import { SignInContainer } from "./styles";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignIn() {
  return (
    <SignInContainer>
      <Input
        placeholder="E-mail"
        type="secondary"
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Input placeholder="Senha" type="secondary" secureTextEntry />
      <Button title="Entrar" type="secondary" />
    </SignInContainer>
  );
}
