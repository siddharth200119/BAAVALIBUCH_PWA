import React from 'react';
import { useState, useEffect } from 'react';
import {useParams} from "react-router-dom"
import "./Users.css"

function Users(){
    const {userID} = useParams()
    const [userData, setUserData] = useState([]);
    const [friends, setFriends] = useState([]);

    useEffect(() => {
      fetch("http://localhost:3000/api/userinfo/" + userID)
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            setUserData(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
    }, [userID]);

    useEffect(() => {
        
        for(let friendID in userData.friendID){
        console.log(userData.friendID[friendID])
        fetch("http://localhost:3000/api/userinfo/" + userData.friendID[friendID])
           .then((res) => res.json())
           .then((data) => {
              console.log(data);
              setFriends(prevArray => [...prevArray, data.ID]);
           })
           .catch((err) => {
              console.log(err.message);
           });
      }
    }, [userData]);

    return(
        <div className='homeScreen'>
            <div className='user'>
                <h1>{userData.ID}</h1>
                <div className='friends-section'>
                    <h2>Friend List</h2>
                    <ul>
                    {friends.map(function(friend, i){
                        return <li key={i}>{friend}</li>
                    })}
                    </ul>
                </div>
            </div>
        </div>
    )
} 

export default Users