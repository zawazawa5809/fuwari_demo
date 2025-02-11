export function generateToc(content) {
  const headings = content.querySelectorAll("h2, h3");
  const toc = [];

  headings.forEach((heading) => {
    const id =
      heading.id || heading.textContent.toLowerCase().replace(/ /g, "-");
    heading.id = id;
    toc.push({
      id,
      text: heading.textContent,
      level: heading.tagName === "H2" ? 2 : 3,
    });
  });

  return toc;
}
