import * as yup from 'yup';

export const saleValidationSchema = yup.object().shape({
  amount: yup.number().integer().required(),
  company_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
