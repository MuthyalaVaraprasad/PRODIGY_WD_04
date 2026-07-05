import React from "react";
import "./BlogCard.scss";
import {motion} from "framer-motion";

export default function BlogCard({blog, isDark}) {
  function openUrlInNewTab(url, name) {
    if (!url || url === "#") {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <motion.div
      onClick={() => openUrlInNewTab(blog.url, blog.title)}
      className={isDark ? "blog-card-wrapper dark-card" : "blog-card-wrapper"}
      whileHover={{y: -8}}
      transition={{type: "spring", stiffness: 300}}
    >
      <div className="blog-card-body">
        <span className="blog-tag">Tech Article 📝</span>
        <h3 className="blog-title">{blog.title}</h3>
        <p className="blog-desc">{blog.description}</p>
        <div className="blog-footer">
          <span className="read-more">Read article</span>
          <span className="arrow">→</span>
        </div>
      </div>
    </motion.div>
  );
}
