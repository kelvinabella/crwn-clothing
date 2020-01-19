import React from "react";
import {
  GroupContainer,
  FormInputContainer,
  FormInputLabelContainer
} from "./form-input.styles";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <GroupContainer>
      <FormInputContainer onChange={handleChange} {...otherProps} />
      {label ? (
        <FormInputLabelContainer otherProps={otherProps.value.length}>
          {label}
        </FormInputLabelContainer>
      ) : null}
    </GroupContainer>
  );
};

export default FormInput;
