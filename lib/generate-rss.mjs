import { readFileSync, readdirSync, writeFileSync, readdir } from "fs";
import { join } from "path";
import RSS from "rss";
import matter from "gray-matter";

async function generate() {
  const feed = new RSS({
    title: "Brendon Otto",
    site_url: "https://brendonotto.com",
    feed_url: "https://brendonotto.com/feed.xml",
  });

  const posts = readdirSync(join(process.cwd(), "_posts"));
  posts.map((name) => {
    const content = readFileSync(join(process.cwd(), "_posts", name));
    const frontmatter = matter(content);

    feed.item({
      title: frontmatter.data.title,
      url: `https://brendonotto.com/${frontmatter.data.slug}`,
      date: frontmatter.data.date,
      description: frontmatter.data.excerpt,
    });
  });

  writeFileSync("./public/feed.xml", feed.xml({ indent: true }));
}

generate();
