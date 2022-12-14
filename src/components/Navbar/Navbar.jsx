import React, { useState } from 'react';
// Chakra Imports
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Link, useColorModeValue } from "@chakra-ui/react";
import PropTypes from "prop-types";
import NavbarLinks from './NavbarLinks';

const Navbar = ({ onOpen }) => {
    // Here are all the props that may change depending on navbar's type or state.(secondary, variant, scrolled)
    let mainText = useColorModeValue("gray.700", "gray.200");
    let secondaryText = useColorModeValue("gray.400", "gray.200");
    let navbarPosition = "absolute";
    let navbarFilter = "none";
    let navbarBackdrop = "blur(21px)";
    let navbarShadow = "none";
    let navbarBg = "none";
    let navbarBorder = "transparent";
    let secondaryMargin = "0px";
    let paddingX = "15px";

    return (
        <Flex
            position={navbarPosition}
            boxShadow={navbarShadow}
            bg={navbarBg}
            borderColor={navbarBorder}
            filter={navbarFilter}
            backdropFilter={navbarBackdrop}
            borderWidth="1.5px"
            borderStyle="solid"
            transitionDelay="0s, 0s, 0s, 0s"
            transitionDuration=" 0.25s, 0.25s, 0.25s, 0s"
            transition-property="box-shadow, background-color, filter, border"
            transitionTimingFunction="linear, linear, linear, linear"
            alignItems={{ xl: "center" }}
            borderRadius="5px"
            display="flex"
            minH="75px"
            justifyContent={{ xl: "center" }}
            lineHeight="25.6px"
            mx="auto"
            mt={secondaryMargin}
            pb="8px"
            left={document.documentElement.dir === "rtl" ? "30px" : ""}
            right={document.documentElement.dir === "rtl" ? "" : "30px"}
            px={{
                sm: paddingX,
                md: "30px",
            }}
            ps={{
                xl: "12px",
            }}
            pt="8px"
            top="18px"
            w={{ sm: "calc(100vw - 30px)", xl: "calc(100vw - 75px - 275px)" }}
        >
            <Flex
                w="100%"
                flexDirection={{
                    sm: "column",
                    md: "row",
                }}
                alignItems={{ xl: "center" }}
            >
                <Box ms="auto" w={{ sm: "100%", md: "unset" }}>
                    <NavbarLinks
                        onOpen={onOpen}
                    />
                </Box>
            </Flex>
        </Flex>
    )
}

// Navbar.propTypes = {
//     onOpen: PropTypes.func,
//   };

export default Navbar