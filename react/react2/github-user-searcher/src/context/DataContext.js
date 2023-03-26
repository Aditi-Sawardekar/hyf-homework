import { createContext, useState, useEffect } from "react";

// DataConext is set to createContext that we imported.
const DataContext = createContext({});

// DataProvider - Will provide data to different Components
// {children} - refer to components that are within the DataProvider
// value - are props that we are passing down to the children
// We use useContext hook to request data.
// The props will be provided when we request them.

export const DataProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const query = search;

  // Fetch Data
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        if (!query) {
          return;
        } else {
          const response = await fetch(
            `https://api.github.com/search/users?q=${query}`
          );
          if (!response.ok) {
            throw Error("Data not recieved. Something went wrong!");
          }
          const data = await response.json();
          setUsers(data.items);
          setError(null);
        }
      } catch (error) {
        //console.log(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    (async () => await fetchUsers())();
  }, [query]);

  return (
    <DataContext.Provider
      value={{
        users,
        setUsers,
        search,
        setSearch,
        error,
        isLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
