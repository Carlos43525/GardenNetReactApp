import React from 'react';
import { Helmet } from 'react-helmet';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { Content } from 'components';
import theme from 'theme/theme';
import { RenderContainer, RenderedContent } from 'components';
import { Navigate, Route, Routes } from 'react-router-dom';


// Handles loading persistent components, such as the sidebar, before loading the page. 
const Main = () => {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Helmet>
      <ChakraProvider theme={theme} >
        <Content w={{ base: '100%', xl: 'calc(100% - 275px)' }} >
        {/* The render container holds the main body of the page. The requested page renders here.  */}
          <RenderContainer>
            <RenderedContent>
                <Navigate from='/main' to='/dashboard' />
            </RenderedContent>
          </RenderContainer>
          Main
        </Content>
      </ChakraProvider>
    </>

  )

}

export default Main