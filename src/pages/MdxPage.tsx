/// <reference types="vite/client" />
import '../styles/page-styles.css'
import { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import { Spinner } from '../components/Spinner';

const modules = import.meta.glob('../content/*.mdx', { eager: true });

export default function MdxPage() {
  const { slug } = useParams<{ slug: string }>();
  const moduleKey = Object.keys(modules).find(key =>
    key.includes(`${slug}.mdx`)
  );

  const Module = moduleKey ? (modules[moduleKey] as any).default : null;
  const frontmatter = moduleKey ? (modules[moduleKey] as any).frontmatter : null;
  const title = frontmatter?.title || slug || 'Post';

return (
    <div className="page-container">
      <header className="page-header">
        <h1 className="page-title">{title}</h1>
      </header>
      <main className="page-main">
        <MDXProvider components={{}}>
          <Suspense fallback={<Spinner />}>
            {Module ? <Module /> : <div>Post not found</div>}
          </Suspense>
        </MDXProvider>
      </main>
    </div>
  );
}
