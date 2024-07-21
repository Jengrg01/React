import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'
const Register = () => {
  return (
    <>
      <Formik initialValues={{firstname:'',lastname:'',email:'',password:'',cpassword:''}} validationSchema={Yup.object({
        firstname:Yup.string()
        .min(3,'Firstname cannot be shorter than 3 letters')
        .max(20,'Firstname must be 20 character or less')
        .required('Firstname is mandatory'),
        lastname:Yup.string()
        .min(3,'Lastname cannot be shorter than 3 letters')
        .max(20,'Lastname must be 20 character or less')
        .required('Lastname is mandatory'),
        email:Yup.string()
        .email('Invalid email')
        .required('email is mandatory'),
        
        // need to use regex(regular expression for password)
        password: Yup.string()
        .matches(/(?=.*[A-Za-z])(?=.*[0-9])(?=.[@#$-_?!])[A-Za-z0-9@#-_?!]{8,50}$/,',must be 8 characters or more with uppercase, lowercase and special characters')
        .required('Password is mandatory'),
        cpassword: Yup.string()
        .oneOf([Yup.ref('password'),null],'The password must match')
        .required('Confirm password is mandatory')
      })}>
        <div className="container">
          <div className="d-flex justify-content-center row">
            <div className="col-md-5 shadow p-3">
              <h1 className="text-center text-muted">Register Form</h1>
              <Form>
                <div className="mb-2">
                    <label htmlFor="firstname">First Name</label>
                    <Field id="firstname" type="text" name="firstname" className="form-control"/>
                    <ErrorMessage name='firstname'>
                        {msg=><div style={{color: 'red'}}>{msg}</div>}
                    </ErrorMessage>
                </div>
                 <div className="mb-2">
                    <label htmlFor="lastname">Last Name</label>
                    <Field id="lastname" type="text" name="lastname" className="form-control"/>
                    <ErrorMessage name='lastname'>
                        {msg=><div style={{color: 'red'}}>{msg}</div>}
                    </ErrorMessage>
                </div>
                 <div className="mb-2">
                    <label htmlFor="email">Email</label>
                    <Field id="email" type="text" name="email" className="form-control"/>
                    <ErrorMessage name='email'>
                        {msg=><div style={{color: 'red'}}>{msg}</div>}
                    </ErrorMessage>
                </div>
                 <div className="mb-2">
                    <label htmlFor="password">Password</label>
                    <Field id="password" type="password" name="password" className="form-control"/>
                    <ErrorMessage name='password'>
                        {msg=><div style={{color: 'red'}}>{msg}</div>}
                    </ErrorMessage>
                </div>
                 <div className="mb-2">
                    <label htmlFor="cpassword">Confirm Password</label>
                    <Field id="cpassword" type="password" name="cpassword" className="form-control"/>
                    <ErrorMessage name='cpassword'>
                        {msg=><div style={{color: 'red'}}>{msg}</div>}
                    </ErrorMessage>
                </div>
                 <div className="mb-2">
                    <input type="submit" value="Register" className="btn btn-primary"/>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </Formik>
    </>
  );
};

export default Register;
