import React from 'react';
import PropTypes from 'prop-types';
import styles from './NoticeSymbol.module.css';

const NoticeSymbol = ({ margintop, marginleft, marginright }) => {
    return (
        <div className={styles.NoticeSymbolMark}
            style={{
                marginTop: margintop,
                marginRight: marginright,
                marginLeft: marginleft
            }}
        >
            <div className={styles.NoticeSymbol}>
                i
            </div>
        </div>
    );
};


NoticeSymbol.propTypes = {

};

export default NoticeSymbol;