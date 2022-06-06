import useApp from "./App_hook";

const App = () => {
  const { id, max, loading, nextHandler, previousHandler, user } = useApp();
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
