import {
  FaDumbbell,
  FaUserFriends,
  FaHeartbeat,
  FaClock,
  FaMedal,
  FaAppleAlt,
} from "react-icons/fa";

const icons = {
  dumbbell: FaDumbbell,
  users: FaUserFriends,
  heart: FaHeartbeat,
  clock: FaClock,
  medal: FaMedal,
  apple: FaAppleAlt,
};

export default function FeatureCard({
  icon,
  title,
  description,
}) {
  const Icon = icons[icon];

  return (
    <div className="group rounded-2xl border bg-white p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition">

        <Icon className="text-3xl text-blue-600 group-hover:text-white" />

      </div>

      <h3 className="text-2xl font-bold mt-6">
        {title}
      </h3>

      <p className="text-gray-500 mt-3 leading-7">
        {description}
      </p>

    </div>
  );
}