import React from "react";

const Input = (props) => {
    return (
        <input
          type={props.type}
          id={props.id}
          className={props.classes}
          name={props.name}
          value={props.value}
          placeholder={props.placeholder}
          required={props.required}
          disabled={props.disabled}
          onChange={props.onChange}
        />
    );
};

export default Input;