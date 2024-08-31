import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import FileBase from "react-file-base64";
import { CustomTextInput } from "../../generic/CustomTextInput";
import { useDispatch, useSelector } from "react-redux";
import CustomTextAreaInput from "../../generic/CustomTextAreaInput";
import CustomButton from "../../generic/CustomButton";
import { createPost, updatePost } from "../../controllers/post";

const PostForm = ({ currentId, setCurrentId }) => {
  const dispatch = useDispatch();
  const post = useSelector(({ post }) =>
    post.find((p) => (p._id === currentId ? p : null))
  );
  const [initialValues, setInitialValues] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  useEffect(() => {
    if (post) {
      setInitialValues({
        creator: post.creator || "",
        title: post.title || "",
        message: post.message || "",
        tags: post.tags || "",
        selectedFile: post.selectedFile || "",
      });
    }
  }, [post]);

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        onSubmit={async (values, { resetForm }) => {
          if (currentId) {
            await updatePost(currentId, values, dispatch);
          } else {
            await createPost(values, dispatch);
          }
          resetForm();
          setInitialValues({
            creator: "",
            title: "",
            message: "",
            tags: "",
            selectedFile: "",
          });
          setCurrentId(null);
        }}
      >
        {({ setFieldValue, isSubmitting }) => (
          <Form className="bg-white rounded-lg px-4 py-7">
            <h2 className="text-gray-900 text-center text-xl font-medium">
              {currentId ? "Updating" : "Creating"} Post
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
