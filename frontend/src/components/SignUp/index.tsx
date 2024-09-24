import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import PathConstants from "../../routes/pathConstants";
import { postSignUpDetails } from "../../api/authApi";
import CustomInputField from "../common/CustomInputField";

interface SignupFormValues {
  email: string;
  name: string;
  password: string;
}


 

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  name: Yup.string().required("Name is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-zA-Z]/, "Password must contain at least one letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
});

const formFieldsData = [
  {
    id: "name",
    name: "name",
    type: "text",
    placeholder: "Enter your name",
    label: "Name",
  },
  {
    id: "email",
    name: "email",
    type: "email",
    placeholder: "Enter your email",
    label: "Email",
  },
  {
    id: "password",
    name: "password",
    type: "password",
    placeholder: "Enter your password",
    label: "Password",
  },
];

const SignupForm: React.FC = () => {
  const [isEmailAlreadyRegistered, setIsEmailAlreadyRegistered] = useState<boolean>(false)
  
  const initialValues: SignupFormValues = {
    email: "",
    name: "",
    password: "",
  };
  const navigate = useNavigate()
  
  const { LOGIN, HOME } = PathConstants;

  const handleSubmit = async (values: SignupFormValues) => {
    try {

      await postSignUpDetails(
        values.email,
        values.password,
        values.name
      );

      navigate(HOME)

    } catch (error:unknown) {
      if (typeof error === "object" && error !== null && "status" in error) {
        
        if( error.status === 409) {
          setIsEmailAlreadyRegistered(true)
          return
        }
      }
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <section className="flex justify-center items-center min-h-screen">
            <div className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
              <h2 className="text-3xl font-bold mb-6 text-center text-white">
                <span className="bg-gradient-to-r text-transparent from-blue-500 to-purple-500 bg-clip-text">
                  SignUp
                </span>
              </h2>

              {formFieldsData.map((field) => (
                <CustomInputField key={field.id} {...field} />
              ))}

              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                  disabled={isSubmitting}
                >
                  Sign up
                </button>
              </div>
              {!!isEmailAlreadyRegistered && <p className="mt-2 text-red-500">Email is already registered</p>}
              <p className="text-center text-gray-600 mt-6">
                You have an account?, Please{" "}
                <Link to={LOGIN} className="text-blue-500 hover:underline">
                  Login
                </Link>
              </p>
            </div>
          </section>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
