import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

function ArticleView() {
  const { slug } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    const loadArticle = async () => {
      try {
        const response = await fetch(`/posts/${slug}.md`);
        const text = await response.text();
        setContent(text);
      } catch (error) {
        setContent('# Article not found');
      }
    };
    
    loadArticle();
  }, [slug]);

  return (
    <div className="article-view" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

export default ArticleView;
