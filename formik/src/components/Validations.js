import React from 'react'
import {useFormik} from 'formik';
import './Validations.css'
import validationsYup from './validationsYup';

function Validations() {

    const {handleSubmit,handleChange,handleBlur, values,errors,touched} = useFormik({
        initialValues: {
            email: '',
            password: '',
            passwordConfirm: ''         
        },
        onSubmit: values => {
          console.log(values);
        },
        validationSchema: validationsYup
      });
  return (
    <div>
        <h1>Form Validations</h1>
      <form onSubmit={handleSubmit}>
        

        <label htmlFor="email">Email</label>
        <input style={{marginLeft:"10px"}} value={values.email} name="email" onChange={handleChange} placeholder="E-mail" onBlur={handleBlur}/>

        {errors.email && touched.email && (<p style={{color:"red"}}>{errors.email}</p>)}
          
        <br />
          

        <label>Password</label>
        <input style={{marginLeft:"10px"}} value={values.password} name="password" onChange={handleChange} placeholder="Password" onBlur={handleBlur}/>

        {errors.password && touched.password && (<p style={{color:"red"}}>{errors.password}</p>)}

        <br />
         

        <label>Confirm Password</label>
        <input style={{marginLeft:"10px"}} value={values.confirmPassword} name="passwordConfirm" onChange={handleChange} placeholder="Confirm Password" onBlur={handleBlur}/>

        {errors.passwordConfirm && touched.passwordConfirm && (<p style={{color:"red"}}>{errors.passwordConfirm}</p>)}


        <button type="submit">Submit</button>
        <br />
        

        {JSON.stringify(values)}
      </form>
    </div>
  )
}

export default Validations