import React, { useState } from "react";
import { Form, FormControl, FormLabel } from "react-bootstrap";

const InputField = () => {
  const [inputText, setInputText] = useState("");

  const handleInputText = (e) => {
    setInputText(e.target.value);
  };

  return (
    <Form>
      <FormLabel>Input Text</FormLabel>
      <FormControl
        value={inputText}
        placeholder="Add input text"
        onChange={handleInputText}
        className="rounded-pill mb-3" 
      />
      <div className="text-muted">Input text: {inputText}</div>
    </Form>
  );
};

export default InputField;