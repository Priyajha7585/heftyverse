import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {useSelector} from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import Nav from './Nav';

const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be 8 characters at minimum")
      .required("Password is required"),
  });

function Login() {
    const formData = useSelector(state=>state.formAction);
    const navigate = useNavigate();
  return (
    <>

    <Nav text="New user ?" funtion="SignUp" link="/signup"/>
    <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={LoginSchema}
              onSubmit={(values) => {
                console.log(values);
                console.log(formData)
                // alert("Form is validated! Submitting the form...");
                if(formData!==null && formData.email===values.email && formData.password===values.password)
                {
                    navigate('/landingpage')
                }
                else
                {
                    alert("Email or password is wrong!!!")
                    window.location.reload();
                }

              }}
            >
              {({ touched, errors, isSubmitting, values }) =>
                !isSubmitting && (
                  <div>
                    
                    <Form>
                    <div className="row mb-5">
                      <div className="title">
                        <h1 className="mt-5">Login Form</h1>
                      </div>
                    </div>
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <Field
                          type="email"
                          name="email"
                          placeholder="Enter email"
                          autocomplete="off"
                          className={`mt-2 form-control
                          ${touched.email && errors.email ? "is-invalid" : ""}`}
                        />
  
                        <ErrorMessage
                          component="p"
                          name="email"
                          className="invalid-feedback"
                        />
                      </div>
  
                      <div className="form-group">
                        <label htmlFor="password" className="mt-3">
                          Password
                        </label>
                        <Field
                          type="password"
                          name="password"
                          placeholder="Enter password"
                          className={`mt-2 form-control
                          ${
                            touched.password && errors.password
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="password"
                          className="invalid-feedback"
                        />
                      </div>
  
                      <button
                        type="submit"
                        className="btn1"
                      >
                        Submit
                      </button>
                      <p>New user ? <Link to='/signup'>Register here</Link></p>
                    </Form>
                  </div>
                ) 
                // : (
                //   <div>
                //     <h1 className="p-3 mt-5">Form Submitted</h1>
  
                //     <div className="alert alert-success mt-3">
                //       Thank for your connecting with us. Here's what we got from
                //       you !
                //     </div>
                //     <ul className="list-group">
                //       <li className="list-group-item">Email: {values.email}</li>
                //       <li className="list-group-item">
                //         Password: {values.password}
                //       </li>
                //     </ul>
                //   </div>
                // )
              }
            </Formik>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login