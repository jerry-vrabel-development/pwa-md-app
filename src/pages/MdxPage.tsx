/// <reference types="vite/client" />

import { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import { Spinner } from '../components/Spinner';

const components = {};

// 1️⃣  Type‑declare the modules object
type MdxComponent = React.ComponentType<Record<string, unknown>>;

const modules = import.meta.glob('../content/*.mdx', { eager: true }) as Record<string, { default: MdxComponent }>;

// 2️⃣  The page component
export default function MdxPage() {
  const { slug } = useParams<{ slug: string }>();

  const mdxModule = modules[`../content/${slug}.mdx`];
  const Component = mdxModule?.default;

  return (
    <MDXProvider components={components}>
      <Suspense fallback={<Spinner />}>
        {Component ? <Component /> : <div>Loading…</div>}
      </Suspense>
    </MDXProvider>
  );
}
