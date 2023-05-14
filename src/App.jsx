import { ChakraProvider, Center, Box } from '@chakra-ui/react';
import bg from './assets/bg.jpg';
import theme from './theme';
import DishFormContainer from './components/DishFormContainer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box backgroundImage={bg} backgroundSize='cover'>
        <Center minH='100vh'>
          <DishFormContainer/>
        </Center>
      </Box>
    </ChakraProvider>
  )
};

export default App;
