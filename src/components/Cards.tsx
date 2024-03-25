import React from "react";

import "../css/Cards.css";

type CardType = {
  name: string;
  date?: string;
  image: string;
  description: string;
  url: string;
}

export default function Cards(props: { data: CardType[], id: string }) { 
  const { data, id } = props;
  return (
    <div className="cards" id={id}>
      <h2>{getTitle(id)}</h2>
      {data.map(data => (
          <Card
            key={data.name}
            name={data.name}
            description={data.description}
            image={data.image}
            url={data.url}
            date={data.date}
          />
        ))}
    </div>
  );
}

export function Card(data: CardType) {
  return (
    <div className="card">
      <div className="imgContainer">
        <img src={loadImage(data.image)} alt={data.name} />
      </div>
      <div className="textContainer">
        <a key={data.name} href={data.url} target="_blank" rel="noopener noreferrer">
          <h3>{data.name}</h3>
        </a>
        {(data.date) ? <em>{data.date}</em> : null}
        <p>{data.description}</p>
      </div>
    </div>
  );
}

export function loadImage(path: string, folder: string = "img") {
  if (path.startsWith("http")) return path;
  if (path.includes(".svg")) folder = "svg";
  return `${process.env.PUBLIC_URL}${folder}/${path}`;
}

export function getTitle(name: string) {
  return name.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^([a-z])/, (_: string, first: string) => first.toUpperCase())
}

export type { CardType };