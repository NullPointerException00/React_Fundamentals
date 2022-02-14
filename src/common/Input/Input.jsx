/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Styled from "styled-components";

const StyledInput = Styled.input`
`;

const Input = (props) => {
  const { defaultValue = "", onChange } = props;
  const [value, setValue] = useState(defaultValue);
  return (
    <StyledInput
    placeholder="Enter course name..."
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        onChange && onChange(e.target.value);
      }}
    />
  );
};

export default Input;
