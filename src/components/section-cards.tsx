"use client";
import {
  IconTrendingDown,
  IconTrendingUp,
} from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function SectionCards() {
  return (
    <div className="container-padding">
      <div className="mb-2 lg:w-3/4">
        <h3>Monthly overview:</h3>
        <p className="subtitle">
          Key metrics and performance indicators for the
          current month.
        </p>
      </div>
      <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
        <Card className="@container/card">
          <CardHeader>
            <CardDescription>AWS costs</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-2xl">
              $12,250.00
            </CardTitle>
            <CardAction>
              <Badge variant="green-signal">
                <IconTrendingUp />
                +12.5%
              </Badge>
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
              Trending up this month{" "}
              <IconTrendingUp className="size-4" />
            </div>
            <div className="text-muted-foreground">
              3 days left to next billing cycle
            </div>
          </CardFooter>
        </Card>
        {/* <Card className="@container/card">
          <CardHeader>
            <CardDescription>New Customers</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-2xl">
              1,234
            </CardTitle>
            <CardAction>
              <Badge variant="red-signal">
                <IconTrendingDown />
                -20%
              </Badge>
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
              Down 20% this period{" "}
              <IconTrendingDown className="size-4" />
            </div>
            <div className="text-muted-foreground">
              Acquisition needs attention
            </div>
          </CardFooter>
        </Card> */}
        <Card className="@container/card">
          <CardHeader>
            <CardDescription>
              Overall bandwidth
            </CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-2xl">
              2.5 TB
            </CardTitle>
            <CardAction>
              {/* <Badge variant="yellow-signal">
                <IconTrendingUp />
                No change
              </Badge> */}
              <Badge variant="red-signal">
                <IconTrendingDown />
                -20%
              </Badge>
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
              Down 20% this period{" "}
              <IconTrendingDown className="size-4" />
            </div>
            <div className="text-muted-foreground">
              Needs investigation on usage
            </div>
          </CardFooter>
        </Card>
        <Card className="@container/card">
          <CardHeader>
            <CardDescription>Resources</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-2xl">
              128
            </CardTitle>
            <CardAction>
              <Badge variant="green-signal">
                <IconTrendingUp />
                +4.5%
              </Badge>
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
              More resources launched{" "}
              <IconTrendingUp className="size-4" />
            </div>
            <div className="text-muted-foreground">
              Exceeding resource targets
            </div>
          </CardFooter>
        </Card>
        <Card className="@container/card">
          <CardHeader>
            <CardDescription>Total Errors</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-2xl">
              1282
            </CardTitle>
            <CardAction>
              <Badge variant="red-signal">
                <IconTrendingUp />
                +4.5%
              </Badge>
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
              Error rate increased{" "}
              <IconTrendingUp className="size-4" />
            </div>
            <div className="text-muted-foreground">
              Needs immediate attention
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
