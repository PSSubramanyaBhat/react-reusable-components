import React from 'react';
import PropTypes from 'prop-types';
import styles from './SuccessSymbol.module.css';

const SuccessSymbol = ({ margintop, marginleft, marginright }) => {
    return (
        <div className={styles.SuccessSymbol}
            style={{
                marginTop: margintop,
                marginRight: marginright,
                marginLeft: marginleft
            }}>
            <div
                className={styles.SuccessSymbolMark}
                style={{
                    paddingTop: '2px'
                }}
            ></div>
        </div>
    );
};


SuccessSymbol.propTypes = {

};

export default SuccessSymbol;