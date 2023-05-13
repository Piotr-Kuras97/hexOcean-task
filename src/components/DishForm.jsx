import React from "react";
import { Box,Button,FormControl,Stack,Text,FormLabel,Input,NumberInput,NumberInputField,Select } from "@chakra-ui/react";

const DishForm = ({errors, touched, handleSubmit, values, onchange, handleChange}) => {
    const hasNameError = errors.name && touched.name;
    const hasPreparationTimeError = errors.preparation_time && touched.preparation_time;
    const hasTypeError = errors.type && touched.type;
    const hasNoOfSlicesError = errors.no_of_slices && touched.no_of_slices;
    const hasDiameterError = errors.diameter && touched.diameter;
    const hasSpicinessScaleError = errors.spiciness_scale && touched.spiciness_scale;
    const hasSlicesOfBreadError = errors.slices_of_bread && touched.slices_of_bread;

    const renderPizzaOptions = (
        <>
            <Box mb={3}>
                <FormControl>
                    <FormLabel>Number of slices</FormLabel>
                    <NumberInput>
                        <NumberInputField 
                            name="no_of_slices"
                            value={values.no_of_slices}
                            onChange={handleChange}
                            borderColor={hasNoOfSlicesError ? "red.500" : "gray.300"}
                        />
                    </NumberInput>
                    {hasNoOfSlicesError && (<Stack><Text fontSize='sm' color='red'>{errors.no_of_slices}</Text></Stack>)}
                </FormControl>
            </Box>

            <Box mb={3}>
                <FormControl>
                    <FormLabel>Pizza diameter</FormLabel>
                    <NumberInput>
                        <NumberInputField 
                            step='any'
                            name="diameter"
                            value={values.diameter}
                            onChange={handleChange}
                            placeholder="in cm"
                            borderColor={hasDiameterError ? "red.500" : "gray.300"}
                        />
                    </NumberInput>
                    {hasDiameterError && (<Stack><Text fontSize='sm' color='red'>{errors.diameter}</Text></Stack>)}
                </FormControl>
            </Box>
        </>
    )

    const renderSoupOption = (
        <Box mb={3}>
                <FormControl>
                    <FormLabel>Spiciness Scale</FormLabel>
                    <NumberInput>
                        <NumberInputField    
                            name="spiciness_scale"
                            value={values.spiciness_scale}
                            onChange={handleChange}
                            placeholder="from 1 to 10"
                            borderColor={hasSpicinessScaleError ? "red.500" : "gray.300"}
                        />
                    </NumberInput>
                    {hasSpicinessScaleError && (<Stack><Text fontSize='sm' color='red'>{errors.spiciness_scale}</Text></Stack>)}
                </FormControl>
            </Box>
    )

    const renderSandwichOption = (
        <Box mb={3}>
            <FormControl>
                <FormLabel>Slices of bread</FormLabel>
                <NumberInput>
                    <NumberInputField    
                        name="slices_of_bread"
                        value={values.slices_of_bread}
                        onChange={handleChange}
                        borderColor={hasSlicesOfBreadError ? "red.500" : "gray.300"}
                    />
                </NumberInput>
                {hasSlicesOfBreadError && (<Stack><Text fontSize='sm' color='red'>{errors.slices_of_bread}</Text></Stack>)}
            </FormControl>
        </Box>
    )

    return (
        <form onSubmit={handleSubmit}>
            <Box mb={3}>
                <FormControl>
                    <FormLabel>Dish name</FormLabel>
                    <Input
                        name="name"
                        value={values.name}
                        onChange={onchange}
                        placeholder="Your favorite dish"
                        borderColor={hasNameError ? "red.500" : "gray.300"}
                    />
                    {hasNameError && (<Stack><Text fontSize='sm' color='red'>{errors.name}</Text></Stack>)}
                </FormControl>
            </Box>

            <Box mb={3}>
                <FormControl>
                    <FormLabel>Preparation time</FormLabel>
                    <Input
                        name="preparation_time"
                        value={values.preparation_time}
                        onChange={onchange}
                        placeholder="00:00:00"
                        maxLength='8'
                        borderColor={hasPreparationTimeError ? "red.500" : "gray.300"}
                    />
                    {hasPreparationTimeError && (<Stack><Text fontSize='sm' color='red'>{errors.preparation_time}</Text></Stack>)}
                </FormControl>
            </Box>

            <Box mb={3}>
                <FormControl>
                    <FormLabel>Type of dish</FormLabel>
                    <Select
                        name="type"
                        value={values.type}
                        onChange={handleChange}
                        placeholder="Select a type"
                        borderColor={hasTypeError ? "red.500" : "gray.300"}
                    >
                        <option value="pizza">Pizza</option>
                        <option value="soup">Soup</option>
                        <option value="sandwich">Sandwich</option>
                    </Select>
                    {hasTypeError && (<Stack><Text fontSize='sm' color='red'>{errors.type}</Text></Stack>)}
                </FormControl>     
            </Box>  

            {values.type === 'pizza' && renderPizzaOptions}
            {values.type === 'soup' && renderSoupOption}
            {values.type === 'sandwich' && renderSandwichOption}

            <Button type="submit">Submit</Button>
        </form>
    )
}

export default DishForm