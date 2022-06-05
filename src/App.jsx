import React, { useEffect, useState } from "react";

const cacheData = {};
// console.log(cacheData);

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState(1);
  const max = 10;

  useEffect(() => {
    if (cacheData[`user-${id}`]) {
      setUser(cacheData[`user-${id}`]);
      return;
    }
    console.log(cacheData);
    setLoading(true);
    fetchedUsers(id)
      .then((data) => setUser(data))
      .finally(() => setLoading(false));
  }, [id]);

  useEffect(() => {
    if (!cacheData[`user-${id + 1}`] && id < max) {
      fetchedUsers(id + 1);
    }
  }, [id]);

  const fetchedUsers = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        cacheData[`user-${id}`] = data;
        return cacheData[`user-${id}`];
      });
  };

  const previousHandler = () => {
    if (id > 1) {
      setId(id - 1);
    }
  };
  const nextHandler = () => {
    if (id < max) {
      setId(id + 1);
    }
  };

  return (
    <div>
      <div>
        <h1>User Details: {id}</h1>
        {loading && <p>loading....</p>}
        {!loading && user && (
          <div>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </div>
        )}
      </div>
      <button disabled={id === 1} onClick={previousHandler}>
        Previous
      </button>
      <button disabled={id === max} onClick={nextHandler}>
        Next
      </button>
    </div>
  );
};

export default App;
