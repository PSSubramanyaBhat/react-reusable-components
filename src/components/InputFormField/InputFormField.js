import React, { useState } from 'react';
import PropTypes from 'prop-types';
import QuestionMarkSymbol from '../QuestionMarkSymbol/QuestionMarkSymbol';
// import InputFormField from '../InputFormField/InputFormField';
import styles from './InputFormField.module.css';

const InputFormField = ({ labelName, hintText, inputType, toolTopRequired }) => {
    const [showHint, setShowHint] = useState(false);
    const showToopTip = () => {
        setShowHint(!showHint)
    }
    return (
        <div
            className={styles.InputFormField}>
            <div className={styles.InputLabelName}
            >
                {labelName}
                {toolTopRequired === "true"
                    ? <QuestionMarkSymbol
                        showToopTip={showToopTip}
                        showHint={showHint}
                        margintop={'-1px'}
                        marginright={'0px'}
                        marginleft={'2px'}
                    />
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


//CHANGE THE SPELLING OF TOOL TIP FROM TOOL TOP...