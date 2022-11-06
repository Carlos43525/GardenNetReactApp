import React from 'react';
// Chakra imports
import {
    Flex,
    Table,
    Tbody,
    Text,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import CardBody from "components/Card/CardBody";

import { PlantStatusRow } from 'components';

const WaterTable = ({ title, tableHeaders, data }) => {
    return (
        <Card my='22px' overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p='6px 0px 22px 0px'>
                <Flex direction='column'>
                    <Text fontSize='lg' color={"gray.700"} fontWeight='bold' pb='.5rem'>
                        {title}
                    </Text>
                </Flex>
            </CardHeader>
            <CardBody>
                <Table variant='simple' color={"gray.700"}>
                    <Thead>
                        <Tr my='.8rem' pl='0px'>
                            {tableHeaders.map((caption, idx) => {
                                return (
                                    <Th color='gray.400' key={idx} ps={idx === 0 ? "0px" : null}>
                                        {caption}
                                    </Th>
                                );
                            })}
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data.map((row) => {
                            return (
                                <PlantStatusRow
                                    key={row.name}
                                    name={row.name}
                                    img={row.img}
                                    location={row.location}
                                    status={row.status}
                                    moisture={row.moisture}
                                />
                            );
                        })}
                    </Tbody>
                </Table>
            </CardBody>
        </Card>)
}

export default WaterTable