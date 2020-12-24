import React from 'react';
import PropTypes from 'prop-types';
import styles from './ErrorSymbol.module.css';

const ErrorSymbol = ({ margintop, marginleft, marginright }) => {
    return (
        <div className={styles.ErrorSymbolMark}
            style={{
                marginTop: margintop,
                marginRight: marginright,
                marginLeft: marginleft
            }}>
            <div
                className={styles.ErrorMark}
                style={{
                    paddingTop: '3px'
                }}
            >
            </div>
        </div>
    );
};


ErrorSymbol.propTypes = {

};

export default ErrorSymbol;