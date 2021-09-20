import React from "react";
import { useFormikContext } from "formik";
import AppText from "./AppText";
import AppTextInput from "./AppTextInput";
function AppFormField({ name, ...otherProps }) {
  const { handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        onChangeText={handleChange(name)}
        {...otherProps}
      ></AppTextInput>
    </>
  );
}

export default AppFormField;
