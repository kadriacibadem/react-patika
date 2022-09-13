import * as yup from 'yup';

const validationsYup = yup.object().shape({
    email: yup.string().email('Geçerli bir e-mail girin').required('e-mail alanı boş bırakılamaz'),
    password: yup.string().min(5,'Parolanız en az 5 karakter olmalıdır').required('Parola alanı boş bırakılamaz'),
    passwordConfirm: yup.string().oneOf([yup.ref('password')],'Parolalar uyuşmuyor').required('Parola alanı boş bırakılamaz'),
  });

  export default validationsYup