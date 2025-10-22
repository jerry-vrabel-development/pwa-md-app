import type { MDXContent } from '@mdx-js/mdx';

declare module '*.mdx' {
  const component: MDXContent;
  export default component;
}
