import React from 'react';
import PropTypes from 'prop-types';
import styles from './PasswordStrengthBar.module.css';

const PasswordStrengthBar = ({ passwordStrength }) => {
    return (
        <div className={styles.PasswordStrengthBar}>
            {
                passwordStrength === "weak"
                    ? <div className={styles.StrengthBarContainer}>
                        <div className={styles.WeekBar}>
                        </div>
                        <h6>Poor</h6>
                    </div>
                    : ''
            }
            {
                passwordStrength === "moderate"
                    ? <div className={styles.StrengthBarContainer}>
                        <div className={styles.ModerateBar}>
                        </div>
                        <h6>Moderate</h6>
                    </div>
                    : ''
            }
            {
                passwordStrength === "strong"
                    ? <div className={styles.StrengthBarContainer}>
                        <div className={styles.StrongBar}>
                        </div>
                        <h6>Strong</h6>
                    </div>
                    : ''
            }
        </div>



    );
};


PasswordStrengthBar.propTypes = {

};

export default PasswordStrengthBar;