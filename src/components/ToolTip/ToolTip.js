import React from 'react';
import PropTypes from 'prop-types';
import CloseButton from '../CloseButton/CloseButton';
import Button from '../Button/Button';
import DialogPointer from '../DialogPointer/DialogPointer';
import styles from './ToolTip.module.css';

const ToolTip = ({ props }) => {
    return (
        <div>
            <DialogPointer />
            <div className={styles.ToolTip}>

                <div className={styles.ToolTipHeaderSection}>
                    Password Rules
                <CloseButton
                        showDialogFunction={() => { }}
                        // right={'410px'}
                        // top={'45px'}
                        margintop={'5px'}
                        marginleft={'305px'}
                    ></CloseButton>
                </div>
                <div className={styles.ToolTipBody}>
                    <ul>
                        <li><span>Rule 1# :</span> Atleast 8 characters required</li>
                        <li><span>Rule 2# :</span> Atleast 1 character in uppercase</li>
                        <li><span>Rule 3# :</span> Atleast 1 character in lowercase</li>
                        <li><span>Rule 4# :</span> Atleast 1 number</li>
                        <li><span>Rule 5# :</span> Atleast 1 special character</li>
                    </ul>
                </div>
                <div className={styles.ToolTipBottom}>
                    <Button
                        marginLeftValue={'20px'}
                        name={'Close'}
                        borderRadius={'0px'}
                        color1={'#333'}
                        color2={'#fff'}
                        onClick={() => { }}
                    ></Button>
                </div>
            </div>
        </div>
    );
};


ToolTip.propTypes = {

};

export default ToolTip;