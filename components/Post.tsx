import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const Post: NextPage<{ post: IPost }> = ({ post }) => {
  const date = new Date(post.frontmatter.date);
  return (
    <div className="card">
      <Image
        src={post.frontmatter.cover}
        alt="cover image"
        width={100}
        height={100}
      />
      <div className="post-date">Posted on {date.toDateString()}</div>
      <h3>{post.frontmatter.title}</h3>
      <p>{post.frontmatter.excerpt}</p>

      <Link
        href={`/blog/${
          post.frontmatter.category
            ? post.frontmatter.category
            : 'uncategorized'
        }/${[post.slug]}`}
      >
        <a className="btn">Read More</a>
      </Link>
    </div>
  );
};

export default Post;
