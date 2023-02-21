import { Sidebar } from "@/components/Sidebar";
import { Flex } from "@chakra-ui/react";
import { Header } from "../components/Header";
export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6" flexDir="column">
        <Header />
        <Sidebar></Sidebar>
      </Flex>
    </Flex>
  );
}
