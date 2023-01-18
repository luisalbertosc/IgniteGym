import { VStack, Image, Text, Center, Heading } from "native-base";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

import LogoSvg from "@assets/logo.svg";
import BackgroundImg from "@assets/background.png";

export const SignIn = () => {
  return (
    <VStack flex={1} bg="gray.700" px={10}>
      <Image
        source={BackgroundImg}
        alt="Pessoas praticando exercícios"
        resizeMode="contain"
        position="absolute"
      />

      <Center my={24}>
        <LogoSvg />

        <Text color="gray.100" fontSize="sm">
          Treine seu corpo e sua mente
        </Text>
      </Center>

      <Center>
        <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
          Acesse sua conta
        </Heading>

        <Input
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input placeholder="Senha" secureTextEntry />

        <Button title="Acessar" />
        <Button title="Criar conta" variant="outline" />
      </Center>
    </VStack>
  );
};
