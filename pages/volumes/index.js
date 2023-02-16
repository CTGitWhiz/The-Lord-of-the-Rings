import Link from "next/link";
import { introduction } from "../../lib/data";
import { volumes } from "../../lib/data";
import { useRouter } from "next/router";

function getRandomElement(array) {
  return volumes[Math.floor(Math.random() * volumes.length)];
}

export default function Volumes() {
  const router = useRouter();

  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <button
        type="button"
        onClick={() => {
          const randomVolume = getRandomElement(volumes);
          router.push(`/volumes/${randomVolume.slug}`);
        }}
      >
        Random
      </button>
      <ul>
        {volumes.map((volume) => (
          <>
            <li key={volume.slug}>
              <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
            </li>
          </>
        ))}
      </ul>
    </>
  );
}
