import React from 'react';
// Chakra imports
import {
    Box,
    Flex,
    Button,
    FormControl,
    FormLabel,
    FormHelperText,
    FormErrorMessage,
    Heading,
    Input,
    Link,
    Switch,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Stack,
    Checkbox,
    useColorModeValue,
} from "@chakra-ui/react";
// Assets
import { ProfileIcon } from "components/Icons/Icons";
// import signInImage from "assets/img/signInImage.png";
import { AccountService } from '../Services/AccountService';
import FormikLogin from './FormikLogin';
import { LoginTest } from './LoginTest';
import { ResetPassword } from './ResetPassword';


const Login = ({ history, location }) => {    

    const { isOpen, onOpen, onClose } = useDisclosure()

    function OnSubmit({ email, password }, { setSubmitting }) {
        AccountService.login(email, password)
            .then(() => {
                const { from } = location.state || { from: { pathname: "/" } };
                history.push(from);
            })
            .catch(error => {
                setSubmitting(false);
                //alertService.error(error);
            });
    }

    const navbarIcon = useColorModeValue("gray.500", "gray.200");

    return (
        <>
            <Button
                onClick={onOpen}
                ms="0px"
                px="0px"
                me={{ sm: "2px", md: "16px" }}
                color={navbarIcon}
                variant="transparent-with-icon"
                rightIcon={<ProfileIcon color={navbarIcon} w="22px" h="22px" me="0px" />}
            >
            </Button>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <Flex
                        minH={'500px'}
                        align={'center'}
                        justify={'center'}
                        borderRadius={5}
                        bg={useColorModeValue('gray.50', 'gray.800')}>
                        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                            <Stack align={'center'}>
                                <Heading fontSize={'4xl'}>Login</Heading>
                            </Stack>
                            <Box
                                rounded={'lg'}
                                bg={useColorModeValue('white', 'gray.700')}
                                boxShadow={'lg'}
                                p={8}>
                                <Stack spacing={4}>
                                    <FormikLogin />
                                </Stack>
                            </Box>
                        </Stack>
                    </Flex>

                    {/* <ModalHeader>Login</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input type='email' />
                            {!isError ? (
                                <FormHelperText>
                                    Enter the email you'd like to receive the newsletter on.
                                </FormHelperText>
                            ) : (
                                <FormErrorMessage>Email is required.</FormErrorMessage>
                            )}
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>ScientificNamee</FormLabel>
                            <Input placeholder='ScientificName' />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Location</FormLabel>
                            <Input placeholder='Location' />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3}>
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter> */}
                </ModalContent>
            </Modal>
        </>
    )
}

export { Login }; 