import hljs from "highlight.js";
import Markdown from "markdown-it";
import "highlight.js/styles/atom-one-dark.css";

const md = Markdown({
  highlight: (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      const options = { language: lang, ignoreIllegals: true };
      const highlightedCode = hljs.highlight(str, options).value;
      return `<pre class="hljs"><code>${highlightedCode}</code></pre>`;
    }

    const code = md.utils.escapeHtml(str);
    return `<pre class="hljs"><code>${code}</code></pre>`;
  },
});

export default async function markdownToHtml(markdown) {
  const result = await md.render(markdown);
  return result
    .toString()
    .replaceAll(
      "<a href=",
      '<a target="_blank" rel="noopener noreferrer nofollow" href='
    );
}
