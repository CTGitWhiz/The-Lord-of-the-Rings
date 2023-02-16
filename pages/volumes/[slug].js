import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data.js";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volume = volumes.find((volume) => volume.slug === slug);
  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const nextVolume = volumes[volumeIndex + 1];
  const previousVolume = volumes[volumeIndex - 1];

  if (!volume) {
    return null;
  }

  const { title, description, cover, books } = volume;

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map(({ ordinal, title }) => (
          <li key={title}>
            {ordinal}: <strong>{title}</strong>
          </li>
        ))}
      </ul>
      <Image
        src={cover}
        alt={`Cover image of ${title}`}
        width={140}
        height={230}
      />
      {volumeIndex < volumes.length - 1 && (
        <button type="button" onClick={() => router.push(`${nextVolume.slug}`)}>
          Next
        </button>
      )}
      {volumeIndex > 0 && (
        <button
          type="button"
          onClick={() => router.push(`${previousVolume.slug}`)}
        >
          Previous
        </button>
      )}
    </>
  );
}
