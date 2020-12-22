import React from 'react';
import PropTypes from 'prop-types';
import styles from './CloseButton.module.css';

const CloseButton = ({ showDialogFunction, right, top}) => {
    return (
        <div
            className={styles.CloseButton}
            onClick={showDialogFunction}
            style={{
                right: right,
                top: top
            }}
        >
        </div>
    );
};


CloseButton.propTypes = {

};

export default CloseButton;