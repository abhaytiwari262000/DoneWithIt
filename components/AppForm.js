import React from "react";
import { Formik } from "formik";
import { useFormikContext } from "formik";

function AppForm({ initialValues, onSubmit, children }) {
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {() => ({ children })}
      </Formik>
    </>
  );
}

export default AppForm;
