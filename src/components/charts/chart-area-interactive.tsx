"use client";

import * as React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
} from "recharts";

import { useIsMobile } from "@/hooks/use-mobile";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group";

export const description = "An interactive area chart";

const chartData = [
  {
    date: "2024-04-01",
    "server-1": 222,
    "server-2": 150,
    "server-3": 300,
  },
  {
    date: "2024-04-02",
    "server-1": 97,
    "server-2": 180,
    "server-3": 200,
  },
  {
    date: "2024-04-03",
    "server-1": 167,
    "server-2": 120,
    "server-3": 250,
  },
  {
    date: "2024-04-04",
    "server-1": 242,
    "server-2": 260,
    "server-3": 250,
  },
  {
    date: "2024-04-05",
    "server-1": 373,
    "server-2": 290,
    "server-3": 250,
  },
  {
    date: "2024-04-06",
    "server-1": 301,
    "server-2": 340,
    "server-3": 250,
  },
  {
    date: "2024-04-07",
    "server-1": 245,
    "server-2": 180,
    "server-3": 250,
  },
  {
    date: "2024-04-08",
    "server-1": 409,
    "server-2": 320,
    "server-3": 250,
  },
  {
    date: "2024-04-09",
    "server-1": 59,
    "server-2": 110,
    "server-3": 250,
  },
  {
    date: "2024-04-10",
    "server-1": 261,
    "server-2": 190,
    "server-3": 250,
  },
  {
    date: "2024-04-11",
    "server-1": 327,
    "server-2": 350,
    "server-3": 250,
  },
  {
    date: "2024-04-12",
    "server-1": 292,
    "server-2": 210,
    "server-3": 250,
  },
  {
    date: "2024-04-13",
    "server-1": 342,
    "server-2": 380,
    "server-3": 250,
  },
  {
    date: "2024-04-14",
    "server-1": 137,
    "server-2": 220,
    "server-3": 250,
  },
  {
    date: "2024-04-15",
    "server-1": 120,
    "server-2": 170,
    "server-3": 250,
  },
  {
    date: "2024-04-16",
    "server-1": 138,
    "server-2": 190,
    "server-3": 250,
  },
  {
    date: "2024-04-17",
    "server-1": 446,
    "server-2": 360,
    "server-3": 250,
  },
  {
    date: "2024-04-18",
    "server-1": 364,
    "server-2": 410,
    "server-3": 250,
  },
  {
    date: "2024-04-19",
    "server-1": 243,
    "server-2": 180,
    "server-3": 250,
  },
  {
    date: "2024-04-20",
    "server-1": 89,
    "server-2": 150,
    "server-3": 250,
  },
  {
    date: "2024-04-21",
    "server-1": 137,
    "server-2": 200,
    "server-3": 250,
  },
  {
    date: "2024-04-22",
    "server-1": 224,
    "server-2": 170,
    "server-3": 250,
  },
  {
    date: "2024-04-23",
    "server-1": 138,
    "server-2": 230,
    "server-3": 250,
  },
  {
    date: "2024-04-24",
    "server-1": 387,
    "server-2": 290,
    "server-3": 250,
  },
  {
    date: "2024-04-25",
    "server-1": 215,
    "server-2": 250,
    "server-3": 250,
  },
  {
    date: "2024-04-26",
    "server-1": 75,
    "server-2": 130,
    "server-3": 250,
  },
  {
    date: "2024-04-27",
    "server-1": 383,
    "server-2": 420,
    "server-3": 250,
  },
  {
    date: "2024-04-28",
    "server-1": 122,
    "server-2": 180,
    "server-3": 250,
  },
  {
    date: "2024-04-29",
    "server-1": 315,
    "server-2": 240,
    "server-3": 250,
  },
  {
    date: "2024-04-30",
    "server-1": 454,
    "server-2": 380,
    "server-3": 250,
  },
  {
    date: "2024-05-01",
    "server-1": 165,
    "server-2": 220,
    "server-3": 250,
  },
  {
    date: "2024-05-02",
    "server-1": 293,
    "server-2": 310,
    "server-3": 250,
  },
  {
    date: "2024-05-03",
    "server-1": 247,
    "server-2": 190,
    "server-3": 250,
  },
  {
    date: "2024-05-04",
    "server-1": 385,
    "server-2": 420,
    "server-3": 250,
  },
  {
    date: "2024-05-05",
    "server-1": 481,
    "server-2": 390,
    "server-3": 250,
  },
  {
    date: "2024-05-06",
    "server-1": 498,
    "server-2": 520,
    "server-3": 250,
  },
  {
    date: "2024-05-07",
    "server-1": 388,
    "server-2": 300,
    "server-3": 250,
  },
  {
    date: "2024-05-08",
    "server-1": 149,
    "server-2": 210,
    "server-3": 250,
  },
  {
    date: "2024-05-09",
    "server-1": 227,
    "server-2": 180,
    "server-3": 250,
  },
  {
    date: "2024-05-10",
    "server-1": 293,
    "server-2": 330,
    "server-3": 250,
  },
  {
    date: "2024-05-11",
    "server-1": 335,
    "server-2": 270,
    "server-3": 250,
  },
  {
    date: "2024-05-12",
    "server-1": 197,
    "server-2": 240,
    "server-3": 250,
  },
  {
    date: "2024-05-13",
    "server-1": 197,
    "server-2": 160,
    "server-3": 250,
  },
  {
    date: "2024-05-14",
    "server-1": 448,
    "server-2": 490,
    "server-3": 250,
  },
  {
    date: "2024-05-15",
    "server-1": 473,
    "server-2": 380,
    "server-3": 250,
  },
  {
    date: "2024-05-16",
    "server-1": 338,
    "server-2": 400,
    "server-3": 250,
  },
  {
    date: "2024-05-17",
    "server-1": 499,
    "server-2": 420,
    "server-3": 250,
  },
  {
    date: "2024-05-18",
    "server-1": 315,
    "server-2": 350,
    "server-3": 250,
  },
  {
    date: "2024-05-19",
    "server-1": 235,
    "server-2": 180,
    "server-3": 250,
  },
  {
    date: "2024-05-20",
    "server-1": 177,
    "server-2": 230,
    "server-3": 250,
  },
  {
    date: "2024-05-21",
    "server-1": 82,
    "server-2": 140,
    "server-3": 250,
  },
  {
    date: "2024-05-22",
    "server-1": 81,
    "server-2": 120,
    "server-3": 250,
  },
  {
    date: "2024-05-23",
    "server-1": 252,
    "server-2": 290,
    "server-3": 250,
  },
  {
    date: "2024-05-24",
    "server-1": 294,
    "server-2": 220,
    "server-3": 250,
  },
  {
    date: "2024-05-25",
    "server-1": 201,
    "server-2": 250,
    "server-3": 250,
  },
  {
    date: "2024-05-26",
    "server-1": 213,
    "server-2": 170,
    "server-3": 250,
  },
  {
    date: "2024-05-27",
    "server-1": 420,
    "server-2": 460,
    "server-3": 250,
  },
  {
    date: "2024-05-28",
    "server-1": 233,
    "server-2": 190,
    "server-3": 250,
  },
  {
    date: "2024-05-29",
    "server-1": 78,
    "server-2": 130,
    "server-3": 250,
  },
  {
    date: "2024-05-30",
    "server-1": 340,
    "server-2": 280,
    "server-3": 250,
  },
  {
    date: "2024-05-31",
    "server-1": 178,
    "server-2": 230,
    "server-3": 250,
  },
  {
    date: "2024-06-01",
    "server-1": 178,
    "server-2": 200,
    "server-3": 250,
  },
  {
    date: "2024-06-02",
    "server-1": 470,
    "server-2": 410,
    "server-3": 250,
  },
  {
    date: "2024-06-03",
    "server-1": 103,
    "server-2": 160,
    "server-3": 250,
  },
  {
    date: "2024-06-04",
    "server-1": 439,
    "server-2": 380,
    "server-3": 250,
  },
  {
    date: "2024-06-05",
    "server-1": 88,
    "server-2": 140,
    "server-3": 250,
  },
  {
    date: "2024-06-06",
    "server-1": 294,
    "server-2": 250,
    "server-3": 250,
  },
  {
    date: "2024-06-07",
    "server-1": 323,
    "server-2": 370,
    "server-3": 250,
  },
  {
    date: "2024-06-08",
    "server-1": 385,
    "server-2": 320,
    "server-3": 250,
  },
  {
    date: "2024-06-09",
    "server-1": 438,
    "server-2": 480,
    "server-3": 250,
  },
  {
    date: "2024-06-10",
    "server-1": 155,
    "server-2": 200,
    "server-3": 250,
  },
  {
    date: "2024-06-11",
    "server-1": 92,
    "server-2": 150,
    "server-3": 250,
  },
  {
    date: "2024-06-12",
    "server-1": 492,
    "server-2": 420,
    "server-3": 250,
  },
  {
    date: "2024-06-13",
    "server-1": 81,
    "server-2": 130,
    "server-3": 250,
  },
  {
    date: "2024-06-14",
    "server-1": 426,
    "server-2": 380,
    "server-3": 250,
  },
  {
    date: "2024-06-15",
    "server-1": 307,
    "server-2": 350,
    "server-3": 250,
  },
  {
    date: "2024-06-16",
    "server-1": 371,
    "server-2": 310,
    "server-3": 250,
  },
  {
    date: "2024-06-17",
    "server-1": 475,
    "server-2": 520,
    "server-3": 250,
  },
  {
    date: "2024-06-18",
    "server-1": 107,
    "server-2": 170,
    "server-3": 250,
  },
  {
    date: "2024-06-19",
    "server-1": 341,
    "server-2": 290,
    "server-3": 250,
  },
  {
    date: "2024-06-20",
    "server-1": 408,
    "server-2": 450,
    "server-3": 250,
  },
  {
    date: "2024-06-21",
    "server-1": 169,
    "server-2": 210,
    "server-3": 250,
  },
  {
    date: "2024-06-22",
    "server-1": 317,
    "server-2": 270,
    "server-3": 250,
  },
  {
    date: "2024-06-23",
    "server-1": 480,
    "server-2": 530,
    "server-3": 250,
  },
  {
    date: "2024-06-24",
    "server-1": 132,
    "server-2": 180,
    "server-3": 250,
  },
  {
    date: "2024-06-25",
    "server-1": 141,
    "server-2": 190,
    "server-3": 250,
  },
  {
    date: "2024-06-26",
    "server-1": 434,
    "server-2": 380,
    "server-3": 250,
  },
  {
    date: "2024-06-27",
    "server-1": 448,
    "server-2": 490,
    "server-3": 250,
  },
  {
    date: "2024-06-28",
    "server-1": 149,
    "server-2": 200,
    "server-3": 250,
  },
  {
    date: "2024-06-29",
    "server-1": 103,
    "server-2": 160,
    "server-3": 250,
  },
  {
    date: "2024-06-30",
    "server-1": 446,
    "server-2": 400,
    "server-3": 250,
  },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  desktop: {
    label: "Desktop",
    color: "var(--primary)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--primary)",
  },
} satisfies ChartConfig;

export function ChartAreaInteractive() {
  const isMobile = useIsMobile();
  const [timeRange, setTimeRange] = React.useState("90d");

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d");
    }
  }, [isMobile]);

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>
          Region-wise accumulated Server Requests
        </CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">
            Total for the last{" "}
            {timeRange === "90d"
              ? "3 months"
              : timeRange === "30d"
              ? "30 days"
              : "7 days"}
          </span>
          <span className="@[540px]/card:hidden">
            Last 3 months
          </span>
        </CardDescription>
        <CardAction>
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex"
          >
            <ToggleGroupItem value="90d">
              Last 3 months
            </ToggleGroupItem>
            <ToggleGroupItem value="30d">
              Last 30 days
            </ToggleGroupItem>
            <ToggleGroupItem value="7d">
              Last 7 days
            </ToggleGroupItem>
          </ToggleGroup>
          <Select
            value={timeRange}
            onValueChange={setTimeRange}
          >
            <SelectTrigger
              className="flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden"
              size="sm"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem
                value="90d"
                className="rounded-lg"
              >
                Last 3 months
              </SelectItem>
              <SelectItem
                value="30d"
                className="rounded-lg"
              >
                Last 30 days
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Last 7 days
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient
                id="fillDesktop"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={1.0}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient
                id="fillMobile"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              defaultIndex={isMobile ? -1 : 10}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(
                      value
                    ).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="server-1"
              type="natural"
              fill="url(#fillMobile)"
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="server-2"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--color-desktop)"
              stackId="a"
            />
            <Area
              dataKey="server-3"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--color-desktop)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
