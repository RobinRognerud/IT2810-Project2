import React, { useState, useEffect } from "react";

//Source: https://reactjs.org/docs/faq-ajax.html

interface IPoetryProps {
  poetryNo: string;
}

const Poetry: React.FC<IPoetryProps> = (props) => {
  const [contents, setContents] = useState([{ lines: [""] }]);
  const [error, setError] = useState(null);

  const poems: string[] = [
    "https://poetrydb.org/author,title/Taylor;Dance/lines.json",
    "https://poetrydb.org/author,title/Taylor;star/lines.json",
    "https://poetrydb.org/author,title/Taylor;good-natured/lines.json",
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
          //TODO: gjør noe med error
          setError(error);
        }
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [poems[parseInt(poetryNo)]]);

  if (error) {
    return <div>Error {error} </div>;
  } else {
    return (
      <div className="poetry">
        {contents[0].lines.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
        {console.log(contents[0].lines)}
      </div>
    );
  }
};

export default Poetry;
