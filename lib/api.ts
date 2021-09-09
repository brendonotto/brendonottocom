import fs from "fs";
import { join, dirname } from "path";

// should be set before importing bundleMDX
if (process.platform === "win32") {
  process.env.ESBUILD_BINARY_PATH = join(
    process.cwd(),
    "node_modules",
    "esbuild",
    "esbuild.exe"
  );
} else {
  process.env.ESBUILD_BINARY_PATH = join(
    process.cwd(),
    "node_modules",
    "esbuild",
    "bin",
    "esbuild"
  );
}

import { bundleMDX } from "mdx-bundler";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export async function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { code, frontmatter } = await bundleMDX(fileContents, {
    cwd: dirname(fullPath),
  });

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = code;
    }

    if (frontmatter[field]) {
      items[field] = frontmatter[field];
    }
  });

  return items;
}

export async function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  let posts = (
    await Promise.all(slugs.map((slug) => getPostBySlug(slug, fields)))
  ).filter((p) => p);

  posts
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
}
