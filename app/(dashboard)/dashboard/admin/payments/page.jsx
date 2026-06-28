import PaymentHistoryTable from "@/components/payment/PaymentHistoryTable";
import StatsCard from "@/components/dashboard/StatsCard";

export default function AdminPaymentsPage() {
  return (
    <div className="space-y-8">

      <h1 className="text-3xl font-bold">
        Payments Overview
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <StatsCard
          title="Total Revenue"
          value="$12,500"
        />

        <StatsCard
          title="Today's Revenue"
          value="$850"
        />

        <StatsCard
          title="Transactions"
          value="350"
        />

      </div>

      <PaymentHistoryTable />

    </div>
  );
}