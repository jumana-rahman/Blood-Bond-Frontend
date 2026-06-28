import Image from "next/image";
import { instagramImages } from "@/data/instagram";

export default function InstagramGallery() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-14">
          Follow Us On Instagram
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

          {instagramImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl"
            >
              <Image
                src={image}
                alt="Instagram"
                width={300}
                height={300}
                className="w-full h-48 object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}