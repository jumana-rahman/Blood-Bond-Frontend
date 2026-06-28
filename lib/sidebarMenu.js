import {
  LayoutDashboard,
  Users,
  Dumbbell,
  Calendar,
  CreditCard,
  User,
  Settings,
} from "lucide-react";

export const sidebarMenus = {
  admin: [
    {
      label: "Dashboard",
      href: "/dashboard/admin",
      icon: LayoutDashboard,
    },
    {
      label: "All-users",
      href: "/dashboard/admin/all-users",
      icon: Users,
    },   {
      label: "All-Blood-Donation-Request",
      href: "/dashboard/admin/all-blood-donation-request",
      icon: Dumbbell,
    },
   

  ],

  volunteer: [
    {
      label: "Dashboard",
      href: "/dashboard/volunteer",
      icon: LayoutDashboard,
    },
    {
      label: "All Blood Donation Request",
      href: "/dashboard/volunteer/all-blood-donation-request",
      icon: Dumbbell,
    },
    

  ],

  donor: [
    {
      label: "Dashboard",
      href: "/dashboard/donor",
      icon: LayoutDashboard,
    },
    {
      label: "Create Donation Request",
      href: "/dashboard/donor/create-donation-request",
      icon: LayoutDashboard,
    },
    {
      label: "My Donation Requests",
      href: "/dashboard/donor/my-donation-requests",
      icon: LayoutDashboard,
    },

  
  


  ],
};