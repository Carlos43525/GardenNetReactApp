// chakra imports
import React from "react";
import { Box, Button, Flex, Link, Stack, Text, Icon, useColorModeValue } from "@chakra-ui/react";
import IconBox from "components/Icons/IconBox";
import { NavLink, useLocation } from "react-router-dom";


const SidebarBody = ({ routes }) => {
    // to check for active links and opened collapses
    let location = useLocation();
    // this is for the rest of the collapses
    const [state, setState] = React.useState({});

    // verifies if routeName is the one active (in browser input)
    const activeRoute = (routeName) => {
        return location.pathname === routeName ? "active" : "";
    };

    const CreateLinks = (routes) => {
        // Chakra Color Mode
        const activeBg = useColorModeValue("white", "gray.700");
        const inactiveBg = useColorModeValue("white", "gray.700");
        const activeColor = useColorModeValue("gray.700", "white");
        const inactiveColor = useColorModeValue("gray.400", "gray.400");

        return routes.map((prop, key) => {
            if (prop.redirect) {
                return null;
            }
            if (prop.category) {
                var st = {};
                st[prop["state"]] = !state[prop.state];
                return (
                    <div key={prop.name}>
                        <Text
                            color={activeColor}
                            fontWeight="bold"
                            mb={{
                                xl: "12px",
                            }}
                            mx="auto"
                            ps={{
                                sm: "10px",
                                xl: "16px",
                            }}
                            py="12px"
                        >
                            {prop.name}
                        </Text>
                        {CreateLinks(prop.views)}
                    </div>
                );
            }
            return (
                <NavLink to={prop.path} key={prop.name}>
                    {activeRoute(prop.path) === "active" ? (
                        <Button
                            boxSize="initial"
                            justifyContent="flex-start"
                            alignItems="center"
                            bg={activeBg}
                            mb={{
                                xl: "12px",
                            }}
                            mx={{
                                xl: "auto",
                            }}
                            ps={{
                                sm: "10px",
                                xl: "16px",
                            }}
                            py="12px"
                            borderRadius="5px"
                            _hover="none"
                            w="100%"
                            _active={{
                                bg: "inherit",
                                transform: "none",
                                borderColor: "transparent",
                            }}
                            _focus={{
                                boxShadow: "none",
                            }}
                        >
                            <Flex>
                                {typeof prop.icon === "string" ? (
                                    <Icon>{prop.icon}</Icon>
                                ) : (
                                    <IconBox
                                        bg="#FF2A18"
                                        color="white"
                                        h="30px"
                                        w="30px"
                                        me="12px"
                                    >
                                        {prop.icon}
                                    </IconBox>
                                )}
                                <Text color={activeColor} my="auto" fontSize="sm">
                                    {document.documentElement.dir === "rtl"
                                        ? prop.rtlName
                                        : prop.name}
                                </Text>
                            </Flex>
                        </Button>
                    ) : (
                        <Button
                            boxSize="initial"
                            justifyContent="flex-start"
                            alignItems="center"
                            bg="transparent"
                            mb={{
                                xl: "12px",
                            }}
                            mx={{
                                xl: "auto",
                            }}
                            py="12px"
                            ps={{
                                sm: "10px",
                                xl: "16px",
                            }}
                            borderRadius="15px"
                            _hover="none"
                            w="100%"
                            _active={{
                                bg: "inherit",
                                transform: "none",
                                borderColor: "transparent",
                            }}
                            _focus={{
                                boxShadow: "none",
                            }}
                        >
                            <Flex>
                                {typeof prop.icon === "string" ? (
                                    <Icon>{prop.icon}</Icon>
                                ) : (
                                    <IconBox
                                        bg={"white"}
                                        color="#FF2A18"
                                        h="30px"
                                        w="30px"
                                        me="12px"
                                    >
                                        {prop.icon}
                                    </IconBox>
                                )}
                                <Text color={inactiveColor} my="auto" fontSize="sm">
                                    {document.documentElement.dir === "rtl"
                                        ? prop.rtlName
                                        : prop.name}
                                </Text>
                            </Flex>
                        </Button>
                    )}
                </NavLink>
            );
        });
    };

    const links = <>{CreateLinks(routes)}</>;

    return (
        <>
            <Box pt={"25px"} mb="12px">
                <Link
                    href={`${process.env.PUBLIC_URL}/#/`}
                    target="_blank"
                    display="flex"
                    lineHeight="100%"
                    mb="30px"
                    fontWeight="bold"
                    justifyContent="center"
                    alignItems="center"
                    fontSize="11px"
                >
                    <Text fontSize="2xl" mt="3px">
                        Garden Net
                    </Text>
                </Link>
            </Box>
            <Stack direction="column" mb="40px">
                <Box>{links}</Box>
            </Stack>
        </>
    )
}

export default SidebarBody