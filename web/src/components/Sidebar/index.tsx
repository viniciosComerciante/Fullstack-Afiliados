import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";

import { TiUpload } from "react-icons/ti";
import { FaThList } from "react-icons/fa";

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            PRINCIPAL
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" alignItems="center">
              <Icon as={TiUpload} fontSize={20} />
              <Text ml="4" fontWeight="medium">
                Importar Vendas
              </Text>
            </Link>
          </Stack>
        </Box>
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            VENDAS
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" alignItems="center">
              <Icon as={FaThList} fontSize={20} />
              <Text ml="4" fontWeight="medium">
                Últimas Vendas
              </Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
