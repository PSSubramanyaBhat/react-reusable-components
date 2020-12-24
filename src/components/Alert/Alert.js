import React from 'react';
import PropTypes from 'prop-types';
import styles from './Alert.module.css';
import QuestionMarkSymbol from '../QuestionMarkSymbol/QuestionMarkSymbol';
import WarningSymbol from '../WarningSymbol/WarningSymbol';
import NoticeSymbol from '../NoticeSymbol/NoticeSymbol';
import SuccessSymbol from '../SuccessSymbol/SuccessSymbol';
import ErrorSymbol from '../ErrorSymbol/ErrorSymbol';
const Alert = ({ alertType }) => {
    return (
        <div className={styles.Alert}>
            {alertType === "error"
                ? <div className={styles.ErrorAlertBox}>
                    <ErrorSymbol
                        margintop={'12px'}
                        marginleft={'10px'}
                        marginright={'0px'}
                    />
                    <p><span>ERROR:</span> Error message display</p>
                </div>
                : ''}
            {alertType === "success"
                ? <div className={styles.SuccessAlertBox}>
                    <SuccessSymbol
                        margintop={'12px'}
                        marginleft={'10px'}
                        marginright={'0px'}
                    />
                    <p><span>SUCCESS:</span> Success message display</p>
                </div>
                : ''}
            {alertType === "warning"
                ? <div className={styles.WarningAlertBox}>
                    <WarningSymbol
                        margintop={'10px'}
                        marginleft={'10px'}
                        marginright={'0px'}
                    />
                    <p><span>WARNING:</span> Warning message display</p>
                </div>
                : ''}
            {alertType === "notice"
                ? <div className={styles.NoticeAlertBox}>
                    <NoticeSymbol
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