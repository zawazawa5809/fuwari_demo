type TocItem = {
  id: string;
  text: string;
  depth: number;
};

export function generateToc(content: any): TocItem[] {
  const headings = content.querySelectorAll("h1, h2, h3, h4, h5, h6");
  return Array.from<Element>(headings).map((heading) => {
    return {
      id: heading.id,
      text: heading.textContent || "",
      depth: parseInt(heading.tagName[1]),
    };
  });
}
