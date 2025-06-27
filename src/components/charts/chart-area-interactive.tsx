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
    "us-east-1": 222,
    "us-west-2": 150,
    "ap-north-1": 300,
  },
  {
    date: "2024-04-02",
    "us-east-1": 97,
    "us-west-2": 180,
    "ap-north-1": 200,
  },
  {
    date: "2024-04-03",
    "us-east-1": 167,
    "us-west-2": 120,
    "ap-north-1": 250,
  },
  {
    date: "2024-04-04",
    "us-east-1": 242,
    "us-west-2": 260,
    "ap-north-1": 250,
  },
  {
    date: "2024-04-05",
    "us-east-1": 373,
    "us-west-2": 290,
    "ap-north-1": 250,
  },
  {
    date: "2024-04-06",
    "us-east-1": 301,
    "us-west-2": 340,
    "ap-north-1": 250,
  },
  {
    date: "2024-04-07",
    "us-east-1": 245,
    "us-west-2": 180,
    "ap-north-1": 250,
  },
  {
    date: "2024-04-08",
    "us-east-1": 409,
    "us-west-2": 320,
    "ap-north-1": 250,
  },
  {
    date: "2024-04-09",
    "us-east-1": 59,
    "us-west-2": 110,
    "ap-north-1": 250,
  },
  {
    date: "2024-04-10",
    "us-east-1": 261,
    "us-west-2": 190,
    "ap-north-1": 250,
  },
  {
    date: "2024-04-11",
    "us-east-1": 327,
    "us-west-2": 350,
    "ap-north-1": 250,
  },
  {
    date: "2024-04-12",
    "us-east-1": 292,
    "us-west-2": 210,
    "ap-north-1": 250,
  },
  {
    date: "2024-04-13",
    "us-east-1": 342,
    "us-west-2": 380,
    "ap-north-1": 250,
  },
  {
    date: "2024-04-14",
    "us-east-1": 137,
    "us-west-2": 220,
    "ap-north-1": 250,
  },
  {
    date: "2024-04-15",
    "us-east-1": 120,
    "us-west-2": 170,
    "ap-north-1": 250,
  },
  {
    date: "2024-04-16",
    "us-east-1": 138,
    "us-west-2": 190,
    "ap-north-1": 250,
  },
  {
    date: "2024-04-17",
    "us-east-1": 446,
    "us-west-2": 360,
    "ap-north-1": 250,
  },
  {
    date: "2024-04-18",
    "us-east-1": 364,
    "us-west-2": 410,
    "ap-north-1": 250,
  },
  {
    date: "2024-04-19",
    "us-east-1": 243,
    "us-west-2": 180,
    "ap-north-1": 250,
  },
  {
    date: "2024-04-20",
    "us-east-1": 89,
    "us-west-2": 150,
    "ap-north-1": 250,
  },
  {
    date: "2024-04-21",
    "us-east-1": 137,
    "us-west-2": 200,
    "ap-north-1": 250,
  },
  {
    date: "2024-04-22",
    "us-east-1": 224,
    "us-west-2": 170,
    "ap-north-1": 250,
  },
  {
    date: "2024-04-23",
    "us-east-1": 138,
    "us-west-2": 230,
    "ap-north-1": 250,
  },
  {
    date: "2024-04-24",
    "us-east-1": 387,
    "us-west-2": 290,
    "ap-north-1": 250,
  },
  {
    date: "2024-04-25",
    "us-east-1": 215,
    "us-west-2": 250,
    "ap-north-1": 250,
  },
  {
    date: "2024-04-26",
    "us-east-1": 75,
    "us-west-2": 130,
    "ap-north-1": 250,
  },
  {
    date: "2024-04-27",
    "us-east-1": 383,
    "us-west-2": 420,
    "ap-north-1": 250,
  },
  {
    date: "2024-04-28",
    "us-east-1": 122,
    "us-west-2": 180,
    "ap-north-1": 250,
  },
  {
    date: "2024-04-29",
    "us-east-1": 315,
    "us-west-2": 240,
    "ap-north-1": 250,
  },
  {
    date: "2024-04-30",
    "us-east-1": 454,
    "us-west-2": 380,
    "ap-north-1": 250,
  },
  {
    date: "2024-05-01",
    "us-east-1": 165,
    "us-west-2": 220,
    "ap-north-1": 250,
  },
  {
    date: "2024-05-02",
    "us-east-1": 293,
    "us-west-2": 310,
    "ap-north-1": 250,
  },
  {
    date: "2024-05-03",
    "us-east-1": 247,
    "us-west-2": 190,
    "ap-north-1": 250,
  },
  {
    date: "2024-05-04",
    "us-east-1": 385,
    "us-west-2": 420,
    "ap-north-1": 250,
  },
  {
    date: "2024-05-05",
    "us-east-1": 481,
    "us-west-2": 390,
    "ap-north-1": 250,
  },
  {
    date: "2024-05-06",
    "us-east-1": 498,
    "us-west-2": 520,
    "ap-north-1": 250,
  },
  {
    date: "2024-05-07",
    "us-east-1": 388,
    "us-west-2": 300,
    "ap-north-1": 250,
  },
  {
    date: "2024-05-08",
    "us-east-1": 149,
    "us-west-2": 210,
    "ap-north-1": 250,
  },
  {
    date: "2024-05-09",
    "us-east-1": 227,
    "us-west-2": 180,
    "ap-north-1": 250,
  },
  {
    date: "2024-05-10",
    "us-east-1": 293,
    "us-west-2": 330,
    "ap-north-1": 250,
  },
  {
    date: "2024-05-11",
    "us-east-1": 335,
    "us-west-2": 270,
    "ap-north-1": 250,
  },
  {
    date: "2024-05-12",
    "us-east-1": 197,
    "us-west-2": 240,
    "ap-north-1": 250,
  },
  {
    date: "2024-05-13",
    "us-east-1": 197,
    "us-west-2": 160,
    "ap-north-1": 250,
  },
  {
    date: "2024-05-14",
    "us-east-1": 448,
    "us-west-2": 490,
    "ap-north-1": 250,
  },
  {
    date: "2024-05-15",
    "us-east-1": 473,
    "us-west-2": 380,
    "ap-north-1": 250,
  },
  {
    date: "2024-05-16",
    "us-east-1": 338,
    "us-west-2": 400,
    "ap-north-1": 250,
  },
  {
    date: "2024-05-17",
    "us-east-1": 499,
    "us-west-2": 420,
    "ap-north-1": 250,
  },
  {
    date: "2024-05-18",
    "us-east-1": 315,
    "us-west-2": 350,
    "ap-north-1": 250,
  },
  {
    date: "2024-05-19",
    "us-east-1": 235,
    "us-west-2": 180,
    "ap-north-1": 250,
  },
  {
    date: "2024-05-20",
    "us-east-1": 177,
    "us-west-2": 230,
    "ap-north-1": 250,
  },
  {
    date: "2024-05-21",
    "us-east-1": 82,
    "us-west-2": 140,
    "ap-north-1": 250,
  },
  {
    date: "2024-05-22",
    "us-east-1": 81,
    "us-west-2": 120,
    "ap-north-1": 250,
  },
  {
    date: "2024-05-23",
    "us-east-1": 252,
    "us-west-2": 290,
    "ap-north-1": 250,
  },
  {
    date: "2024-05-24",
    "us-east-1": 294,
    "us-west-2": 220,
    "ap-north-1": 250,
  },
  {
    date: "2024-05-25",
    "us-east-1": 201,
    "us-west-2": 250,
    "ap-north-1": 250,
  },
  {
    date: "2024-05-26",
    "us-east-1": 213,
    "us-west-2": 170,
    "ap-north-1": 250,
  },
  {
    date: "2024-05-27",
    "us-east-1": 420,
    "us-west-2": 460,
    "ap-north-1": 250,
  },
  {
    date: "2024-05-28",
    "us-east-1": 233,
    "us-west-2": 190,
    "ap-north-1": 250,
  },
  {
    date: "2024-05-29",
    "us-east-1": 78,
    "us-west-2": 130,
    "ap-north-1": 250,
  },
  {
    date: "2024-05-30",
    "us-east-1": 340,
    "us-west-2": 280,
    "ap-north-1": 250,
  },
  {
    date: "2024-05-31",
    "us-east-1": 178,
    "us-west-2": 230,
    "ap-north-1": 250,
  },
  {
    date: "2024-06-01",
    "us-east-1": 178,
    "us-west-2": 200,
    "ap-north-1": 250,
  },
  {
    date: "2024-06-02",
    "us-east-1": 470,
    "us-west-2": 410,
    "ap-north-1": 250,
  },
  {
    date: "2024-06-03",
    "us-east-1": 103,
    "us-west-2": 160,
    "ap-north-1": 250,
  },
  {
    date: "2024-06-04",
    "us-east-1": 439,
    "us-west-2": 380,
    "ap-north-1": 250,
  },
  {
    date: "2024-06-05",
    "us-east-1": 88,
    "us-west-2": 140,
    "ap-north-1": 250,
  },
  {
    date: "2024-06-06",
    "us-east-1": 294,
    "us-west-2": 250,
    "ap-north-1": 250,
  },
  {
    date: "2024-06-07",
    "us-east-1": 323,
    "us-west-2": 370,
    "ap-north-1": 250,
  },
  {
    date: "2024-06-08",
    "us-east-1": 385,
    "us-west-2": 320,
    "ap-north-1": 250,
  },
  {
    date: "2024-06-09",
    "us-east-1": 438,
    "us-west-2": 480,
    "ap-north-1": 250,
  },
  {
    date: "2024-06-10",
    "us-east-1": 155,
    "us-west-2": 200,
    "ap-north-1": 250,
  },
  {
    date: "2024-06-11",
    "us-east-1": 92,
    "us-west-2": 150,
    "ap-north-1": 250,
  },
  {
    date: "2024-06-12",
    "us-east-1": 492,
    "us-west-2": 420,
    "ap-north-1": 250,
  },
  {
    date: "2024-06-13",
    "us-east-1": 81,
    "us-west-2": 130,
    "ap-north-1": 250,
  },
  {
    date: "2024-06-14",
    "us-east-1": 426,
    "us-west-2": 380,
    "ap-north-1": 250,
  },
  {
    date: "2024-06-15",
    "us-east-1": 307,
    "us-west-2": 350,
    "ap-north-1": 250,
  },
  {
    date: "2024-06-16",
    "us-east-1": 371,
    "us-west-2": 310,
    "ap-north-1": 250,
  },
  {
    date: "2024-06-17",
    "us-east-1": 475,
    "us-west-2": 520,
    "ap-north-1": 250,
  },
  {
    date: "2024-06-18",
    "us-east-1": 107,
    "us-west-2": 170,
    "ap-north-1": 250,
  },
  {
    date: "2024-06-19",
    "us-east-1": 341,
    "us-west-2": 290,
    "ap-north-1": 250,
  },
  {
    date: "2024-06-20",
    "us-east-1": 408,
    "us-west-2": 450,
    "ap-north-1": 250,
  },
  {
    date: "2024-06-21",
    "us-east-1": 169,
    "us-west-2": 210,
    "ap-north-1": 250,
  },
  {
    date: "2024-06-22",
    "us-east-1": 317,
    "us-west-2": 270,
    "ap-north-1": 250,
  },
  {
    date: "2024-06-23",
    "us-east-1": 480,
    "us-west-2": 530,
    "ap-north-1": 250,
  },
  {
    date: "2024-06-24",
    "us-east-1": 132,
    "us-west-2": 180,
    "ap-north-1": 250,
  },
  {
    date: "2024-06-25",
    "us-east-1": 141,
    "us-west-2": 190,
    "ap-north-1": 250,
  },
  {
    date: "2024-06-26",
    "us-east-1": 434,
    "us-west-2": 380,
    "ap-north-1": 250,
  },
  {
    date: "2024-06-27",
    "us-east-1": 448,
    "us-west-2": 490,
    "ap-north-1": 250,
  },
  {
    date: "2024-06-28",
    "us-east-1": 149,
    "us-west-2": 200,
    "ap-north-1": 250,
  },
  {
    date: "2024-06-29",
    "us-east-1": 103,
    "us-west-2": 160,
    "ap-north-1": 250,
  },
  {
    date: "2024-06-30",
    "us-east-1": 446,
    "us-west-2": 400,
    "ap-north-1": 250,
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
          Region-wise accumulated traffic (in MB)
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
              dataKey="us-east-1"
              type="natural"
              fill="url(#fillMobile)"
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="us-west-2"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--color-desktop)"
              stackId="a"
            />
            <Area
              dataKey="ap-north-1"
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
