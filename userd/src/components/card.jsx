import React from "react";
import user from "../assets/user.svg";
import { cardStyle } from "./cardstyle";

export default function Card({name, email, phone, bloodGroup, company}) {
    return (
        
        <div 
            style={cardStyle}>
            <img
                src={user}
                style={{ width: "150px", opacity: 0.7 , paddingBottom: "40px" ,}}/>
            <h2>{name}</h2>
            <div style={{ textAlign: "left" }}>
            <p><b>Email</b>: {email}</p>
            <p><b>Phone</b>: {phone}</p>
            <p><b>Blood Group</b>: {bloodGroup}</p>
            <p><b>Company</b>: {company}</p>
            </div>
        </div>
    );

}

