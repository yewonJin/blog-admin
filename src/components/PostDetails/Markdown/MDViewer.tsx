import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./markdown.css";

function MDViewer({ markdown }: { markdown: string }) {
  return (
    <ReactMarkdown className="markdownBox" remarkPlugins={[remarkGfm]}>
      {markdown}
    </ReactMarkdown>
  );
}

export default React.memo(MDViewer);
