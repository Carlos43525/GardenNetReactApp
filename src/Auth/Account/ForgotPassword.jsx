import React from 'react';
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
import { Formik, Field } from 'formik';

const ForgotPassword = ({ history, location }) => {
    const initialValues = {
        email: ''
    };

    function onSubmit({ email }, { setSubmitting }) {
      //alertService.clear();
      AccountService.forgotPassword(email)
      setSubmitting(false);
          // .then(() => alertService.success('Please check your email for password reset instructions'))
          // .catch(error => alertService.error(error))
          //.finally(() => setSubmitting(false));
  }

  return (
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
          <Button type="submit" colorScheme="purple" width="full">
            Reset
          </Button>
        </VStack>
      </form>
    )}
  </Formik>  
  )
}

export default ForgotPassword