import React from 'react';
import { Box, useDisclosure, Alert, AlertIcon, AlertTitle, AlertDescription, CloseButton, Button } from '@chakra-ui/react';

const WarningAlert = () => {
    const {
        isOpen: isVisible,
        onClose,
      } = useDisclosure({ defaultIsOpen: true })
  return (
    isVisible ? 
    (
        <Alert status='warning' maxW={"750px"} mb={"2rem"}>
        <AlertIcon />
        <Box>
          <AlertDescription>
            This application is still under development. Not all data is live and some links will not work. 
          </AlertDescription>
        </Box>
        <CloseButton
          alignSelf='flex-start'
          position='relative'
          right={-1}
          top={-1}
          onClick={onClose}
        />
      </Alert>
    ) : (
            <></>
        )
  )
}


export default WarningAlert