import React from "react";
import { Field, ErrorMessage } from "formik";

interface FormFieldProps {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  label: string;
}

const CustomInputField: React.FC<FormFieldProps> = ({
  id,
  name,
  type,
  placeholder,
  label,
}) => {
  return (
    <div className="mb-6">
      <label
        htmlFor={id}
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label}
      </label>
      <div>
        <Field
          id={id}
          type={type}
          name={name}
          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder={placeholder}
        />
        <ErrorMessage name={name} component="div" className="text-red-500" />
      </div>
    </div>
  );
};

export default CustomInputField;
