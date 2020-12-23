import React from 'react';
import PropTypes from 'prop-types';
import QuestionMarkSymbol from '../QuestionMarkSymbol/QuestionMarkSymbol';
// import InputFormField from '../InputFormField/InputFormField';
import styles from './InputFormField.module.css';

const InputFormField = ({ labelName, hintText, inputType, toolTopRequired }) => {
    return (
        <div
            className={styles.InputFormField}>
            <div className={styles.InputLabelName}
            >
                {labelName}
                {toolTopRequired==="true"
                    ? <QuestionMarkSymbol />
                    : ''}

            </div>
            <input
                className={styles.TextFormField}
                type={inputType}
                placeholder={hintText}
            >
            </input>
        </div>
    );
};


InputFormField.propTypes = {

};

export default InputFormField;