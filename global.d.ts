interface IPost {
  frontmatter: {
    title: string;
    date: `${number}-${number}-${number}`;
    excerpt: string;
    cover: string;
    category: string;
  };
  slug: string;
}
