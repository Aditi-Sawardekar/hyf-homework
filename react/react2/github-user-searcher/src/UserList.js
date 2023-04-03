import User from "./User"
import { useContext } from "react";
import DataContext from "./context/DataContext";

const UserList = () => {
  // Define users as now we are not pulling it as prop
  const{users} = useContext(DataContext)    
    const userList = users.map((user) => (
      <User
        key={user.id}
        user={user}        
      />
    ));
  
    return <>
    <ul>{users.length ? userList : <h2>No results</h2>}</ul>;
    </>
  };

export default UserList