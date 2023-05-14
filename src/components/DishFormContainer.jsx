import React, {useState}  from 'react';
import { omitBy } from 'lodash';
import { useFormik } from 'formik';
import axios from 'axios';
import { Box, Heading} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

import DishForm from './DishForm';
import validationSchema from '../validation/validationSchema';

const DishFormContainer = () => {
    const [submitted, setSubmitted] = useState(false);

    const sendData = async (values) => {
        try {
            const response = await axios.post(
              'https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/',
              values,
              {
                headers: {
                  'Content-Type': 'application/json',
                },
              }
            );
            console.log(response.data);
            setSubmitted(true)
            setTimeout(() => {
              setSubmitted(false)
            }, 3000)
          } catch (error) {
            console.log(error);
          }
    }

    const formik = useFormik({
      initialValues: {
        name: '',
        preparation_time: '',
        type: '',
        no_of_slices: '',
        diameter: '',
        spiciness_scale: '',
        slices_of_bread: '',
      },
      validationSchema: validationSchema,
      onSubmit: (values, {resetForm}) => {
        resetForm()
        const filteredValues = omitBy(values, (value) => !value);
        sendData(filteredValues)
      },
    });

    return (
        <Box>
            <Box borderWidth={2} borderRadius='md' borderColor='#fff' p={4} w={[320, 400, 480]} bgColor='blackAlpha.800' textColor='white'>
                <Heading size='xl' textAlign='center' mb={4}>
                    Add new dish <FontAwesomeIcon icon={faUtensils} 
                /></Heading>
                <DishForm {...formik}/>
            </Box>
            {submitted && <Box 
              textColor='white' 
              pos='fixed' 
              top='10%' 
              left='50%' 
              bgColor='gray.900'
              transform='translateX(-50%)' 
              fontSize='2xl'
              p='10px 5px'
              rounded='lg'
              border='2px solid white'
              >
                Dish sent correctly!
              </Box>}
        </Box>
    )
};

export default DishFormContainer;