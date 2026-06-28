import StatsCard from "@/components/dashboard/StatsCard";
import DashboardSection from "@/components/dashboard/DashboardSection";
import UsersTable from "@/components/dashboard/UsersTable";
import TrainersTable from "@/components/dashboard/TrainersTable";
import ActivityList from "@/components/dashboard/ActivityList";

export default function AdminDashboard() {
  return (
    <div className="space-y-8">

      <h1 className="text-3xl font-bold">
        Admin Dashboard
      </h1>

      {/* Stats */}

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        <StatsCard
          title="Total Users"
          value="1,250"
        />

        <StatsCard
          title="Total Trainers"
          value="52"
        />

        <StatsCard
          title="Classes"
          value="85"
        />

        <StatsCard
          title="Revenue"
          value="$12,500"
        />

      </div>

      {/* Users */}

      <DashboardSection
        title="Users Management"
      >
        <UsersTable />
      </DashboardSection>

      {/* Trainers */}

      <DashboardSection
        title="Trainer Requests"
      >
        <TrainersTable />
      </DashboardSection>

      {/* Activity */}

      <DashboardSection
        title="Recent Activities"
      >
        <ActivityList />
      </DashboardSection>

    </div>
  );
}