import React, { useState, useEffect, useMemo } from "react";

export default function UserList({searchQuery, onUserSelect , selectedCompany , onDataUpdate  }) {
    const [users, setUsers] = useState([]);

    {/* Fetcheing users from DummyJSON API */}
    useEffect (() => {
        fetch("https://dummyjson.com/users?limit=208")
        .then((res) => {
          if(!res.ok) {
            throw new Error( `HTTP error! status: ${res.status}`);
          }
        
        return res.json();
      })
        .then((data) => {
          setUsers(data.users);
          if(onDataUpdate) {
            onDataUpdate(data.users, data.users);
          }
        })
        .catch((err) => console.error("Error fetching users:", err));
    }, []);

    {/* Filtering users based on search query and selected company */}
    const filteredUsers = useMemo(() => {
      const query = searchQuery.toLowerCase();
    
      return users.filter((user) => {
        const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
        const company = user.company?.name?.toLowerCase() || "";

        const matchesSearch = fullName.includes(query) || company.includes(query);
        const matchesCompany = selectedCompany
          ? user.company?.name?.toLowerCase().includes(selectedCompany.toLowerCase())
          : true;

    return matchesSearch && matchesCompany;
       
      });
    }, [users, searchQuery, selectedCompany]);

    {/* Notify parent component about data update */}
    useEffect(() => {
      if(onDataUpdate) {
        onDataUpdate(users, filteredUsers);
      }
    }, [users, filteredUsers, onDataUpdate]);

    return (
 
        <div 
         style={{ marginTop: "20px" ,
         backgroundColor: "#ffff",
         borderRadius: "10px" ,
         maxWidth : "500px",
         maxHeight : "530px" ,
         marginLeft: "30px",
         overflow : "scroll",
         scrollbarWidth: "none",                                                            
         position: "sticky",
         padding: "10px",
         color:"#333",
         textAlign: "left",
         boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
          }}>
            <h3 style={{textAlign: "center",}}>User List</h3>
            <div  
            style={{ marginTop: "20px" ,
              overflow : "scroll",
              scrollbarWidth: "none", 
              position: "sticky",
            }}>
            <ul style={{ listStyle: "none", 
                padding: 0, 
                margin: 0,
                backgroundColor: "#ffff",
                color: "#1b0d37ff",
                }}>

                {filteredUsers.map((user) => (
                    <li key ={user.id}
                     style={{
                        display: "flex", 
                        alignItems: "center",
                        padding: "10px ",
                        borderBottom: "1px solid #ddd",
                        cursor: "pointer",
                        }}
                        
                        onClick={() => onUserSelect(user)}   
                    > 
                    
                     <span style={{ fontWeight: "bold" , fontSize: "16px" }}>
                        {user.firstName} {user.lastName}
                    </span>
                    <span style={{ fontSize: "13px", }}>
                    {user.company?.name ? `, ${user.company.name}` : ""}
                    </span>

                    </li>
                ))}
            </ul>
            </div>
        </div>
        
    );

} 
