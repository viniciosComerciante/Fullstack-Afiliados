import { Input } from "@/components/Form/Input";
import { Button, Flex, Stack } from "@chakra-ui/react";

export default function SignIn() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxW={360}
        bg="gray.800"
        padding={8}
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">
          <Input name="email" label="E-mail" type="email"></Input>
          <Input name="password" label="Senha" type="password"></Input>
        </Stack>
        <Button type="submit" mt="6" colorScheme="blue">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
