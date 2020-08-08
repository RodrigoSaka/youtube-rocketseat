import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

export const Input = ({ name, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const errorRender = () => {
    if (error) {
      return (
        <>
          <br />
          <span style={{ color: '#f00' }}>{error}</span>
        </>
      );
    }
  };

  return (
    <div>
      <input ref={inputRef} defaultValue={defaultValue} {...rest} />
      {errorRender()}
    </div>
  );
};
