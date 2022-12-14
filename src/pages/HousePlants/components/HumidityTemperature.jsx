import React from 'react'; 
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";

const HumidityTemperature = ({ title, chart }) => {
    return (

        <Card p='28px 10px 16px 0px' mb={{ sm: "26px", lg: "0px" }}>
            <CardHeader mb='20px' pl='22px'>
                <Flex direction='column' alignSelf='flex-start'>
                    <Text fontSize='lg' color={"gray.700"} fontWeight='bold' mb='6px'>
                        {title}
                    </Text>
                </Flex>
            </CardHeader>
            <Box w='100%' h={{ sm: "300px" }} ps='8px'>
                {chart}
            </Box>
        </Card>
    );
}

export default HumidityTemperature