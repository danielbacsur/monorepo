import fs from "fs";
import path from "path";
import matter from "gray-matter";

type Metadata = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  technologies: string[];
  startDate: Date;
  endDate: Date;
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

export function getProjects() {
  const dir = path.join(process.cwd(), "projects");
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));

    metadata.startDate = new Date(metadata.startDate);
    metadata.endDate = new Date(metadata.endDate);

    return {
      content,
      ...metadata,
    };
  });
}
