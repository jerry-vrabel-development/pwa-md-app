import { Link } from 'react-router-dom';

const postsMap = import.meta.glob('../content/*.mdx', { eager: true });
console.log('postsMap:', postsMap);

export default function Posts() {
  const posts = Object.entries(postsMap).map(([key, mod]) => {
    const slug = key.split('/').pop()!.replace(/\.mdx$/, '');
    const title = mod.frontmatter?.title ?? slug;
    return {
      slug,
      title
    };
  });

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(p => (
          <li key={p.slug}>
            <Link to={`/posts/${p.slug}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
