import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {Link, useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import { formAction } from './action/form';

const SignUpSchema = Yup.object().shape({
    name: Yup.string()
    .matches(
        /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
            'Name can only contain Latin letters.'
        )
    .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be 8 characters at minimum")
      .required("Password is required"),
    confirmpassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required("Confirm password is required")
  });

function SignUp() {
    const navigate = useNavigate();
    const formData = useSelector(state=>state.formAction)
    const dispatch = useDispatch(formAction);
  return (
    <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Formik
              initialValues={{ name:"", email: "", password: "", confirmpassword:"" }}
              validationSchema={SignUpSchema}
              onSubmit={(values) => {
                console.log(values);
                // alert("Form is validated! Submitting the form...");
                dispatch(formAction(values));
                // navigate('/landingpage');
                navigate('/');
              }}
            >
              {({ touched, errors, isSubmitting, values }) =>
                !isSubmitting && (
                  <div>
                    <div className="row mb-5">
                      <div className="col-lg-12 text-center">
                        <h1 className="mt-5">SignUp Form</h1>
                      </div>
                    </div>
                    <Form>

                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <Field
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        autoComplete="off"
                        className={`mt-2 form-control
                        ${touched.name && errors.name ? "is-invalid" : ""}`}
                        />

                        <ErrorMessage
                        component="div"
                        name="name"
                        className="invalid-feedback"
                        />
                    </div> 

                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <Field
                          type="email"
                          name="email"
                          placeholder="Enter email"
                          autoComplete="off"
                          className={`mt-2 form-control
                          ${touched.email && errors.email ? "is-invalid" : ""}`}
                        />
  
                        <ErrorMessage
                          component="div"
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

                      <div className="form-group">
                        <label htmlFor="confirmpassword" className="mt-3">
                          Confirm Password
                        </label>
                        <Field
                          type="password"
                          name="confirmpassword"
                          placeholder="Enter confirm password"
                          className={`mt-2 form-control
                          ${
                            touched.confirmpassword && errors.confirmpassword
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="confirmpassword"
                          className="invalid-feedback"
                        />
                      </div>
                    
                    {/*<Link to="/landingpage">*/}
                      
                      <button
                        type="submit"
                        className="btn btn-primary btn-block mt-4"
                        
                      >
                        Submit
                    </button>
                    {/*  </Link>*/}
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
                //   <LandingPage name={values.name} email={values.email}/>
                // <h1>
                // {console.log(formData)}
                // </h1>
                // )
              }
            </Formik>
          </div>
        </div>
      </div>
  )
}

export default SignUp