import React from "react";
import icon from "../assets/icon.svg";

export default function filter({ searchQuery, setSearchQuery }) {
    return(
        <div style={{ position: "absolute",
        top: "40px",
        left: "1030px",

    }}
  >
            <img src={icon} alt="search" style={{ 
                position: "absolute",
                width: "30px", 
                top: "8px",
                left: "430px" }} />
            <input style={{ width: "430px",
                height: "35px",
                borderRadius: "20px",
                border: "1px solid #ccc",
                padding: "5px 20px ",
                outline: "none",


            }}
            
            type="text"
            placeholder="Search by name or company..."
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
    );
}