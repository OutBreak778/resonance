"use client"

import { DashboardHeader } from "@/app/features/dashboard/components/DashboardHeader"
import { HeroPattern } from "@/components/HeroPattern"
import { PageHeader } from "@/components/PageHeader"
import { TextInputPanel } from "@/app/features/dashboard/components/TextInputPanel"
import { QuickActionsPanel } from "../features/dashboard/components/QuickActionsPanel"

const Dashboard = () => {
  return (
    <div className="relative">
      <PageHeader title="Dashboard" className="lg:hidden" />
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
