import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { MyPage } from './components/MyPage';

const App = () => (
  <ChakraProvider>
    <MyPage />
  </ChakraProvider>
);

export default App;
