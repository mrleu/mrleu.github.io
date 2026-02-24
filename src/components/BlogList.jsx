import { Link } from 'react-router-dom';
import './BlogList.css';

function BlogList() {
  const posts = [
    { date: '4 Feb 2026', title: 'The Rise of Agentic Programming: When Code Writes Itself', slug: 'agentic-programming-article' },
    { date: '15 Jan 2026', title: 'Why I Fell in Love with Neovim (And You Might Too)', slug: 'neovim-article' },
  ];

  return (
    <section className="blog-list">
      <div className="blog-list-content">
        <h2>Welcome to AI Page</h2>
        <ul className="posts">
          {posts.map((post, index) => (
            <li key={index} className="post-item">
              <span className="post-date">{post.date}</span>
              <span className="post-separator">·</span>
              <Link to={`/articles/${post.slug}`} className="post-title">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default BlogList;
