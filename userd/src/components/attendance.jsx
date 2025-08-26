import React from "react";

export default function Attendance({users}){
    return (
        <div style={{ position: "absolute",
        top: "393px",
        left: "1030px",
        height: "265px",
        width: "471px",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
        color: "#333",
        textAlign: "center",
    }}>
        <div style={{marginTop: "80px"}}>
        <p>total users :</p>
        <h1 style={{fontSize: "50px", margin: "0"}}>{users.length}</h1>
        </div>
        </div>
    );

}