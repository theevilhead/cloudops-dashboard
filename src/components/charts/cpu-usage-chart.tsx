"use client";

import { Activity, TrendingUp } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// CPU Usage chart data in 5 minutes intervals fo the last hour
const chartData = [
  { time: "13:10", usage: "32.0" },
  { time: "13:15", usage: "25.0" },
  { time: "13:20", usage: "40.0" },
  { time: "13:25", usage: "28.0" },
  { time: "13:30", usage: "35.0" },
  { time: "13:35", usage: "20.0" },
  { time: "13:40", usage: "18.0" },
];

const chartConfig = {
  desktop: {
    label: "desktop",
    color: "var(--chart-1)",
    icon: Activity,
  },
} satisfies ChartConfig;

export function CPUUsageChart() {
  return (
    <div>
      <h3 className="mb-5 text-sm">CPU Usage (%)</h3>
      <ChartContainer config={chartConfig} className="py-2">
        <AreaChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="time"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Area
            dataKey="usage"
            type="step"
            fill="var(--color-desktop)"
            fillOpacity={0.4}
            stroke="var(--color-desktop)"
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
}
