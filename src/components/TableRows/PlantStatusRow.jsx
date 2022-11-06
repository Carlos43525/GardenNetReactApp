import React from 'react';
import {
    Tr,
    Td,
    Flex,
    Text,
    Progress,
    Icon,
    Button,
    useColorModeValue,
} from "@chakra-ui/react";
import { FaEllipsisV } from "react-icons/fa";

const PlantStatusRow = ({ name, img, location, status, moisture }) => {
    return (
        <Tr>
            <Td minWidth={{ sm: "250px" }} pl="0px">
                <Flex alignItems="center" py=".8rem" minWidth="100%" flexWrap="nowrap" >
                    <Text
                        fontSize="md"
                        color={"gray.700"}
                        fontWeight="bold"
                        minWidth="100%"
                    >
                        {name}
                        <Icon as={img} h={"24px"} w={"24px"} me="18px" />
                    </Text>
                </Flex>
            </Td>
            <Td>
                <Text fontSize="md" color={"gray.700"} fontWeight="bold" pb=".5rem">
                    {location}
                </Text>
            </Td>
            {/* <Td>
                <Text fontSize="md" color={"gray.700"} fontWeight="bold" pb=".5rem">
                    {status}
                </Text>
            </Td> */}
            <Td>
                <Flex direction="column">
                    <Text
                        fontSize="md"
                        color="teal.300"
                        fontWeight="bold"
                        pb=".2rem"
                    >{`${moisture}%`}</Text>
                    <Progress
                        colorScheme={moisture === 100 ? "teal" : "cyan"}
                        size="xs"
                        value={moisture}
                        borderRadius="15px"
                    />
                </Flex>
            </Td>
            <Td>
                <Button p="0px" bg="transparent">
                    <Icon as={FaEllipsisV} color="gray.400" cursor="pointer" />
                </Button>
            </Td>
        </Tr>)
}

export default PlantStatusRow