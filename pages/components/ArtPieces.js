import Image from "next/image";

export default function ArtPieces({ data }) {
  console.log(data);
  if (data) {
    return (
      <ul>
        {data.map(({ slug, name, artist, imageSource }) => (
          <li key={slug}>
            <Image
              src={imageSource}
              alt={`${name} by ${artist}`}
              width={500}
              height={500}
            ></Image>
            <h2>
              {name}: {artist}
            </h2>
          </li>
        ))}
      </ul>
    );
  }
  return <h1>Loadin...</h1>;
}