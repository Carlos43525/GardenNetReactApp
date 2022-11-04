import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Dashboard } from './pages';
import { Helmet } from 'react-helmet';
import { ChakraProvider, Portal, useDisclosure } from '@chakra-ui/react';
import { RenderContainer, RenderedContent, Content } from 'components';
import { Sidebar, Navbar } from 'components';
import routes from 'routes.js';
import theme from 'theme/theme';

// Keep these Tailwind files until transition is made to ChakraUI
import '@fontsource/manrope/400.css';
import '@fontsource/manrope/600.css';
import '@fontsource/manrope/700.css';
import '@fontsource/manrope/800.css';
import './input.css';
import './dist/output.css';

const App = () => {

  const GetRoute = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return GetRoute(prop.views);
      }
      if (prop.category === 'account') {
        return GetRoute(prop.views);
      }
      if (prop.layout === '/admin') {
        return <Route path={prop.layout + prop.path} component={prop.component} key={key} />;
      } else {
        return null;
      }
    });
  };

  const { onOpen } = useDisclosure();

  return (
    <BrowserRouter>
      <Helmet>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Helmet>


      <ChakraProvider theme={theme} >
        {/* Sidebar and others go here */}
        <Sidebar
          routes={routes}
          sidebarVariant={"transparent"} />
        {/* Content provides the container for the entire page. RenderContainer/Content provide 
            containers for the page content. */}
        <Content w={{ base: '100%', xl: 'calc(100% - 275px)' }} >
          <Portal>
            <Navbar
              onOpen={onOpen}
            />
          </Portal>
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


// {GetRoute() ? (
//   <PanelContent>
//     <PanelContainer>
//       <Switch>
//         {GetRoute(routes)}
//         <Redirect from='/admin' to='/admin/dashboard' />
//       </Switch>
//     </PanelContainer>
//   </PanelContent>
// ) : null}
