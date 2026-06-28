import BookingButton from "@/components/booking/BookingButton";

export default async function ClassDetailsPage({
  params,
}) {
  const { id } = params;

  const classData = {
    id,
    name: "Fitness Training",
    trainer: "John Smith",
    seats: 20,
    price: 50,
    duration: "60 Minutes",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    description:
      "Professional fitness training class.",
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">

      <img
        src={classData.image}
        alt={classData.name}
        className="w-full h-[400px] object-cover rounded-2xl"
      />

      <div className="mt-8">

        <h1 className="text-4xl font-bold">
          {classData.name}
        </h1>

        <p className="mt-4 text-gray-600">
          {classData.description}
        </p>

        <div className="grid md:grid-cols-4 gap-4 mt-8">

          <div className="p-4 border rounded-xl">
            Trainer: {classData.trainer}
          </div>

          <div className="p-4 border rounded-xl">
            Seats: {classData.seats}
          </div>

          <div className="p-4 border rounded-xl">
            Duration: {classData.duration}
          </div>

          <div className="p-4 border rounded-xl">
            ${classData.price}
          </div>

        </div>

        <div className="mt-8">
          <BookingButton
            classId={classData.id}
          />
        </div>

      </div>

    </div>
  );
}