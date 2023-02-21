import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import logo from "../../../public/namu-logo.png";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      align="center"
      justifyContent="space-between"
      px="6"
    >
      <Flex justify="center" align="center">
        <Image src={logo} alt="logo na namu" width={60} />
        <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" ml="5">
          Controle de vendas
        </Text>
      </Flex>

      <Flex align="center">
        <Box mr="4" textAlign="right">
          <Text>Vinícios Oliveira</Text>
          <Text color="gray.300" fontSize="small">
            vinicompif@gmail.com
          </Text>
        </Box>
        <Avatar
          size="md"
          src="https://cdn.pegadesconto.com.br/novo-logotipo-namu-cursos.png"
        ></Avatar>
      </Flex>
    </Flex>
  );
}
