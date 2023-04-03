import React, { useContext } from "react";
import DataContext from "./context/DataContext";
import UserList from "./UserList";

const QuerySearchUser = () => {
  const { search, setSearch, isLoading, error } = useContext(DataContext);
  
  return (
    <>
      <form className="searchUser" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search: </label>
        <input
          id="search"
          type="text"
          role="searchbox"
          placeholder="Search Users"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <main>
        {isLoading && <p>Loading...</p>}
        {error && <p>{`${error}`}</p>}
        {!isLoading && !error && <UserList />}{" "}
      </main>
    </>
  );
};

export default QuerySearchUser;
