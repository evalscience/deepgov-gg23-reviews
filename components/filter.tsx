"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "./ui/input";
import { useDebounce } from "react-use";
import { useState } from "react";
import { useQueryStates, parseAsString } from "nuqs";
import { useRounds } from "@/hooks/useApplications";

interface FilterProps {
  filter?: Filter;
  onChange: (value?: Filter) => void;
}

type Filter = {
  search?: string;
  sort?: string;
  roundId?: string;
  chainId?: string;
};

export function useFilter() {
  return useQueryStates(
    {
      search: parseAsString.withDefault(""),
      roundId: parseAsString.withDefault(""),
      chainId: parseAsString.withDefault(""),
    },
    { history: "replace" }
  );
}

export function Filter({ filter, onChange }: FilterProps) {
  const [state, setState] = useState<Filter | undefined>(filter);
  const { data: rounds } = useRounds();
  useDebounce(
    () => {
      onChange(state);
    },
    500,
    [state]
  );

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
        <div className="space-y-2 ">
          <Select
            value={[filter?.roundId, filter?.chainId].join("-")}
            onValueChange={(round) => {
              const [id, chainId] = round.split("-");
              setState({ roundId: id, chainId });
            }}
          >
            <SelectTrigger id="sort" className="w-full sm:w-[280px]">
              <SelectValue placeholder="Round" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="-">All Rounds</SelectItem>
              {rounds?.map((round) => (
                <SelectItem
                  key={round.id}
                  value={[round.id, round.chainId].join("-")}
                >
                  {round.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
