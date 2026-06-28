import WelcomeCard from "@/components/dashboard/donor/WelcomeCard";
import RecentDonationTable from "@/components/dashboard/donor/RecentDonationTable";

const recentRequests = [
  {
    _id: "1",
    recipientName: "Rahim Uddin",
    recipientDistrict: "Dhaka",
    recipientUpazila: "Savar",
    donationDate: "2026-06-28",
    donationTime: "10:00 AM",
    bloodGroup: "A+",
    status: "pending",
    donorName: "",
    donorEmail: "",
  },
  {
    _id: "2",
    recipientName: "Karim Hasan",
    recipientDistrict: "Gazipur",
    recipientUpazila: "Sreepur",
    donationDate: "2026-07-01",
    donationTime: "02:00 PM",
    bloodGroup: "O+",
    status: "inprogress",
    donorName: "Shahid",
    donorEmail: "shahid@gmail.com",
  },
  {
    _id: "3",
    recipientName: "Nayeem",
    recipientDistrict: "Khulna",
    recipientUpazila: "Sonadanga",
    donationDate: "2026-07-05",
    donationTime: "11:30 AM",
    bloodGroup: "B-",
    status: "done",
    donorName: "Shahid",
    donorEmail: "shahid@gmail.com",
  },
];

export default function DonorDashboardPage() {
  const user = {
    name: "Shahid",
  };

  return (
    <div className="space-y-8">

      <WelcomeCard user={user} />

      <RecentDonationTable
        requests={recentRequests}
      />

    </div>
  );
}