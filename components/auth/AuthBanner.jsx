import Image from "next/image";

export default function AuthBanner() {
  return (
    <div className="relative h-screen">
      <Image
        src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=1600"
        alt="Blood Donation"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-red-950/70" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center px-10">
        <div className="max-w-xl text-white">
          <span className="inline-block rounded-full bg-red-600 px-4 py-1 text-sm font-medium">
            ❤️ Save Lives Every Day
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight">
            Welcome to <span className="text-red-400">Blood Connect</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-200">
            Connect blood donors with patients instantly. Register as a donor,
            request blood in emergencies, and help save lives through our
            trusted blood donation community.
          </p>

          <div className="mt-8 flex gap-8 text-sm text-gray-200">
            <div>
              <h3 className="text-2xl font-bold text-white">10K+</h3>
              <p>Registered Donors</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">5K+</h3>
              <p>Successful Donations</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">24/7</h3>
              <p>Emergency Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}