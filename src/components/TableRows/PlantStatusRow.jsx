import React from 'react';
import {
    Tr,
    Td,
    Flex,
    Text,
    Progress,
    Icon,
    Button,
    Badge, 
    useColorModeValue,
} from "@chakra-ui/react";
import { FaEllipsisV } from "react-icons/fa";


const PlantStatusRow = ({ ID, name, img, location, fertilizerStatus, moisture, lastWatered, datePlanted }) => {
    return (
        <Tr>
            {ID
                ? 
                    <Td pl={"0px"}>
                        <Text fontSize="md" color={"gray.400"} fontWeight="bold" pb=".5rem" >
                            {ID}
                        </Text>
                    </Td>
                : <></>
            }
            <Td minWidth={{ sm: "150px" }} pl="0px">
                <Flex alignItems="center" py=".8rem" minWidth="100%" flexWrap="nowrap" >
                    <Icon as={img} h={"24px"} w={"24px"} me="18px" />
                    <Text
                        fontSize="md"
                        color={"gray.700"}
                        fontWeight="bold"
                        minWidth="100%"
                    >
                        {name}
                    </Text>
                </Flex>
            </Td>
            <Td>
                <Text fontSize="md" color={"gray.700"} fontWeight="bold" pb=".5rem">
                    {location}
                </Text>
            </Td>
            <Td>
                <Flex direction="column">
                    <Text
                        fontSize="md"
                        color="teal.300"
                        fontWeight="bold"
                        pb=".2rem"
                    >{`${moisture}%`}
                    </Text>
                    <Progress
                        colorScheme={moisture === 100 ? "teal" : "cyan"}
                        size="xs"
                        value={moisture}
                        borderRadius="15px"
                    />
                </Flex>
            </Td>
            {ID
                ? <Td>
                    <Badge
                        bg={fertilizerStatus === "Good" ? "green.400" : 'yellow.400'}
                        color={fertilizerStatus === "Good" ? "white" : 'yellow.400'}
                        fontSize="16px"
                        p="3px 10px"
                        borderRadius="8px"
                    >
                        {fertilizerStatus}
                    </Badge>
                </Td>
                : <></>
            }
            <Td>                    
                {lastWatered ?
                    <Text fontSize="md" color={"gray.700"} fontWeight="bold" pb=".5rem">
                        {lastWatered}
                    </Text> :
                    <Text fontSize="md" color={"gray.700"} fontWeight="bold" pb=".5rem">
                        {datePlanted}
                    </Text>
                }

            </Td>
            <Td>
                <Button p="0px" bg="transparent">
                    <Icon as={FaEllipsisV} color="gray.400" cursor="pointer" />
                </Button>
            </Td>
        </Tr>)
}

export default PlantStatusRow