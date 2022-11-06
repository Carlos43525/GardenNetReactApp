import React from 'react';
// Chakra imports
import {
    Box, 
    Flex,
    Stat,
    Divider, 
    Center, 
    StatHelpText,
    StatLabel,
    StatNumber,
    useColorModeValue,
  } from "@chakra-ui/react";

// Custom components
import Card from 'components/Card/Card';
import CardBody from 'components/Card/CardBody';
import IconBox from 'components/Icons/IconBox';
import Sparkline from 'components/Charts/Sparkline';
  
const SparkLineStats = ({ title, amount, percentage, icon }) => {
    const iconRed = useColorModeValue("#FF2A18", "#FF2A18");
    const textColor = useColorModeValue("white", "white");

  return (
    <Card minH={{base: "85px"}} bg={"#271E4D"} >
      <CardBody >
        <Flex flexDirection='row' align='center' justify='center' w='100%'>
          <Stat me='auto'>
            <StatLabel
              fontSize='sm'
              color='gray.400'
              fontWeight='bold'
              pb='.1rem'>
              {title}
            </StatLabel>
            <Flex>
              <StatNumber fontSize='lg' color={textColor}>
                {amount}
              </StatNumber>
              {/* <StatHelpText
                alignSelf='flex-end'
                justifySelf='flex-end'
                m='0px'
                color={percentage > 0 ? "green.400" : "red.400"}
                fontWeight='bold'
                ps='3px'
                fontSize='md'>
                {percentage > 0 ? `+${percentage}%` : `${percentage}%`}
              </StatHelpText> */}
            </Flex> 
          </Stat>
          <Sparkline />
          {/* <IconBox as='box' h={"45px"} w={"45px"} bg={iconRed}>
            {icon}
          </IconBox> */}
        </Flex>
        <Center height='50px'>
          <Divider orientation='vertical' />
        </Center>
      </CardBody>
    </Card>
  );
};

export default SparkLineStats