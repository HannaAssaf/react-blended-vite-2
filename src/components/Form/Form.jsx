import { FiSearch } from 'react-icons/fi';
import React, { useRef } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { useId } from 'react';
import style from '../Form/Form.module.css';

const Form = ({ onSubmit }) => {
  const inputRef = useRef(null);

  const handleSubmit = event => {
    event.preventDefault();
    const value = inputRef.current.value.trim();
    if (!value) return;
    onSubmit(value);
    inputRef.current.value = '';
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        ref={inputRef}
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        autoFocus
      />
    </form>
  );
};

export default Form;
