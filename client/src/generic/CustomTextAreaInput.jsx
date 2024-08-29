import React from "react";
import { useField } from "formik";

const CustomTextAreaInput = ({ label, className, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label
        htmlFor={props.id || props.name}
        className="flex mt-4 text-gray-900"
      >
        {label}
      </label>
      <textarea
        className={`block w-full rounded-md border-0 p-2  text-gray-900 ring-1 ring-inset tracking-wide ring-gray-300 placeholder:text-gray-400  focus:animate-pulse focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
          meta.touched && meta.error ? "ring-rose-600" : ""
        } ${className}`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export default CustomTextAreaInput;
