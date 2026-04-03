type BlogReferencesProps = {
  items: string[];
};

export function BlogReferences({ items }: BlogReferencesProps) {
  if (!items.length) return null;

  return (
    <section
      className="blog-references"
      aria-labelledby="blog-references-heading"
    >
      <h2 id="blog-references-heading" className="blog-references-heading">
        References
      </h2>
      <ol className="blog-references-list">
        {items.map((entry, index) => (
          <li key={index} className="blog-references-item">
            {entry}
          </li>
        ))}
      </ol>
    </section>
  );
}
