import { useEffect, useState } from "react";
import Main from "./components/Main";
import db from "./firebase";
import { doc, collection, getDocs, onSnapshot, deleteDoc } from "firebase/firestore";
import Home from "./components/Home";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // データベースからデータを取得する（読み取り）
    const postData = collection(db, "posts");
    getDocs(postData).then((snapShot) => {
      setPosts(snapShot.docs.map((doc) => ({ ...doc.data() })));
    });
    // 削除
    // await deleteDoc(postData);

    // リアルタイムで取得
    onSnapshot(postData, (post) => {
      setPosts(post.docs.map((doc) => ({ ...doc.data() })));
    });

  }, []);

  return (
    <div style={{ padding: "50px" }}>
      <h1 style={{ marginBottom: "20px" }}>Trello風アプリ</h1>
      <Main />
      <Home />
      <div>
        {posts.map((post) => (
          <div key={post.title}>
            <h1>{post.title}</h1>
            <p>{post.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
