import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Wederson Fagundes</Text>
          <Text color="gray.300" fontSize="small">
            weederson@icloud.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Wederson Fagundes" src="https://github.com/wedersonf.png" />
    </Flex>
);
}