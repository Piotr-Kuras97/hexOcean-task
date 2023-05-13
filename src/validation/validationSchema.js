import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Dish name is required'),
    preparation_time: Yup.string().matches(
            /^(?:\d|[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/,
            "Preparation time must be in format HH:MM:SS"
        )
        .required('Preparation time is required'),
    type: Yup.string().required('Dish type is required'),
    no_of_slices: Yup.number()
    .when('type', {
      is: 'pizza',
      then: () => Yup.number()
        .required('Number of slices is required')
        .min(1, 'Minimal number of slices is 1')
        .max(50, 'Maximum number of slices is 15'),
    }),
    diameter: Yup.number()
        .when('type', {
            is: 'pizza',
            then: () => Yup.number()
                .required('Diameter is required')
                .min(10, 'Minimal diameter is 10 cm')
                .max(50, 'Maximum diameter is 50 cm'),
    }),
    spiciness_scale: Yup.number()
        .when('type', {
            is: 'soup',
            then: () => Yup.number()
                .required('Spiciness scale is required')
                .min(1, 'Minimal spiciness scale is 1')
                .max(10, 'Maximum spiciness scale is 10'),
    }),
    slices_of_bread: Yup.number()
        .when('type', {
            is: 'sandwich',
            then: () => Yup.number()
                .required('Number of slices is required')
                .min(1, 'Minimal slices of bread is 1')
                .max(10, 'Maximum slices of bread is 10'),
        })
})

export default validationSchema