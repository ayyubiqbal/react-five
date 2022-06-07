import useFetchData from "./hooks/useFetchData";

const App = () => {
  const {
    data: users,
    loading: userLoading,
    error: userError,
  } = useFetchData(`https://jsonplaceholder.typicode.com/users`, (data) =>
    data.map((item) => ({ id: item.id, name: item.name }))
  );

  const {
    data: posts,
    loading: postLoading,
    error: postError,
  } = useFetchData(`https://jsonplaceholder.typicode.com/posts`, (data) =>
    data.slice(0, 10)
  );

  const comments = useFetchData(
    `https://jsonplaceholder.typicode.com/comments`,
    (data) => data.slice(0, 10)
  );
  // const [users, setUsers] = useState([]);
  // const [userLoading, setUserLoading] = useState(false);
  // const [userError, setUserError] = useState("");
  // const [posts, setPosts] = useState([]);
  // const [postLoading, setPostLoading] = useState(false);
  // const [postError, setPostError] = useState("");

  // useEffect(() => {
  //   // fetchUsers();
  //   // fetchPosts();
  // }, []);

  // const fetchUsers = async () => {
  //   setUserLoading(true);
  //   try {
  //     const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  //     const data = await res.json();
  //     setUsers(data);
  //     setUserError("");
  //     setUserLoading(false);
  //   } catch (e) {
  //     setUserError("Server error occurred while fetching user data");
  //     setUserLoading(false);
  //   }
  // };

  // const fetchPosts = async () => {
  //   setPostLoading(true);
  //   try {
  //     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  //     const data = await res.json();
  //     setPosts(data);
  //     setPostError("");
  //     setPostLoading(false);
  //   } catch (e) {
  //     setPostError("Server error occurred while fetching post data");
  //     setPostLoading(false);
  //   }
  // };

  return (
    <div
      style={{
        width: "600px",
        display: "flex",
        gap: "1rem",
        justifyContent: "space-between",
      }}
    >
      {/* <div>
        <h1>Users</h1>
        <hr />
        {dataLoading && <h4>user loading ....</h4>}
        {dataError && <p>{dataError}</p>}
        {datas.map((data) => (
          <li key={data.id}>{data.name}</li>
        ))}
      </div> */}
      <div>
        <h1>Users</h1>
        <hr />
        {userLoading && <h4>user loading ....</h4>}
        {userError && <p>{userError}</p>}
        {users?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </div>
      <div>
        <h1>Post</h1>
        <hr />
        {postLoading && <h4>post loading ....</h4>}
        {postError && <p>{postError}</p>}
        {Array.isArray(posts) &&
          posts.map((post) => <li key={post.id}>{post.title}</li>)}
      </div>
      <div>
        <h1>Comments</h1>
        <hr />
        {comments.loading && <h4>post loading ....</h4>}
        {comments.error && <p>{comments.error}</p>}
        {comments.data?.map((comment) => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </div>
    </div>
  );
};

export default App;
