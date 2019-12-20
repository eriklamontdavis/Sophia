import React, { useState, useEffect } from "react"; // update
import { db } from "../../firebase"; // add
import "./GuestList.scss";

const GuestList = () => {
  // Get guestlist data from firebase
  // This will be replaced because it's currently getting imported as it's own collection when it should be part of the event collection.

  const [users, setUsers] = useState([]); // update
  // add
  useEffect(() => {
    console.log("effect");
    const unsub = db.collection("users").onSnapshot(snapshot => {
      const allUsers = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setUsers(allUsers);
    });
    return () => {
      console.log("cleanup");
      unsub();
    };
  }, []);

  return (
    <div className="GuestListContainer">
      <h6>Would go:</h6>
      <ul className="personCardRow">
        {users.map(user => (
          // <Guest {...guest} key={guest.id.toString()} />
          <div className="personCardWrapper">
            <li key={user.id} className="personCardDiv">
              <div className="userAvatarWrapper">
                <img src={user.avatar} className="personAvatarImage"></img>
              </div>
              <h4>{user.name}</h4>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default GuestList;
