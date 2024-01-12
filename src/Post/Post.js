import React, { useState } from 'react';
import axios from 'axios';

function Post() {
  const [content, setContent] = useState('');

  // ツイート投稿処理
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.post('/posts', {
        content: content,
        // APIによってはトークンやユーザーIDが必要な場合があります
      });
      // 投稿成功時の処理
      console.log('Micropost created:', response.data);
      setContent(''); // 内容をクリアする
    } catch (error) {
      // エラー発生時の処理
      console.error('Error posting micropost:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="content">ツイート内容:</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button type="submit">投稿</button>
    </form>
  );
}

export default Post
