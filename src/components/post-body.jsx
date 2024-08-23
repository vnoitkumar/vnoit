import Image from "next/image";
import markdownStyles from "@/styles/markdown-styles.module.css";
import React from "react";

export function PostBody({ content, coverImage, title }) {
  return (
    <section className="max-w-3xl mx-auto mt-10 lg:mt-14 px-6 lg:px-8">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </section>
  );
}
