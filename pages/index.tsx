import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { NextPage } from 'next';
import Head from 'next/head';
import Post from '../components/Post';

const Home: NextPage<{ posts: IPost[] }> = ({ posts }) => {
  // console.log(posts);
  return (
    <div>
      <Head>
        <title>Next Blog</title>
      </Head>

      <div className="post">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  // get files from posts dir
  const files = fs.readdirSync(path.join('posts'));

  // get slug and frontmatter from posts
  const posts = files.map((file) => {
    // create slug
    const slug = file.replace('.md', '').replace(' ', '-');

    // get frontmatter
    const mdWithMeta = fs.readFileSync(path.join('posts', file), 'utf-8');

    const { data: frontmatter } = matter(mdWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
