import React from 'react';
// Chakra imports
import {
  Flex,
  Box,
  Grid, 
  GridItem, 
  Image,
  SimpleGrid,
  useColorModeValue,
  Container
} from "@chakra-ui/react";
import PlantStats from './components/PlantStats';
import { AreaChart } from 'components';
import HumidityTemperature from './components/HumidityTemperature';
import WaterTable from './components/WaterTable';
// Local component imports
import AllHousePlants from './components/AllHousePlants';
// Icons
import { RiPlantFill } from "react-icons/ri";


export const tableData = [
  {
    name: "Lipstick Plant",
    img: RiPlantFill,
    location: "Ofice",
    status: "Good",
    moisture: 35,
    lastWatered: "10/30/2022",
  },
  {
    name: "Lipstick Plant",
    img: RiPlantFill,
    location: "Ofice",
    status: "Good",
    moisture: 44,
    lastWatered: "10/30/2022",
  },
  {
    name: "Lipstick Plant",
    img: RiPlantFill,
    location: "Ofice",
    status: "Good",
    moisture: 46,
    lastWatered: "10/30/2022",
  },
  {
    name: "Lipstick Plant",
    img: RiPlantFill,
    location: "Ofice",
    status: "Good",
    moisture: 55,
    lastWatered: "10/30/2022",
  },
  {
    name: "Lipstick Plant",
    img: RiPlantFill,
    location: "Ofice",
    status: "Good",
    moisture: 56,
    lastWatered: "10/30/2022",
  },
];

const allPlantTableData = [
  {
    ID: 22, 
    name: "Lipstick Plant",
    img: RiPlantFill,
    location: "Ofice",
    fertilizerStatus: "Good",
    moisture: 66,
    datePlanted: "08/22/2022",
  },
  {
    ID: 3, 
    name: "Lipstick Plant",
    img: RiPlantFill,
    location: "Ofice",
    fertilizerStatus: "Good",
    moisture: 66,
    datePlanted: "08/22/2022",
  },
  {
    ID: 55, 
    name: "Lipstick Plant",
    img: RiPlantFill,
    location: "Ofice",
    fertilizerStatus: "Good",
    moisture: 66,
    datePlanted: "08/22/2022",
  },
  {
    ID: 10, 
    name: "Lipstick Plant",
    img: RiPlantFill,
    location: "Ofice",
    fertilizerStatus: "Good",
    moisture: 66,
    datePlanted: "08/22/2022",
  },
]

const HousePlants = () => {
  return (
      <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>
        <Grid templateColumns={{ sm: "1fr", lg: "1fr 1fr" }} templateRows='1fr 1fr' gap='24px'>
          <Grid
            templateColumns={"1fr"}
            templateRows={{

            }}
            gap='26px' >
            <PlantStats />
          <HumidityTemperature
            title={"Humidity and Temperature"}
            chart={<AreaChart />}
          />
        </Grid>
        <WaterTable
          title={"Water Soon"}
          tableHeaders={["Plant", "Location", "Mositure", "Last Watered", ""]}
          data={tableData}
        />
        <GridItem rowStart={2} colSpan={2}>
          <AllHousePlants
            title={"All House Plants"}
            tableHeaders={["ID", "Plant", "Location", "Mositure", "Fertilizer", "Date Planted", ""]}
            data={allPlantTableData}
          />
        </GridItem>
      </Grid>
    </Flex>
  )
}

export default HousePlants