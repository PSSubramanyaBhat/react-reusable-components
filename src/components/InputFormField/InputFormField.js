import React from 'react';
import PropTypes from 'prop-types';
import styles from './InputFormField.module.css';

const InputFormField = ({labelName, hintText, inputType}) => {
    return (
        <div
            className={styles.InputFormField}>
            <div className={styles.InputLabelName}
            >
                {labelName}
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