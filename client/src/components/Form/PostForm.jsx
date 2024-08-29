import React, { useState } from "react";
import { useFormik, Form, Formik } from "formik";
import FileBase from "react-file-base64";
import { addPost } from "../../slice/postSlice";
import { CustomTextInput } from "../../generic/CustomTextInput";
import { useDispatch } from "react-redux";
import CustomTextAreaInput from "../../generic/CustomTextAreaInput";
import CustomButton from "../../generic/CustomButton";

const PostForm = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState("");
  return (
    <>
      <Formik
        initialValues={{
          creator: "",
          title: "",
          message: "",
          tags: "",
          file: "",
        }}
        onSubmit={async (values, { resetForm }) => {
          values.file = file;
          setTimeout(() => {
            console.log(values);
            dispatch(addPost(values));
          }, [1000]);
          resetForm(); // Reset the form after submission
          setFile("");
        }}
      >
        {({ setFieldValue, resetForm, isSubmitting }) => (
          <Form className="p-4">
            <h2 className="text-gray-900 text-center text-xl font-medium">
              Create Post
            </h2>
            <CustomTextInput label="Creator" name="creator" type="text" />

            <CustomTextInput label="Title" name="title" type="text" />

            <CustomTextAreaInput label="Message" name="message" />

            <CustomTextInput label="Tags" name="tags" type="text" />

            <div className="mt-6">
              <FileBase
                id="file"
                type="file"
                multiple={false}
                onDone={({ base64 }) => {
                  // setFieldValue("file", base64);
                  setFile(base64);
                }}
              />
            </div>

            <div className="flex justify-between items-center mt-5">
              <CustomButton
                type={"reset"}
                onClick={() => {
                  resetForm();
                  setFile("");
                }}
                className="bg-slate-200 ring-2 ring-slate-300"
                children="Reset"
              />
              <CustomButton
                type={"submit"}
                disabled={isSubmitting}
                className="bg-green-600 text-white"
                children="Submit"
              />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default PostForm;
