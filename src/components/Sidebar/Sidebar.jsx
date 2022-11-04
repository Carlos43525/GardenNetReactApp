/*eslint-disable*/
import React from "react";
// chakra imports
import { Box, useColorModeValue } from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";
import SidebarBody from "./SidebarBody";



const Sidebar = ({ routes, sidebarVariant }) => {
    const mainPanel = React.useRef();
    const variantChange = "0.2s linear";

    //  Chakra Color Mode
    let sidebarBg = "none";
    let sidebarRadius = "0px";
    let sidebarMargins = "0px";
    if (sidebarVariant === "opaque") {
        sidebarBg = useColorModeValue("white", "gray.700");
        sidebarRadius = "16px";
        sidebarMargins = "16px 0px 16px 16px";
    }

    return (
        <Box ref={mainPanel}>
            <Box display={{ sm: "none", xl: "block" }} position="fixed">
                <Box
                    bg={sidebarBg}
                    transition={variantChange}
                    w="260px"
                    maxW="260px"
                    ms={{ sm: "16px" }}
                    my={{ sm: "16px" }}
                    h="calc(100vh - 32px)"
                    ps="20px"
                    pe="20px"
                    m={"16px 0px 16px 16px"}
                    borderRadius={sidebarRadius}
                >
                    <SidebarBody routes={routes}
                        display="none"
                        sidebarVariant={sidebarVariant}
                    />
                </Box>
            </Box>
        </Box>)
}

export default Sidebar