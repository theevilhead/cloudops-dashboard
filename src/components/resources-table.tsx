"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import {
  ArrowUpDown,
  ChevronDown,
  MoreHorizontal,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RESOURCES } from "@/data/resources";
import { toast } from "sonner";
import { Badge } from "./ui/badge";
import { ResourceQuickView } from "./resource-quick-view";
import Fuse from "fuse.js";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "./ui/card";

export const columns: ColumnDef<(typeof RESOURCES)[0]>[] = [
  {
    id: "name",
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return (
        <div className="capitalize">
          <ResourceQuickView resource={row.original}>
            {row.getValue("name")}
          </ResourceQuickView>
        </div>
      );
    },
  },
  {
    id: "region",
    accessorKey: "region",
    header: "Region",
    cell: ({ row }) => (
      <div className="uppercase">
        {row.getValue("region")}
      </div>
    ),
  },
  {
    id: "status",
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() =>
            column.toggleSorting(
              column.getIsSorted() === "asc"
            )
          }
        >
          Status
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">
        <Badge
          variant={
            row.getValue("status") === "running"
              ? "green-signal"
              : row.getValue("status") === "stopped"
              ? "destructive"
              : row.getValue("status") === "overloaded"
              ? "yellow-signal"
              : "default"
          }
        >
          {row.getValue("status")}
        </Badge>
      </div>
    ),
  },
  {
    id: "region",
    accessorKey: "region",
    header: () => <div className="text-right">Region</div>,
    cell: ({ row }) => {
      return (
        <div className="text-right font-medium">
          {row.getValue("region")}
        </div>
      );
    },
  },
  {
    id: "tags",
    accessorKey: "tags",
    header: () => <div className="text-right">Tags</div>,
    cell: ({ row }) => {
      return (
        <div className="text-right font-medium gap-2 flex justify-end">
          {(row.getValue("tags") as [])?.map(
            (tag, index) => {
              return (
                <Badge key={index} variant={"outline"}>
                  {tag}
                </Badge>
              );
            }
          )}
        </div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const resource =
        row.original as unknown as (typeof RESOURCES)[0];

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                navigator.clipboard.writeText(resource.id);
                toast.success(
                  "Resource ID copied to clipboard"
                );
              }}
            >
              Copy resource ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Stop resource
            </DropdownMenuItem>
            <DropdownMenuItem>
              Raise an issue
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

const fuseOptions = {
  // isCaseSensitive: false,
  // includeScore: false,
  // ignoreDiacritics: false,
  // shouldSort: true,
  // includeMatches: false,
  // findAllMatches: false,
  // minMatchCharLength: 1,
  // location: 0,
  threshold: 0.1,
  // distance: 100,
  // useExtendedSearch: false,
  // ignoreLocation: false,
  // ignoreFieldNorm: false,
  // fieldNormWeight: 1,
  keys: Object.keys(RESOURCES[0]),
};

const fuse = new Fuse(RESOURCES, fuseOptions);

export function ResourcesTable() {
  const [sorting, setSorting] =
    React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] =
    React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [data, setData] = React.useState(RESOURCES);

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  });

  const searchTable = (searchKey: string) => {
    if (!searchKey || searchKey.trim() === "") {
      setData(RESOURCES); // Reset to original data if search key is empty
      return; // Return all data if search key is empty
    }
    // Perform search using Fuse.js
    const results = fuse.search(searchKey);

    // Map results to the original data format
    const filteredData = results.map(
      (result) => result.item
    );
    setData(filteredData);
  };

  return (
    <Card className="w-full @container/card">
      <CardHeader>
        <CardTitle>All resources:</CardTitle>
        <CardDescription>
          All resources are listed below. You can search,
          filter. You can also click to know more and get a
          quick view of the resource.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-2 sm:px-6">
        <div className="flex items-center pb-4">
          <Input
            placeholder="Filter by name, status, region etc"
            onChange={(event) =>
              searchTable(event.target.value)
            }
            // value={
            //   (table
            //     .getColumn("name")
            //     ?.getFilterValue() as string) ?? ""
            // }
            // onChange={(event) =>
            // table
            //   .getColumn("name")
            //   ?.setFilterValue(event.target.value)
            // }
            className="max-w-sm"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Columns <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="rounded-md border min-h-[400px]">
          <Table className="">
            <TableHeader className="bg-accent">
              {table
                .getHeaderGroups()
                .map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map(
                      (header, index) => {
                        return (
                          <TableHead key={index}>
                            {header.isPlaceholder
                              ? null
                              : flexRender(
                                  header.column.columnDef
                                    .header,
                                  header.getContext()
                                )}
                          </TableHead>
                        );
                      }
                    )}
                  </TableRow>
                ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table
                  .getRowModel()
                  .rows.map((row, index) => (
                    <TableRow
                      key={index}
                      data-state={
                        row.getIsSelected() && "selected"
                      }
                    >
                      {row
                        .getVisibleCells()
                        .map((cell, index) => (
                          <TableCell key={index}>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </TableCell>
                        ))}
                    </TableRow>
                  ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-end space-x-2 py-4">
          <div className="text-muted-foreground flex-1 text-sm">
            Showing {data.length} of {data.length} rows
          </div>
          <div className="space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
