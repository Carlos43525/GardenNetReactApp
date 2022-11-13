import React, { useState } from 'react';
import {
    Button,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Checkbox,
    VStack
} from "@chakra-ui/react";
import { AccountService } from '../Services/AccountService';
import { AlertService } from '../Services/AlertService';

import { Formik, Field } from 'formik';
import ForgotPassword from './ForgotPassword';

const FormikLogin = ({ history, location }) => {

  const [isLogin, setLogin ] = useState(true);

    const initialValues = {
        email: '',
        password: '',
    };

    function onSubmit({ email, password }, { setSubmitting }) {
        //AlertService.clear();
        AccountService.login(email, password)
            .then(() => {
                const { from } = location.state || { from: { pathname: "/" } };
                history.push(from);
            })
            .catch(error => {
                setSubmitting(false);
                //AlertService.error(error);
            });
    }
  
  return (
    <>
    {isLogin ? (
         <Formik
         initialValues={initialValues}
         onSubmit={onSubmit}
       >
         {({ handleSubmit, errors, touched }) => (
           <form onSubmit={handleSubmit}>
             <VStack spacing={4} align="flex-start">
               <FormControl>
                 <FormLabel htmlFor="email">Email Address</FormLabel>
                 <Field
                   as={Input}
                   id="email"
                   name="email"
                   type="email"
                   variant="filled"
                 />
               </FormControl>
               <FormControl isInvalid={!!errors.password && touched.password}>
                 <FormLabel htmlFor="password">Password</FormLabel>
                 <Field
                   as={Input}
                   id="password"
                   name="password"
                   type="password"
                   variant="filled"
                   validate={(value) => {
                     let error;
     
                     if (value.length < 5) {
                       error = "Password must contain at least 6 characters";
                     }
     
                     return error;
                   }}
                 />
                 <FormErrorMessage>{errors.password}</FormErrorMessage>
               </FormControl>
               <Field
                 as={Checkbox}
                 id="rememberMe"
                 name="rememberMe"
                 colorScheme="purple"
               >
                 Remember me?
               </Field>
               <Button onClick={() => setLogin(false)}>
                 Reset password
               </Button>
               <Button type="submit" colorScheme="purple" width="full">
                 Login
               </Button>
             </VStack>
           </form>
         )}
       </Formik>  
    ) : (
      <ForgotPassword />
    )}
 
    </>

  )
}

export default FormikLogin