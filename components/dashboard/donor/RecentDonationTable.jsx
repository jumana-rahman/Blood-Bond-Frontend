"use client";

import Link from "next/link";
import {
  Eye,
  Pencil,
  Trash2,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { useState } from "react";

export default function RecentDonationTable({
  requests,
}) {


  if (!requests?.length) {
    return null;
  }
const [open, setOpen] =
  useState(false);

const [selectedId, setSelectedId] =
  useState(null);
  const getStatusBadge = (status) => {
    switch (status) {
      case "pending":
        return (
          <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
            Pending
          </span>
        );

      case "inprogress":
        return (
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
            In Progress
          </span>
        );

      case "done":
        return (
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
            Done
          </span>
        );

      case "canceled":
        return (
          <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
            Cancelled
          </span>
        );

      default:
        return null;
    }
  };

  return (
    <div className="rounded-2xl bg-white shadow">

      <div className="flex items-center justify-between border-b p-6">

        <h2 className="text-2xl font-bold">
          Recent Donation Requests
        </h2>

      </div>

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="px-5 py-3 text-left">
                Recipient
              </th>

              <th className="px-5 py-3 text-left">
                Location
              </th>

              <th className="px-5 py-3 text-left">
                Date
              </th>

              <th className="px-5 py-3 text-left">
                Time
              </th>

              <th className="px-5 py-3 text-left">
                Blood
              </th>

              <th className="px-5 py-3 text-left">
                Status
              </th>

              <th className="px-5 py-3 text-left">
                Donor
              </th>

              <th className="px-5 py-3 text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {requests.map((request) => (
              <tr
                key={request._id}
                className="border-b hover:bg-gray-50"
              >
                <td className="px-5 py-4 font-medium">
                  {request.recipientName}
                </td>

                <td className="px-5 py-4">
                  {request.recipientDistrict}
                  <br />
                  <span className="text-sm text-gray-500">
                    {request.recipientUpazila}
                  </span>
                </td>

                <td className="px-5 py-4">
                  {request.donationDate}
                </td>

                <td className="px-5 py-4">
                  {request.donationTime}
                </td>

                <td className="px-5 py-4 font-bold text-red-600">
                  {request.bloodGroup}
                </td>

                <td className="px-5 py-4">
                  {getStatusBadge(
                    request.status
                  )}
                </td>

                <td className="px-5 py-4">

                  {request.status ===
                  "inprogress" ? (
                    <>
                      <p>
                        {
                          request.donorName
                        }
                      </p>

                      <p className="text-sm text-gray-500">
                        {
                          request.donorEmail
                        }
                      </p>
                    </>
                  ) : (
                    <span className="text-gray-400">
                      —
                    </span>
                  )}

                </td>

                <td className="px-5 py-4">

                  <div className="flex flex-wrap items-center justify-center gap-2">

                    <Link
                      href={`/dashboard/donor/donation-requests/${request._id}`}
                      className="rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600"
                    >
                      <Eye size={16} />
                    </Link>

                    <Link
                      href={`/dashboard/donor/edit-donation-request/${request._id}`}
                      className="rounded-lg bg-green-500 p-2 text-white hover:bg-green-600"
                    >
                      <Pencil size={16} />
                    </Link>

                    <button
                      className="rounded-lg bg-red-500 p-2 text-white hover:bg-red-600"
                    >
                      <Trash2 size={16} />
                    </button>

                    {request.status ===
                      "inprogress" && (
                      <>
                        <button
                          className="rounded-lg bg-emerald-500 p-2 text-white hover:bg-emerald-600"
                        >
                          <CheckCircle
                            size={16}
                          />
                        </button>

                        <button
                          className="rounded-lg bg-orange-500 p-2 text-white hover:bg-orange-600"
                        >
                          <XCircle
                            size={16}
                          />
                        </button>
                      </>
                    )}

                  </div>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

      <div className="border-t p-6 text-center">

        <Link
          href="/dashboard/donor/my-donation-requests"
          className="inline-flex rounded-xl bg-red-600 px-6 py-3 font-medium text-white transition hover:bg-red-700"
        >
          View My All Requests
        </Link>

      </div>

    </div>
  );
}