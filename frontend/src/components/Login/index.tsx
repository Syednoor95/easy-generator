import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { postLoginDetails } from "../../api/authApi";
import { Link, useNavigate } from "react-router-dom";
import PathConstants from "../../routes/pathConstants";
import CustomInputField from "../common/CustomInputField";

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
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

const { SIGN_UP, LANDING_PAGE } = PathConstants;

const initialValues: LoginFormValues = {
  email: "",
  password: "",
};


const LoginForm: React.FC = () => {
  const [isEmailOrPasswordIsIncorrect, setIsEmailOrPasswordIsIncorrect] = useState<boolean>(false)

  const navigate = useNavigate()
  
  const handleSubmit = async (values: LoginFormValues) => {
    try {
      await postLoginDetails(values.email, values.password);

    navigate(LANDING_PAGE)
    } catch (error) {
      if (typeof error === "object" && error !== null && "status" in error) {
        if (error.status === 401 || error.status === 404) {
          setIsEmailOrPasswordIsIncorrect(true)
        }
      }
 
      console.error("Login failed:", error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <section className="flex justify-center items-center min-h-screen">
            <div className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
              <h2 className="text-3xl font-bold mb-6 text-center text-white">
                <span className="bg-gradient-to-r text-transparent from-blue-500 to-purple-500 bg-clip-text">
                  LogIn
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
                  LogIn
                </button>
              </div>
              {!!isEmailOrPasswordIsIncorrect && <p className="mt-2 text-red-500">Email or Password is incorrect</p>}
              <p className="text-center text-gray-600 mt-6">
                Don't have an account?{" "}
                <Link to={SIGN_UP} className="text-blue-500 hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </section>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
