import { ApplicationDetails } from "@/components/application-details";

export default function ApplicationPage({
  params,
}: {
  params: { hash: string };
}) {
  const { hash } = params;
  //   const { data: application } = useQuery({
  //     queryKey: ["application", hash],
  //     queryFn: () => getApplication(hash),
  //   });

  //   if (!application) {
  //     return <div>Application not found</div>;
  //   }

  return <ApplicationDetails hash={hash} />;
}
