import React from 'react';
import { Box, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";


const TaskRow = ({ name, info, icon, iconColor, dt }) => {
    const textColor = useColorModeValue("gray.700", "white");
    return (
        <Flex my="1rem" justifyContent="space-between">
            <Flex alignItems="center">
                <Box
                    me="12px"
                    borderRadius="50%"
                    color={
                        "gray.400"
                    }
                    border="1px solid"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    w="40px"
                    h="40px"
                >
                    <Icon fontSize={"25px"} as={icon} color={iconColor}/>
                </Box>
                <Flex direction="column">
                    <Text
                        fontSize={{ sm: "md", md: "lg", lg: "md" }}
                        color={textColor}
                        fontWeight="bold"
                    >
                        {name}
                    </Text>
                    <Text
                        fontSize={{ sm: "xs", md: "sm", lg: "xs" }}
                        color="gray.400"
                        fontWeight="semibold"
                    >
                        {info}
                    </Text>
                </Flex>
            </Flex>
            <Box
                color={
                    "gray.400"
                }
            >
                <Text fontSize={{ sm: "md", md: "lg", lg: "md" }} fontWeight="bold">
                    {dt}
                </Text>
            </Box>
        </Flex>
    )
}

export default TaskRow