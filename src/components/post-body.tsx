interface PostBodyProps {
  content: string;
}

export function PostBody({ content }: PostBodyProps) {
  return (
    <section className="max-w-3xl mx-auto px-6 lg:px-8">
      <div className="markdown" dangerouslySetInnerHTML={{ __html: content }} />
    </section>
  );
}
