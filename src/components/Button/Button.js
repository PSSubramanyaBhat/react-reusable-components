import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ name, marginLeftValue, borderRadius, color1, color2, onClick }) => {
    return (
        <div className={styles.Button}
            onClick={onClick}
            style={{
                marginLeft: marginLeftValue,
                borderRadius: borderRadius,
                backgroundColor: color1,
                color: color2,
                borderColor: color2,
                borderWidth: '1px',
                borderStyle: 'solid',
            }
            }
        >
            {name}
        </div>
    );
};


Button.propTypes = {

};

export default Button;