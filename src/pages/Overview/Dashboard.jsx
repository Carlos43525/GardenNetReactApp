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
// Component imports
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,
} from "components/Icons/Icons";
// Local component imports
import SparkLineStats from './components/SparkLineStats';

import RainfallChart from './components/RainfallChart';
import { AreaChart } from 'components';
import { Heatmap } from 'components';
import DashboardHeatmap from './components/DashboardHeatmap';
import Tasks from './components/Tasks';

import Timeline from './components/Timeline';

import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { MdWaterDrop } from 'react-icons/md';
import { GoCircuitBoard } from 'react-icons/go';
import { GiPlantSeed } from 'react-icons/gi';
import { TbPlantOff } from 'react-icons/tb';
import { RiPlantFill } from 'react-icons/ri';
import { HiOutlineStatusOffline } from 'react-icons/hi';
import { WarningAlert } from 'components';

// Temporary data for tasks list.
// Important: Add smart ass quip to the end of important tasks for fun.  
const importantTasks = [
  {
    name: "Water Plant",
    info: "An office plant is critically low on water! Again...",
    dt: "11/02/2022",
    iconColor: "blue.400",
    icon: MdWaterDrop,
  },
  {
    name: "Device Offline",
    info: "A garden device has suddenly gone offline. Did a bird eat it?",
    dt: "10/30/2022",
    iconColor: "red.400",
    icon: HiOutlineStatusOffline,
  },
];

const otherTasks = [
  {
    name: "Water Plant",
    info: "An office plant is low on water.",
    dt: "10/28/2022",
    iconColor: "blue.400",
    icon: MdWaterDrop,
  },
  {
    name: "Fertilize Garden",
    info: "Garden bed 'A' is ready to be fertilized, captain!",
    dt: "10/25/2022",
    iconColor: "green.400",
    icon: RiPlantFill,
  },
  {
    name: "Repot",
    info: "An office plant is ready to be repotted when you are.",
    dt: "10/22/2022",
    iconColor: "green.400",
    icon: RiPlantFill,
  },

];

const timelineData = [
  {
    logo: GoCircuitBoard,
    title: "New device added",
    date: "22 DEC 7:20 PM",
    color: "green.400",
  },
  {
    logo: GiPlantSeed,
    title: "Seeds planted",
    date: "22 DEC 7:20 PM",
    color: "green.400",
  },
  {
    logo: TbPlantOff,
    title: "House plant removed",
    date: "22 DEC 7:20 PM",
    color: "red.400",
  },
  {
    logo: RiPlantFill,
    title: "3 House plants added",
    date: "22 DEC 7:20 PM",
    color: "green.400",
  },
  {
    logo: GoCircuitBoard,
    title: "2 new devices added",
    date: "22 DEC 7:20 PM",
    color: "green.400",
  },
];

const Dashboard = () => {
  const iconBoxInside = useColorModeValue("white", "white");

  return (
    <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>
      <WarningAlert  />
      {/* Top bar with sparkline stats */}
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing='24px' bg={{ lg: '', xl: "#271E4D" }} borderRadius={"5px"}>
          <SparkLineStats
            title={"Active Devices"}
            amount={"8/7"}
            percentage={-13}
            icon={<GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
          />
          <SparkLineStats
            title={"Reports (hourly)"}
            amount={"43"}
            percentage={10}
            icon={<GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
          />
          <SparkLineStats
            title={"Total Plants"}
            amount={"32"}
            percentage={-2}
            icon={<GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
          />
          <SparkLineStats
            title={"Plants Underwatered"}
            amount={"2"}
            percentage={5}
            icon={<GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
          />
      </SimpleGrid>
      {/* Rainfall graph and sunlight heatmap */}
      <Grid
        templateColumns={{ sm: "1fr", lg: "1.7fr 1.3fr" }}
        templateRows={{ sm: "repeat(2, 1fr)", lg: "1fr" }}
        my='24px'
        gap='24px'
        mb={{ lg: "24px" }}
      >
        <RainfallChart
          title={"Rainfall (inches)"}
          chart={<AreaChart />}
        />
        <DashboardHeatmap
          title={"Measured Sunlight"}
          chart={<Heatmap />}
        />
      </Grid>
      {/* Tasks and needs watered list */}
      <Grid
        templateColumns={{ md: "1fr", lg: "1.8fr 1.2fr" }}
        templateRows={{ md: "1fr auto", lg: "1fr" }}
        gap='24px'
      >
        <Tasks
          title={"Tasks"}
          date={"23 - 30 March"}
          importantTasks={importantTasks}
          otherTasks={otherTasks}
        />
        <Timeline
          title={"Timeline"}
          amount={30}
          data={timelineData}
        />
      </Grid>
    </Flex>
  )
}

export default Dashboard