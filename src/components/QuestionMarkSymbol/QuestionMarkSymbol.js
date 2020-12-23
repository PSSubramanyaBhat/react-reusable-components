import React from 'react';
import PropTypes from 'prop-types';
import styles from './QuestionMarkSymbol.module.css';

const QuestionMarkSymbol = props => {
    return (
        <div className={styles.QuestionMarkSymbol}>
            <div className={styles.QuestionMark}>
                ?
            </div>
        </div>
    );
};


QuestionMarkSymbol.propTypes = {

};

export default QuestionMarkSymbol;