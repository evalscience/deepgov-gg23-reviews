"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "./ui/input";

interface FilterProps {
  filter: string;
  setFilter: (value: string) => void;
  sortBy: string;
  setSortBy: (value: string) => void;
}

export function Filter({ filter, setFilter, sortBy, setSortBy }: FilterProps) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="space-y-2 flex-1">
          <Label htmlFor="search">Search</Label>
          <Input placeholder="Search projects..." />
        </div>
        <div className="space-y-2">
          <Label htmlFor="filter">Filter by Status</Label>
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger id="filter" className="w-full sm:w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Applications</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="sort">Sort by</Label>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger id="sort" className="w-full sm:w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
              <SelectItem value="highest">Highest Score</SelectItem>
              <SelectItem value="lowest">Lowest Score</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
