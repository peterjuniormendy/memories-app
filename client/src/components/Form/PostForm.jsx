import React, { useState } from "react";
import { Form, Formik } from "formik";
import FileBase from "react-file-base64";
import { CustomTextInput } from "../../generic/CustomTextInput";
import { useDispatch } from "react-redux";
import CustomTextAreaInput from "../../generic/CustomTextAreaInput";
import CustomButton from "../../generic/CustomButton";
import { createPost } from "../../controllers/post";

const PostForm = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Formik
        initialValues={{
          creator: "",
          title: "",
          message: "",
          tags: "",
          selectedFile: "",
        }}
        onSubmit={async (values, { resetForm }) => {
          const result = await createPost(values, dispatch);
          console.log("result", result);
          resetForm();
        }}
      >
        {({ setFieldValue, isSubmitting }) => (
          <Form className="bg-white rounded-lg px-4 py-7">
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
                  setFieldValue("selectedFile", base64);
                }}
              />
            </div>

            <div className="flex justify-between items-center mt-5">
              <CustomButton
                type={"reset"}
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
