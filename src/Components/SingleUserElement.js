import React from 'react';

const SingleUserElement = ({ user }) => {

    const styles = {
        container: {
            height: '100%'
        },
        img: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50%',
        },
        imgTmp: {
            height: '150px',
            width: '150px',
            border: '5px solid black',
            backgroundColor: 'yellow'
        },
        description: {
            height: '50px',
        },
        mainInfo: {
            fontSize: '20px',
            letterSpacing: '2px',
            padding: '5px'
        },
        descInfo: {
            fontSize: '12px',
            letterSpacing: '1px'
        },
        miniContainer: {
            marginBottom: '10px'
        }
    }

    return(
        <div style={styles.container} >
            <div style={styles.img} > <div style={styles.imgTmp} > </div></div>

            <div style={styles.miniContainer} >
                <div style={styles.mainInfo}> { user != null ? user.firstName+" "+user.lastName : 'choise user'} </div>
                <div style={styles.descInfo}> name </div>
            </div>

            <div style={styles.miniContainer} >
                <div style={styles.mainInfo}> { user != null ? user.primarySkill : 'loading'} </div>
                <div style={styles.descInfo}> main skill </div>
            </div>

            <div style={styles.miniContainer} >
                <div style={styles.mainInfo}> { user != null ? user.moreSkills : 'loading'} </div>
                <div style={styles.descInfo}> more skills </div>
            </div>

            <div style={styles.miniContainer} >
                <div style={styles.mainInfo}> { user != null ? user.email : 'loading'} </div>
                <div style={styles.descInfo}> e-mail </div>
            </div>
        </div>
    )
}

export default SingleUserElement;