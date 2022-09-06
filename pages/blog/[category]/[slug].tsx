import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function PostPage() {
  return <div>post</div>;
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));

  const paths = files.map((file) => {
    const mdWithMeta = fs.readFileSync(path.join('posts', file), 'utf-8');
    const meta = matter(mdWithMeta);
    console.log(meta.data.category);
    return {
      params: {
        slug: file.replace('.md', '').replace(' ', '-'),
        category: meta.data.category ? meta.data.category : 'uncategorized',
      },
    };
  });

  // console.log(paths);

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps() {
  return {
    props: {},
  };
}
