import * as Yup from 'yup';

const validation = Yup.object().shape({
  origin: Yup.string().required('Campo obrigatório!'),
  destiny: Yup.string().required('Campo obrigatório!'),
  plan: Yup.number().required('Campo obrigatório!'),
  duration: Yup.number()
    .min(1, 'Duração muito curta!')
    .required('Campo obrigatório!'),
});

export default validation;
