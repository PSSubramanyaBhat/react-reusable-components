import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import styles from './DialogBox.module.css';
import CloseButton from '../CloseButton/CloseButton';
import cn from 'classnames';

const DialogBox = ({ DialogTitle, DilogBodyContent, Button1_Text, Button2_Text, showDialogFunction, textAlignment, Justify }) => {
    // const dialogBoxClassNames = cn(styles.DialogBox, { [styles.DialogBoxHidden]: showdialog === false});
    
    const confirmDialogFunction = () => {
        showDialogFunction();
    }

    const cancelDialogFunction = () => {
        showDialogFunction();
    }

    return (
        <div
            className={styles.DialogBox}
        >

            <div className={styles.DialogTitle}>
                {DialogTitle}
                <CloseButton
                    showDialogFunction={showDialogFunction}
                    margintop={'10px'}
                    marginleft={'330px'}
                ></CloseButton>
            </div>

            {/* FIX THIS: Only 11 divs are being able to be fit in the below DialogBodyContainer, despite using oveflow:auto*/}
            {/* cn(styles.Menu, { [styles.Active]: active }); */}
            <div
                className={styles.DialogBodyContainer}
                style={{
                    justifyContent: Justify,
                    textAlign: textAlignment
                }}
            >
                <div className={styles.DialogBody}>
                    {DilogBodyContent}
                </div>
            </div>

            {/* <div className={dialogBoxClassNames}>
                <div className={styles.DialogBody}>
                    {DilogBodyContent}
                </div>
            </div> */}



            <div className={styles.DialogButtonField}>
                <Button
                    name={Button1_Text}
                    color1={'rgb(80, 80, 161)'}
                    color2={'white'}
                    marginLeftValue={'0px'}
                    borderRadius={'0px'}
                    onClick={confirmDialogFunction}
                ></Button>
                <Button
                    name={Button2_Text}
                    color1={'white'}
                    color2={'rgb(80, 80, 161)'}
                    marginLeftValue={'0px'}
                    borderRadius={'0px'}
                    onClick={cancelDialogFunction}
                ></Button>
            </div>

        </div>
    );
};


DialogBox.propTypes = {

};

export default DialogBox;