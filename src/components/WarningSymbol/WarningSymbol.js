import React from 'react';
import PropTypes from 'prop-types';
import styles from './WarningSymbol.module.css';

const WarningSymbol = ({ margintop, marginleft, marginright }) => {
    return (
        <div className={styles.WarningSymbol}
            style={{
                marginTop: margintop,
                marginLeft: marginleft,
                marginRight: marginright
            }}
        >
            <div className={styles.WarningIcon}>
                !
            </div>
        </div>
    );
};


WarningSymbol.propTypes = {

};

export default WarningSymbol;