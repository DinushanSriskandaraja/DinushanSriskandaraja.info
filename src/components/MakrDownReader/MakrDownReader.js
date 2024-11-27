import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import styles from "./MakrDownReader.module.css";

const MakrDownReader = ({ markdownContent }) => (
  <div className={styles.MakrDownReader}>
    <ReactMarkdown
      children={markdownContent}
      components={{
        // Custom rendering for code blocks
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              style={materialDark}
              language={match[1]}
              PreTag="div"
              {...props}>
              {" "}
              {String(children).replace(/\n$/, "")}{" "}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {" "}
              {children}{" "}
            </code>
          );
        },

        // Optional: Custom behavior for links
        a({ node, ...props }) {
          return (
            <a
              className={styles.customLink}
              {...props}
              target="_blank"
              rel="noopener noreferrer">
              {" "}
              {props.children}{" "}
            </a>
          );
        },
      }}
    />{" "}
  </div>
);

MakrDownReader.propTypes = {
  markdownContent: PropTypes.string.isRequired,
};

export default MakrDownReader;
