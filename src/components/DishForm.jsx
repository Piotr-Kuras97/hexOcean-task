import React, { useState } from 'react';
import { Box,Button,FormControl,Stack,Text,FormLabel,Input,NumberInput,NumberInputField,Select, RangeSlider,RangeSliderTrack,RangeSliderFilledTrack,RangeSliderThumb, Flex } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice, faPepperHot, faBreadSlice, faHourglassStart, faFileSignature, faFilter } from '@fortawesome/free-solid-svg-icons';

import './preperationTimeIcon.css'

const DishForm = ({errors, touched, handleSubmit, values, handleChange}) => {
    const [sliderValue, setSliderValue] = useState(0);

    const handleSliderChange = (value) => {
      setSliderValue(value);
      values.spiciness_scale = sliderValue[0]
    };

    const renderPizzaOptions = (
        <>
            <Box mb={3}>
                <FormControl>
                    <FormLabel fontWeight='bold'>Number of slices <FontAwesomeIcon icon={faPizzaSlice} /></FormLabel>
                    <NumberInput>
                        <NumberInputField 
                            name='no_of_slices'
                            value={values.no_of_slices}
                            onChange={handleChange}
                            borderColor={errors.no_of_slices && touched.no_of_slices ? 'red.500' : 'gray.300'}
                            bgColor='black'
                        />
                    </NumberInput>
                    {errors.no_of_slices && touched.no_of_slices && (<Stack><Text fontSize='sm' color='red'>{errors.no_of_slices}</Text></Stack>)}
                </FormControl>
            </Box>

            <Box mb={3}>
                <FormControl>
                    <FormLabel fontWeight='bold'>Pizza diameter <FontAwesomeIcon icon={faPizzaSlice} /></FormLabel>
                    <NumberInput>
                        <NumberInputField 
                            step='any'
                            name='diameter'
                            value={values.diameter}
                            onChange={handleChange}
                            placeholder='in cm'
                            borderColor={errors.diameter && touched.diameter ? 'red.500' : 'gray.300'}
                            bgColor='black'
                        />
                    </NumberInput>
                    {errors.diameter && touched.diameter && (<Stack><Text fontSize='sm' color='red'>{errors.diameter}</Text></Stack>)}
                </FormControl>
            </Box>
        </>
    );

    const renderSoupOption = (
        <Box mb={3}>
                <FormControl>
                    <FormLabel fontWeight='bold'>Spiciness Scale <FontAwesomeIcon icon={faPepperHot} /></FormLabel>
                    <RangeSlider
                    name='spiciness_scale'
                    value={[sliderValue]}
                    onChange={handleSliderChange}
                    borderColor={errors.spiciness_scale && touched.spiciness_scale ? 'red.500' : 'gray.300'}
                    colorScheme='orange'
                    min={1} max={10} step={1}
                    >
                        <RangeSliderTrack height='25px' borderRadius='lg' borderWidth='1px' borderColor='white'>
                            <RangeSliderFilledTrack />
                        </RangeSliderTrack>
                        <RangeSliderThumb index={0} height='15px'/>
                    </RangeSlider>
                    <Flex justifyContent='space-between' mt='10px'>
                        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                            <Text key={num} color={num === values.spiciness_scale ? 'orange.500' : ""} fontWeight='bold'>{num}</Text>
                        ))}
                    </Flex>
                    {errors.spiciness_scale && touched.spiciness_scale && (<Stack><Text fontSize='sm' color='red'>{errors.spiciness_scale}</Text></Stack>)}
                </FormControl>
        </Box>
    );

    const renderSandwichOption = (
        <Box mb={3}>
            <FormControl>
                <FormLabel fontWeight='bold'>Slices of bread <FontAwesomeIcon icon={faBreadSlice} /></FormLabel>
                <NumberInput>
                    <NumberInputField    
                        name='slices_of_bread'
                        value={values.slices_of_bread}
                        onChange={handleChange}
                        borderColor={errors.slices_of_bread && touched.slices_of_bread ? 'red.500' : 'gray.300'}
                        bgColor='black'
                    />
                </NumberInput>
                {errors.slices_of_bread && touched.slices_of_bread && (<Stack><Text fontSize='sm' color='red'>{errors.slices_of_bread}</Text></Stack>)}
            </FormControl>
        </Box>
    );

    return (
        <form onSubmit={handleSubmit}>
            <Box mb={3}>
                <FormControl>
                    <FormLabel fontWeight='bold'>Dish name <FontAwesomeIcon icon={faFileSignature} /></FormLabel>
                    <Input
                        name='name'
                        value={values.name}
                        onChange={handleChange}
                        placeholder='Your favorite dish'
                        borderColor={errors.name && touched.name? 'red.500' : 'gray.300'}
                        bgColor='black'
                    />
                    {errors.name && touched.name && (<Stack><Text fontSize='sm' color='red'>{errors.name}</Text></Stack>)}
                </FormControl>
            </Box>

            <Box mb={3}>
                <FormControl>
                    <FormLabel fontWeight='bold'>Preparation time <FontAwesomeIcon icon={faHourglassStart} /></FormLabel>
                    <Input
                        type='time'
                        name='preparation_time'
                        value={values.preparation_time}
                        step="1" min='00:00:00' max='23:59:59'
                        onChange={handleChange}
                        placeholder='00:00:00'
                        maxLength='8'
                        bgColor='black'
                        borderColor={errors.preparation_time && touched.preparation_time ? 'red.500' : 'gray.300'}
                    />
                    {errors.preparation_time && touched.preparation_time && (<Stack><Text fontSize='sm' color='red'>{errors.preparation_time}</Text></Stack>)}
                </FormControl>
            </Box>

            <Box mb={3}>
                <FormControl>
                    <FormLabel fontWeight='bold'>Type of dish <FontAwesomeIcon icon={faFilter} /></FormLabel>
                    <Select
                        name='type'
                        value={values.type}
                        onChange={handleChange}
                        placeholder='Select a type'
                        borderColor={errors.type && touched.type? 'red.500' : 'gray.300'}
                        bgColor='black'
                        cursor='pointer'
                    >
                        <option style={{color: 'black'}} value='pizza'>Pizza</option>
                        <option style={{color: 'black'}} value='soup'>Soup</option>
                        <option style={{color: 'black'}} value='sandwich'>Sandwich</option>
                    </Select>
                    {errors.type && touched.type && (<Stack><Text fontSize='sm' color='red'>{errors.type}</Text></Stack>)}
                </FormControl>     
            </Box>  

            {values.type === 'pizza' && renderPizzaOptions}
            {values.type === 'soup' && renderSoupOption}
            {values.type === 'sandwich' && renderSandwichOption}

            <Button type='submit' width='100%' colorScheme='blue' mt={2}>Submit</Button>
        </form>
    )
};

export default DishForm;