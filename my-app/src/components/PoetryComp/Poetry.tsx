import React, { useState, useEffect } from "react";

//Source: https://reactjs.org/docs/faq-ajax.html

interface IPoetryProps {
  poetryNo: string;
  //authorName: string;
}

const Poetry: React.FC<IPoetryProps> = (props) => {
  const [contents, setContents] = useState([{ lines: [""] }]);
  //const [contents2, setContents2] = useState([{ authors: [""] }]);

  const [error, setError] = useState(null);

  const poems: string[] = [
    "https://poetrydb.org/author,title/Taylor;Dance/lines.json",
    "https://poetrydb.org/author,title/Taylor;star/lines.json",
    "https://poetrydb.org/author,title/Taylor;good-natured/lines.json",
  ];

  /*   const author: string[] = [
    "https://poetrydb.org/author,title/Taylor;Dance/author.json",
    "https://poetrydb.org/author,title/Taylor;star/author.json",
    "https://poetrydb.org/author,title/Taylor;good-natured/author.json",
  ]; */

  const poetryNo = props.poetryNo;

  useEffect(() => {
    fetch(poems[parseInt(poetryNo)])
      .then((response) => response.json())
      .then(
        (data) => {
          setContents(data);
        },
        (error) => {
          setError(error);
        }
      );
  }, [poems[parseInt(poetryNo)]]);

  if (error) {
    return <div>Error {error} </div>;
  } else {
    return (
      <div className="poetry">
        {contents[0].lines.map((line) => (
          <p>{line}</p>
        ))}
        {/* <div className="poetry">
        {contents2[0].authors.map((author) => (
          <p>{author}</p> */}
      </div>
    );
  }
};

export default Poetry;
