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
import { useDebounce } from "react-use";
import { useState } from "react";
import { useQueryStates, parseAsString } from "nuqs";

interface FilterProps {
  filter?: Filter;
  onChange: (value?: Filter) => void;
}

type Filter = {
  search?: string;
  sort?: string;
};

export function useFilter() {
  return useQueryStates(
    {
      search: parseAsString.withDefault(""),
    },
    { history: "replace" }
  );
}

export function Filter({ filter, onChange }: FilterProps) {
  const [state, setState] = useState<Filter | undefined>(filter);
  const [, cancel] = useDebounce(
    () => {
      console.log("debounce", state);
      onChange(state);
    },
    500,
    [state]
  );

  console.log(state);

  return (
    <div className="">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="space-y-2 flex-1">
          <Input
            placeholder="Search projects..."
            onChange={(e) => setState({ search: e.target.value })}
            value={state?.search}
          />
        </div>

        {/* <div className="space-y-2">
          <Label htmlFor="sort">Sort by</Label>
          <Select
            value={filter?.sort}
            onValueChange={(sort) => setState({ sort })}
          >
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
        </div> */}
      </div>
    </div>
  );
}
