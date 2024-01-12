import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PostList() {
  const [posts, setposts] = useState([]);

  // ミクロポストを読み込む処理
  useEffect(() => {
    async function fetchposts() {
      try {
        const response = await axios.get('/posts');
        setposts(response.data); // データをセットする
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }

    fetchposts();
  }, []);

  return (
    <div>
      <h3>ツイート一覧</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {/* ここには適宜詳細情報を記載 */}
            <strong>{post.user.name}</strong>: {post.content}
            {/* 投稿日時やいいね数など追加情報を表示することもできます */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
