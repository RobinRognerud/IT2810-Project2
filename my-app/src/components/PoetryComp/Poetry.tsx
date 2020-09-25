import React, { useState, useEffect } from "react";

interface IPoetryProps {
  poetry: string;
}

const Poetry: React.FC<IPoetryProps> = (props) => {
  const [contents, setContents] = useState([
    { lines: [""], title: "", author: "" },
  ]);

  const [error, setError] = useState(null);

  const poetry = props.poetry;

  useEffect(() => {
    fetch(poetry)
      .then((response) => response.json())
      .then(
        (data) => {
          setContents(data);
        },
        (error) => {
          setError(error);
        }
      );
  }, [poetry]);

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
