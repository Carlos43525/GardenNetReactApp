import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Dashboard } from './pages';
import { Helmet } from 'react-helmet';
import { ChakraProvider } from '@chakra-ui/react';
import { RenderContainer, RenderedContent, Content } from 'components';
import theme from 'theme/theme';

// Keep these Tailwind files until transition is made to ChakraUI
import '@fontsource/manrope/400.css';
import '@fontsource/manrope/600.css';
import '@fontsource/manrope/700.css';
import '@fontsource/manrope/800.css';
import './input.css';
import './dist/output.css';

const App = () => {
  return (
    <BrowserRouter>
      <Helmet>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Helmet>
      {/* Sidebar and others go here */}
      <ChakraProvider theme={theme} >
        {/* Content provides the container for the entire page. RenderContainer/Content provide 
            containers for the page content. */}
        <Content w={{ base: '100%', xl: 'calc(100% - 275px)' }} >
          <RenderContainer >
            <RenderedContent>
              <Routes>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/' element={<Navigate to='/dashboard' />} /> 
              </Routes>
            </RenderedContent>
          </RenderContainer>
        </Content>
      </ChakraProvider>
    </BrowserRouter>
  )
}

export default App