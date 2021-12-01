import React, { useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faNodeJs, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

import { gsap } from 'gsap/all';


const UserListElement = ({ userInfo, handleClick }) => {

    const { firstName, lastName, primarySkill } = userInfo;

    const clickMouse = () => handleClick(userInfo);

    const tl = gsap.timeline();
    const oneElement = useRef();

    const onElementAnim = () => {
        tl.to(oneElement.current, {
            backgroundColor: 'black',
            duration: '1s'
        })
    }

    const offElementAnim = () => {
        tl.to(oneElement.current, {
            backgroundColor: 'transparent',
            duration: '1s'
        })
    }

    const styles = {
        box: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            borderBottom: '1px solid black',
            padding: '5px 15px',
            cursor: 'pointer'
        },
        info: {
            fontSize: '18px',
            width: '100%',
            textAlign: 'center',
            letterSpacing: '2px'
        },
        icon: {
            fontSize: '24px',
            padding: '0 10px 0 30px',
        }
    }

    const primaryIcon = () => {
        switch(primarySkill){
            case 'ReactJS': return <FontAwesomeIcon icon={faReact} />
            case 'HTML5': return <FontAwesomeIcon icon={faHtml5} />
            case 'CSS3': return <FontAwesomeIcon icon={faCss3} />
            case 'JS': return <FontAwesomeIcon icon={faJs} />
            case 'NodeJS': return <FontAwesomeIcon icon={faNodeJs} />
            case 'GitHub': return <FontAwesomeIcon icon={faGithub} />
            default: return <FontAwesomeIcon icon={faExclamationTriangle} />
        }
    }

    return(
        <div style={styles.box} ref={oneElement} onMouseEnter={onElementAnim} onMouseLeave={offElementAnim} onClick={clickMouse}>
            <div style={styles.info} > {firstName} {lastName} </div>
            <div style={styles.info} > {primarySkill} </div>
            <div style={styles.icon} > {primaryIcon()} </div>
        </div>
    )
}

export default UserListElement;