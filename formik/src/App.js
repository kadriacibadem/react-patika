import './App.css';
import {useFormik} from 'formik';
import Validations from './components/Validations';

function App() {

  const {handleSubmit,handleChange,values} = useFormik({
    initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        gender: 'male',
        hobies: [],
        country: ''
    },
    onSubmit: values => {
      console.log(values);
    }
  });
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input style={{marginLeft:"10px"}} value={values.firstName} name="firstName" onChange={handleChange} placeholder="First Name"/>

        <br />
        <br />

        <label htmlFor="lastName">Last Name</label>
        <input style={{marginLeft:"10px"}} value={values.lastName} name="lastName" onChange={handleChange} placeholder="Last Name"/>

        <br />
        <br />

        <label htmlFor="email">Email</label>
        <input style={{marginLeft:"10px"}} value={values.email} name="email" onChange={handleChange} placeholder="E-mail"/>
          
        <br />
        <br />  

        <span>Male</span>
        <input  type="radio" name="gender" value="male" onChange={handleChange} checked={values.gender === "male"} />

        <span>Female</span>
        <input type="radio" name="gender" value="female" onChange={handleChange} checked={values.gender === "female"} />
        
        <br />
        <br />

        <div>
          Football
          <input type="checkbox" name="hobies" value="Football" onChange={handleChange}/>
        </div>
        <div>
          Cinema
          <input type="checkbox" name="hobies" value="Cinema" onChange={handleChange}/>
        </div>
        <div>
          Photography
          <input type="checkbox" name="hobies" value="Photography" onChange={handleChange}/>
        </div>

        <br />
        <br />

        <select name="country" onChange={handleChange}>
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </select>


        <br />
        <br />

        <button type="submit">Submit</button>
        <br />
        <br />

        {JSON.stringify(values)}
      </form>

      <hr />  

      <Validations />

    </div>
  );
}

export default App;
