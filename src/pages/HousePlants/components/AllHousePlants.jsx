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
    Button, 

} from "@chakra-ui/react";
// Custom components
import { PlantStatusRow } from 'components';
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import CardBody from "components/Card/CardBody";
import { PopupModal } from 'components';
// Icons

const AllHousePlants = ({ title, tableHeaders, data }) => {
    return (
        <Card overflowX={{ sm: "scroll", xl: "hidden" }} >
            <CardHeader p='6px 0px 22px 0px'>
                <Flex justify='space-between' align='center' mb='1rem' w='100%'>
                    <Text fontSize='lg' color={"gray.700"} fontWeight='bold' pb='.5rem'>
                        {title}
                    </Text>
                    <PopupModal 
                    colorScheme='teal'
                    borderColor='green.400'
                    color='green.400'
                    variant='outline'
                    fontSize='md'
                    name="Add New Plant" 
                    />
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
                                    key={row.ID}
                                    ID={row.ID}
                                    name={row.name}
                                    img={row.img}
                                    location={row.location}
                                    fertilizerStatus={row.fertilizerStatus}
                                    moisture={row.moisture}
                                    datePlanted={row.datePlanted}
                                />
                            );
                        })}
                    </Tbody>
                </Table>
            </CardBody>
        </Card>)
}

export default AllHousePlants