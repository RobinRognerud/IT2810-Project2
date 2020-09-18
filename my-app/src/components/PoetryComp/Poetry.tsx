import React, { useState, useEffect } from "react";

//Source: https://reactjs.org/docs/faq-ajax.html

interface IPoetryProps {}

const Poetry: React.SFC<IPoetryProps> = (props) => {
  const [contents, setContents] = useState([{ lines: [""] }]);
  const [error, setError] = useState(null);

  const dikt: any = "https://poetrydb.org/author,title/Taylor;Dance/lines.json";

  /* const poems: string[] = [
    "https://poetrydb.org/author,title/Taylor;Dance/lines.json",
    "https://poetrydb.org/author,title/Taylor;fret/lines.json",
    "https://poetrydb.org/author,title/Taylor;jesus/lines.json",
    "https://poetrydb.org/author,title/Taylor;star/lines.json",
    "https://poetrydb.org/author,title/Taylor;good-natured/lines.json",
  ];
 */
  useEffect(() => {
    fetch(dikt)
      .then((response) => response.json())
      .then(
        (data) => {
          setContents(data);
        },
        (error) => {
          //TODO: gjør noe med error
        }
      );
  }, dikt);

  if (error) {
    return <div>Error: </div>;
  } else {
    return (
      <div className="poetry">
        {contents[0].lines.map((line) => (
          <p>{line}</p>
        ))}
      </div>
    );
  }
};

export default Poetry;
