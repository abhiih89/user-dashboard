import React from "react"; 
import { useState } from "react";
import UserList from "./components/list";
import Filter from "./components/filter";
import Card from "./components/card";
import logo from "./assets/logo.svg"; 
import user from "./assets/user.svg"; 
import { cardStyle } from "./components/cardstyle"; 
import Company from "./components/company"; 
import Attendance from "./components/attendance";
export default function App() { 
    
    
    const [searchQuery, setSearchQuery] = useState(""); 
    const [selectedUser, setSelectedUser] = useState(null); 
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [selectedCompanyState, setSelectedCompanyState] = useState(null);


    return ( 
    
        <div style={{fontFamily: "Arial, sans-serif",
             minHeight: "100vh", 
             color: "white", 
             }}> 
             
             <img 
             src= {logo} 
             style ={{ width: "350px" , 
             marginLeft: "40px", 
             marginTop: "25px", 
            }} 
             /> 
             
            {/* Search Component */}         
             <Filter searchQuery={searchQuery} setSearchQuery={setSearchQuery} /> 
             
            {/* User List Component */} 
             <UserList 
             searchQuery={searchQuery} 
             onUserSelect={setSelectedUser} 
             selectedCompany = {selectedCompanyState}
             onDataUpdate={(all, filtered) => {
                setUsers(all);
                setFilteredUsers(filtered);
             }}
             /> 

            {/* Attendance Components */}
            <Attendance users={users} />

            {/* Company Filter Component */}
            <Company users={users} onCompanySelect={setSelectedCompanyState}/>
             
             
             {selectedUser ? ( 
                <Card 
                
                name={`${selectedUser.firstName} ${selectedUser.lastName}`} 
                email={selectedUser.email} 
                phone={selectedUser.phone} 
                bloodGroup={selectedUser.bloodGroup} 
                company={selectedUser.company?.name} 
                />
            
            ) : ( 
            <div             
            style={cardStyle} 
            > 
            
            <img 
            src={user} 
            style={{ width: "150px", opacity: 0.7 , }} 
            /> 
            <div style={{paddingBottom:"165px"}} > 
                <h3 > Welcome</h3> 
                <p>Select a user from the list to see their details here.</p> 
                </div> 
                </div>
                )} 
                
                
                </div> 
                ); 
            }


