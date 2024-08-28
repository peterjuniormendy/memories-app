import React from "react";
import { useFormik, Form, Field, ErrorMessage } from "formik";
import FileBase from "react-file-base64";
import { addPost } from "../../slice/postSlice";
import { CustomTextInput } from "../../generic/CustomTextInput";

const PostForm = () => {
  const formik = useFormik({
    initialValues: {
      creator: "",
      title: "",
      message: "",
      tags: "",
      file: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      dispatch(addPost(values));
      resetForm(); // Reset the form after submission
    },
  });
  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <>
          <label htmlFor="creator">Creator</label>
          <Field name="creator" type="text" />
          <ErrorMessage name="creator" />
        </>
        {/* <CustomTextInput label="Creator" name="creator" type="text" />

        <CustomTextInput label="Title" name="title" type="text" />

        <CustomTextInput label="Message" name="message" type="textarea" />

        <CustomTextInput label="Tags" name="tags" type="text" />

        <div>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => formik.setFieldValue("file", base64)}
          />
        </div> */}

        <div className="flex justify-between items-center mt-4">
          <button type="button" onClick={formik.handleReset}>
            Reset
          </button>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </>
  );
};

export default PostForm;
