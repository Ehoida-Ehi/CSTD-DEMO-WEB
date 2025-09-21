import React from "react";

const HtmlExtractor = ({ html }) => {
  // Create a DOM parser
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  // 1️⃣ First <span>
  const firstSpan = doc.querySelector("span")?.textContent?.trim() || "";

  // 2️⃣ Words before ":" in each list item
  const listItems = Array.from(doc.querySelectorAll("ol li")).map((li) => {
    const text = li.textContent.trim();
    const [keyword] = text.split(":"); // get everything before ":"
    return keyword.trim();
  });

  return (
    <div>
      <h2 className="font-bold">First Span:</h2>
      <p>{firstSpan}</p>

      <h2 className="font-bold mt-4">List Keywords:</h2>
      <ul className="list-disc ml-5">
        {listItems.map((word, i) => (
          <li key={i}>{word}</li>
        ))}
      </ul>
    </div>
  );
};

export default HtmlExtractor;
