import React from 'react';

function Message({msg, bgColor}){
    let styles = {
        padding: "1rem",
        marginBottom: "1rem",
        textAlingn: "center",
        color: "#fff",
        backgroundColor: bgColor,
        fontWeigth: "bold"
    }
    return(
        <div style={styles}>
            <p>{msg}</p>
        </div>
    );
}

export default Message;