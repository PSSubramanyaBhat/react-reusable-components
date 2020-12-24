import React from 'react';
import PropTypes from 'prop-types';
import styles from './CloseButton.module.css';

const CloseButton = ({ showDialogFunction, marginleft, margintop }) => {
    return (
        <div
            className={styles.CloseButton}
            onClick={showDialogFunction}
            style={{
                // right: right,
                // top: top
                // paddingRight: padright,
                paddingTop: margintop,
                marginLeft: marginleft
            }}
        >
        </div>
    );
};


CloseButton.propTypes = {

};

export default CloseButton;
//Rename showDialogFunction......

//change prop right and top to margin/padding right and margin/padding top...