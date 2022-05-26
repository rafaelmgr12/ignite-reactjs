import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Rafael G. Ribeiro</Text>
          <Text color="gray.300" fontSize="small">
            ribeirorafaelmatheus@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Rafael G. Ribeiro" src="https://avatars.githubusercontent.com/u/54240409?v=4" />
    </Flex>
  );
}