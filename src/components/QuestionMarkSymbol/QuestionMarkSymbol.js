import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ToolTip from '../ToolTip/ToolTip';
import styles from './QuestionMarkSymbol.module.css';

const QuestionMarkSymbol = ({ showHint, showToopTip, margintop, marginleft, marginright }) => {
    return (
        <div className={styles.QuestionMarkSymbol}
            style={{
                marginTop: margintop,
                marginRight: marginright,
                marginLeft: marginleft
            }}
            onClick={() => {
                showToopTip();
            }}>
            <div className={styles.QuestionMark}>
                ?
            </div>

            {showHint === "true"
                ? <ToolTip />
                : ''}


        </div>
    );
};


QuestionMarkSymbol.propTypes = {

};

export default QuestionMarkSymbol;