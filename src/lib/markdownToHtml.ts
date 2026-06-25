import hljs from "highlight.js";
import Markdown from "markdown-it";
import "highlight.js/styles/atom-one-dark.css";

const md = Markdown({
  html: true,
  highlight: (str: string, lang: string): string => {
    if (lang && hljs.getLanguage(lang)) {
      const options = { language: lang, ignoreIllegals: true };
      const highlightedCode = hljs.highlight(str, options).value;
      return `<pre class="hljs"><code>${highlightedCode}</code></pre>`;
    }

    const code: string = md.utils.escapeHtml(str);
    return `<pre class="hljs"><code>${code}</code></pre>`;
  },
});

export default async function markdownToHtml(markdown: string): Promise<string> {
  const result = await md.render(markdown);
  return result
    .toString()
    .replace(
      /<a href="(https?:\/\/)/g,
      '<a target="_blank" rel="noopener noreferrer nofollow" href="$1'
    );
}
