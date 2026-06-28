"use client";
export default function AuthLayout({
  left,
  right,
}) {
  return (
    <section className="min-h-screen bg-gray-50">

      {/* <div className="hidden lg:block">
        {left}
      </div> */}

      <div className="flex items-center justify-center p-6 bg-gray-50">
        <div className="w-full max-w-md">
          {right}
        </div>
      </div>

    </section>
  );
}