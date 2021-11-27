import React from 'react';

import Button from './Button';
import Span from './Span';

const MessageWindow = ({ content, handleClick }) => {

    const styles = {
        background: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            backgroundColor: 'rgba(10,10,10,0.8)',
            zIndex: 90
        },
        messageBox: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            padding: '30px',
            border: '2px solid white',
            borderRadius: '5px',
            backgroundColor: 'rgba(240,240,240,0.8)'
        }
    }

    return(
        <div style={styles.background}>
            <div style={styles.messageBox}>
                <Span fontSize='24' margin='20px'>{content}</Span>
                <Button fontSize='16' handleClick={handleClick} >
                    close message
                </Button>
            </div>
        </div>
    )
}

export default MessageWindow;