import glob from 'fast-glob';
import * as path from 'path';

async function importPost(postFilename: string) {
  const { meta, default: component } = await import(
    `../pages/blog/posts/${postFilename}`
  );
  return {
    slug: postFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  };
}

export async function getAllPosts() {
  const postFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/blog/posts'),
  });

  // Check if there are any MDX files in the folder
  if (postFilenames.length === 0) {
    // If no MDX files found, return an empty array
    return [];
  }

  const articles = await Promise.all(postFilenames.map(importPost));

  return articles.sort(
    (a, z) => new Date(z.date).getTime() - new Date(a.date).getTime()
  );
}
