import { ChakraProvider, Center } from '@chakra-ui/react';
import theme from './theme';
import DishFormContainer from './components/DishFormContainer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Center minH="100vh" bg='gray.300'>
        <DishFormContainer/>
      </Center>
    </ChakraProvider>
  );
}

export default App;
