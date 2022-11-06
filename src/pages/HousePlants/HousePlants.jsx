import React from 'react';
// Chakra imports
import {
  Flex,
  Box,
  Grid,
  Image,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from 'components/Card/Card';
import CardBody from 'components/Card/CardBody';
import PlantStats from './components/PlantStats';
import { AreaChart } from 'components';
import HumidityTemperature from './components/HumidityTemperature';
import WaterTable from './components/WaterTable';
// Local component imports

export const tableData = [
  {
    name: "Lipstick Plant",
    img: "" , 
    location: "Ofice", 
    status:"Good", 
    moisture: 35
  },
  {
    name: "Lipstick Plant",
    img: "" , 
    location: "Ofice", 
    status:"Good", 
    moisture: 44
  },
  {
    name: "Lipstick Plant",
    img: "" , 
    location: "Ofice", 
    status:"Good", 
    moisture: 46
  },
  {
    name: "Lipstick Plant",
    img: "" , 
    location: "Ofice", 
    status:"Good", 
    moisture: 55
  },
  {
    name: "Lipstick Plant",
    img: "" , 
    location: "Ofice", 
    status:"Good", 
    moisture: 56
  },
];

const HousePlants = () => {
  return (
    <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>
      <Grid templateColumns={{ sm: "1fr", lg: "1fr 1fr" }} templateRows='1fr' gap='26px'>
          <Grid
            templateColumns={"1fr"}
            templateRows={{

            }}
            gap='26px'>
            <PlantStats />
            <HumidityTemperature
              tittle={"Humidity and Temperature"}
              chart={<AreaChart />}
            />
          </Grid>
          <WaterTable 
            title={"Water Soon"}
            tableHeaders={["Plant", "Location", "Soil Mositure", ""]}
            // tableHeaders={["#", "Plant", "Location", "Soil Mositure", ""]}
            data={tableData}
            />
      </Grid>
    </Flex>


  )
}

export default HousePlants