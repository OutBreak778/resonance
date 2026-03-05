"use client"

import { DashboardHeader } from "@/app/features/dashboard/components/DashboardHeader"
import { HeroPattern } from "@/components/HeroPattern"
import { TextInputPanel } from "@/app/features/dashboard/components/TextInputPanel"
import { QuickActionsPanel } from "../../features/dashboard/components/QuickActionsPanel"

const Dashboard = () => {
  return (
    <div className="relative overflow-y-scroll no-scrollbar">
      <HeroPattern />
      <div className="relative space-y-8 p-4 lg:p-16">
        <DashboardHeader />
        <TextInputPanel />
        <QuickActionsPanel />
      </div>
    </div>
  )
}

export default Dashboard
