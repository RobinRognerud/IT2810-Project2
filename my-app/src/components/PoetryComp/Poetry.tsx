import React, { useState, useEffect } from "react";

interface IPoetryProps {
  poetryNo: string;
}

const Poetry: React.FC<IPoetryProps> = (props) => {
  const [contents, setContents] = useState([
    { lines: [""], title: "", author: "" },
  ]);

  const [error, setError] = useState(null);

  const poems: string[] = [
    "https://poetrydb.org/author,title/Taylor;Dance/lines,title,author.json",
    "https://poetrydb.org/author,title/Taylor;star/lines,title,author.json",
    "https://poetrydb.org/author,title/Emily%20Dickinson;Summer%20begins%20to%20have%20the%20look/title,lines,author.json",
  ];

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
        <div>
          <p id="title"> {contents[0].title}</p>
        </div>

        <div>
          {" "}
          {contents[0].lines.map((line) => (
            <p>{line}</p>
          ))}{" "}
        </div>
        <div>
          <p id="author"> Writen by {contents[0].author}</p>
        </div>
      </div>
    );
  }
};

export default Poetry;
