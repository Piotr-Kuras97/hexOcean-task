import React from 'react';
import { omitBy } from 'lodash';
import { useFormik } from 'formik';
import axios from 'axios';
import { Box, Heading} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

import DishForm from './DishForm';
import validationSchema from '../validation/validationSchema';


const DishFormContainer = () => {
    const sendData = async (values) => {
        alert(JSON.stringify(values, null, 2));
        try {
            const response = await axios.post(
              "https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/",
              values,
              {
                headers: {
                  "Access-Control-Allow-Origin": "*",
                  "Content-Type": "application/json",
                },
              }
            );
            const data = response.data;
            console.log(data);
          } catch (error) {
            console.log(error);
          }
    }

    const formik = useFormik({
      initialValues: {
        name: "",
        preparation_time: "",
        type: "",
        num_of_slices: "",
        diameter: "",
        spiciness_scale: "",
        slices_of_bread: "",
      },
      validationSchema: validationSchema,
      onSubmit: (values, {resetForm}) => {
        resetForm()
        const filteredValues = omitBy(values, (value) => !value);
        console.log(filteredValues)
        sendData(filteredValues)
      },
    });

    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        let value = target.value;

        if(name === 'preparation_time' && value.length === 2){
            value = value + ':'
        }
        if(name === 'preparation_time' && value.length === 5){
            value = value + ':'
        }
        formik.setFieldValue(name, value);
    };

    return (
        <Box>
            <Box borderWidth={2} borderRadius='md' borderColor='gray.500' p={4} w={[320, 360, 400]} bg='gray.100' boxShadow='xl'>
                <Heading size='lg' textAlign='center' mb={3}>
                    Add new dish <FontAwesomeIcon icon={faUtensils} 
                /></Heading>
                <DishForm {...formik} onchange={handleChange}/>
            </Box>
        </Box>
    )
}

export default DishFormContainer