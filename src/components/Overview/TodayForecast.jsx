import React from 'react'
import { Icon } from '@chakra-ui/react';
import { GiMicrochip } from 'react-icons/gi';
import {
  Box,
  Stack,
  Text,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';

const TodayForecast = () => {
  return (
    <Box>
      <Flex p="4" boxShadow="md" m="4" borderRadius="lg" bg={'white'} alignItems={'center'} justifyContent={'flex-start'}>
        <Text fontSize={'sm'} textColor={'gray.400'}>
          Sunny
        </Text>
        <Stack direction="row" alignItems="center"  >
          <Text fontWeight="semi" fontSize={'6xl'} >
            25&deg;
          </Text>
          <Box h='60px' borderRight='2px' borderColor='black' />
          <Text>

          </Text>
        </Stack>
      </Flex>
    </Box>
  )
}

export default TodayForecast