import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Markdown } from "./markdown";
import { useQuery } from "@tanstack/react-query";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fetchResearch } from "@/lib/research";

interface ResearchItem {
  input: string;
  output: string;
}

interface Research {}

interface ResearchDialogProps {
  chainId: string;
  roundId: string;
  applicationId: string;
}

export function Research({
  chainId,
  roundId,
  applicationId,
}: ResearchDialogProps) {
  const { data: research = {} } = useQuery<Research>({
    queryKey: ["research", applicationId],
    queryFn: () => fetchResearch(chainId, roundId, applicationId),
    enabled: !!applicationId,
  });

  console.log("research", research);

  return (
    <div className="space-y-4">
      {Object.entries(research).map(([key, value]) => (
        <div key={key}>
          <h3 className="text-lg font-semibold">{key.replace(/_/g, " ")}</h3>
          <Accordion type="single" collapsible className="w-full">
            {Array.isArray(value) &&
              value.map((item: ResearchItem) => (
                <AccordionItem key={item.input} value={item.input}>
                  <AccordionTrigger className="text-base font-medium text-left">
                    {item.input}
                  </AccordionTrigger>
                  <AccordionContent>
                    <Markdown>{item.output}</Markdown>
                  </AccordionContent>
                </AccordionItem>
              ))}
          </Accordion>
        </div>
      ))}
    </div>
  );
}
