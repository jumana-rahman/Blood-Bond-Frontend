import Image from "next/image";

export default function GalleryCard({ item }) {
  return (
    <div className="overflow-hidden rounded-2xl group">
      <Image
        src={item.image}
        alt="Transformation"
        width={500}
        height={500}
        className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
      />
    </div>
  );
}