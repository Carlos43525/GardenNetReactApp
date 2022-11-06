import React from "react";
// Chakra imports
import { Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import TaskRow from "./TaskRow";
import { FaRegCalendarAlt } from "react-icons/fa";

const Tasks = ({ title, date, importantTasks, otherTasks }) => {
    const textColor = useColorModeValue("gray.700", "white");
    return (
        <Card>
            <CardHeader mb='12px'>
                <Flex direction='column' w='100%'>
                    <Flex
                        direction={{ sm: "column", lg: "row" }}
                        justify={{ sm: "center", lg: "space-between" }}
                        align={{ sm: "center" }}
                        w='100%'
                        my={{ md: "12px" }}>
                        <Text
                            color={textColor}
                            fontSize={{ sm: "lg", md: "xl", lg: "lg" }}
                            fontWeight='bold'>
                            {title}
                        </Text>
                        <Flex align='center'>
                            <Icon
                                as={FaRegCalendarAlt}
                                color='gray.400'
                                fontSize='md'
                                me='6px'></Icon>
                            <Text color='gray.400' fontSize='sm' fontWeight='semibold'>
                                {date}
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
            </CardHeader>
            <CardBody>
                <Flex direction='column' w='100%'>
                    <Text
                        color='gray.400'
                        fontSize={{ sm: "sm", md: "md" }}
                        fontWeight='semibold'
                        my='12px'>
                        IMPORTANT
                    </Text>
                    {importantTasks.map((row) => {
                        return (
                            <TaskRow
                                name={row.name}
                                icon={row.icon}
                                iconColor={row.iconColor}
                                info={row.info}
                                dt={row.dt}
                            />
                        );
                    })}
                    <Text
                        color='gray.400'
                        fontSize={{ sm: "sm", md: "md" }}
                        fontWeight='semibold'
                        my='12px'>
                        OTHER
                    </Text>
                    {otherTasks.map((row) => {
                        return (
                            <TaskRow
                                name={row.name}
                                icon={row.icon}
                                iconColor={row.iconColor}
                                info={row.info}
                                dt={row.dt}
                            />
                        );
                    })}
                </Flex>
            </CardBody>
        </Card>
    )
}

export default Tasks