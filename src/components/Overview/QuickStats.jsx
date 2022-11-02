import React from 'react';
import { Icon } from '@chakra-ui/react';
import { GiMicrochip } from 'react-icons/gi';
import {
    Box,
    chakra,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { BsPerson } from 'react-icons/bs';
import { FiServer } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';



function StatsCard() {
    return (
        <Stat
            px={{ base: 2, md: 4 }}
            py={'5'}
            shadow={'xl'}
            border={'1px solid'}
            borderColor={useColorModeValue('gray.800', 'gray.500')}
            rounded={'lg'}>
            <Flex justifyContent={'space-between'}>
                <Box pl={{ base: 2, md: 4 }}>
                    <StatLabel fontWeight={'medium'} isTruncated>
                        Devices
                    </StatLabel>
                    <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                        6/6
                    </StatNumber>
                </Box>
                <Box
                    my={'auto'}
                    color={useColorModeValue('gray.800', 'gray.200')}
                    alignContent={'center'}>
                    <Icon as={GiMicrochip} />
                </Box>
            </Flex>
        </Stat>
    );
}

const QuickStats = () => {
    return (
        <Stat
            px={{ base: 2, md: 4 }}
            py={'5'}
            shadow={'md'}
            rounded={'lg'}
            bgGradient='linear(to-r, #439BFF, #62ABFF)'
            >
            <Flex justifyContent={'space-between'}>
                <Box pl={{ base: 2, md: 4 }} textColor={'white'}>
                    <StatLabel  fontSize={'xl'} isTruncated>
                        Devices
                    </StatLabel>
                    <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                        6/6
                    </StatNumber>
                </Box>
                <Box
                    my={'auto'}
                    color={useColorModeValue('gray.800', 'gray.200')}
                    alignContent={'center'}>
                    <Icon as={GiMicrochip} h={12} w={12} color='white'/>
                </Box>
            </Flex>
        </Stat>


    )
}

export default QuickStats