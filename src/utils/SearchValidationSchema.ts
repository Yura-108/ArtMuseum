import * as Yup from 'yup';

const SearchValidationSchema = Yup.object({
  query: Yup.string()
    .trim()
    .min(2, 'Minimum of 3 characters')
    .max(20, 'Maximum of 50 characters')
    .required('The search field is required'),
});

export default SearchValidationSchema;
