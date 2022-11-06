import React from 'react';
import { Flex, Box, Text } from "@chakra-ui/react";

import Card from 'components/Card/Card';
import CardBody from 'components/Card/CardBody';
import DonutChart from 'components/Charts/DonutChart';

const PlantStats = ({ primaryColor, secondaryColor, size }) => {
    return (
        <Flex flexDirection='row' align='center' justify='center' >
            <Card minH={{ base: "85px" }} >
                <CardBody >
                    <Flex flexDirection='row' align='center' justify='space-between' w='100%'>
                        <Flex align='center'>
                            <DonutChart />
                            <Text fontSize='md' color='gray.700' fontWeight='bold' >
                                Underwatered
                                <Text fontSize='md' color='gray.700' fontWeight='bold' >
                                    26%
                                </Text>
                            </Text>
                        </Flex>
                        <Flex align='center'>
                            <DonutChart />
                            <Text fontSize='md' color='gray.700' fontWeight='bold' >
                                Underwatered
                                <Text fontSize='md' color='gray.700' fontWeight='bold' >
                                    26%
                                </Text>
                            </Text>
                        </Flex>
                    </Flex>
                </CardBody>
            </Card>
        </Flex>
    )
}

export default PlantStats