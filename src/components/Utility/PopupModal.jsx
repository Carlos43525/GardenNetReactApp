import React, { useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  Box,
  useStyleConfig
} from '@chakra-ui/react';

import axios from 'axios';

// A popup modal for components such as signs up and other forms. 

const onCreate = () => 
{
  let plantData = {
    Name: this.refs.Name.value, 
    ScientificName: this.refs.ScientificName.value, 
    Location: this.refs.Location.value
  }; 

  // fetch('https://garden-net-web-api.azurewebsites.net',{
  //   method: 'POST',
  //   headers:{'Content-type':'application/json'},
  //     body: empInfo
  // }).then(r=>r.json()).then(res=>{
  //   if(res){
  //     this.setState({message:'New Employee is Created Successfully'});
  //   }
  // });

}

const PopupModal = (props) => {
  const { variant, children, ...rest } = props;
  const styles = useStyleConfig("PopupModal", { variant });
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  return (
    <>
      <Button onClick={onOpen}
        borderColor={props.borderColor}
        color={props.color}
        variant={props.variant}
        fontSize={props.fontSize}
        p='8px 32px'
      >
        {props.name}
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add house plant</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input ref="Name" placeholder='Plant Name' />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>ScientificNamee</FormLabel>
              <Input ref="ScientificName" placeholder='ScientificName' />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Location</FormLabel>
              <Input ref="Location" placeholder='Location' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onCreate} colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default PopupModal