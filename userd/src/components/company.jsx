import React , {useState , useEffect } from "react";

export default function Company({users, onCompanySelect }) {

    // Extract unique company names from users
    const uniqueCompanies = Array.from(
        new Set(users.map((users)=> users.company?.name))
    ).sort();

    

    return(
        <div
        style={{ position: "absolute",   
        top: "108px",
        left: "1030px",
        height: "265px",
        width: "471px",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
        color: "#333",
        textAlign: "center",
        
    }}>
            <h3>Company list</h3>
            <div style={{
                    marginTop: "20px" ,
                    backgroundColor: "#ffffffff",
                    borderRadius: "10px" ,
                    maxWidth : "400px",
                    maxHeight : "180px" ,
                    marginLeft: "30px",
                    overflow : "scroll",
                    scrollbarWidth: "none",                                                            
                    position: "sticky",
                    padding: "0px" 
            }}>
                <ul
                style={{ listStyle: "none",
                    padding: 0, 
                margin: 0,
                backgroundColor: "#ffffffff",
                color: "#1b0d37ff",
                }}
                >
                    {uniqueCompanies.map((company, index) => (
                    <li 
                    key={index}
                    onClick={() => onCompanySelect(company)}
                    style={{
                        display: "flex", 
                        alignItems: "center",
                        padding: "10px ",
                        borderBottom: "1px solid #ddd",
                        cursor: "pointer",  
                    }}

                    

                    >
                        {company}
                    </li>
                    ))}
                </ul>   
            </div>
            
        </div>
    );
} 



