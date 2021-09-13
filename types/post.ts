import internal from "stream";
import Author from "./author";

type PostType = {
  slug: string;
  title: string;
  date: string;
  coverImage: {
    path: string;
    height: string;
    width: string;
  };
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  imageAttribution: string;
};

export default PostType;
