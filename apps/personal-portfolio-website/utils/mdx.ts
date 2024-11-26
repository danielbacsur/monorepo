import fs from "fs";
import path from "path";
import matter from "gray-matter";

type Metadata = {
  title: string;
  date: string;
};

function parseFrontmatter(fileContent: string) {
  const { data: metadata, content } = matter(fileContent);
  return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      slug,
      content,
      metadata,
    };
  });
}

export function getProjects() {
  return getMDXData(path.join(process.cwd(), "projects"));
}
