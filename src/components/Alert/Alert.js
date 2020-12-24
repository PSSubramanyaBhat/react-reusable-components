import React from 'react';
import PropTypes from 'prop-types';
import styles from './Alert.module.css';
import QuestionMarkSymbol from '../QuestionMarkSymbol/QuestionMarkSymbol';

const Alert = ({ alertType }) => {
    return (
        <div className={styles.Alert}>
            {alertType === "error"
                ? <div className={styles.ErrorAlertBox}>
                    <QuestionMarkSymbol
                        margintop={'12px'}
                        marginleft={'10px'}
                        marginright={'0px'}
                    />
                    <p><span>ERROR:</span> Error message display</p>
                </div>
                : ''}
            {alertType === "success"
                ? <div className={styles.SuccessAlertBox}>
                    <QuestionMarkSymbol
                        margintop={'12px'}
                        marginleft={'10px'}
                        marginright={'0px'}
                    />
                    <p><span>SUCCESS:</span> Success message display</p>
                </div>
                : ''}
            {alertType === "warning"
                ? <div className={styles.WarningAlertBox}>
                    <QuestionMarkSymbol
                        margintop={'12px'}
                        marginleft={'10px'}
                        marginright={'0px'}
                    />
                    <p><span>WARNING:</span> Warning message display</p>
                </div>
                : ''}
            {alertType === "notice"
                ? <div className={styles.NoticeAlertBox}>
                    <QuestionMarkSymbol
                        margintop={'12px'}
                        marginleft={'10px'}
                        marginright={'0px'}
                    />
                    <p><span>NOTICE:</span> Notice message display</p>
                </div>
                : ''}
        </div>
    );
};


Alert.propTypes = {

};

export default Alert;