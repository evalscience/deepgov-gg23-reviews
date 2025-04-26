import { ImageResponse } from "next/og";
import { metadata } from "./layout";
import { fontFamily, loadGoogleFont } from "../../../opengraph-image";
import {
  fetchApplicationById,
  useApplicationById,
} from "../../../../hooks/useApplications";

export const runtime = "edge";

export const alt = metadata.title;
export const size = { width: 1200, height: 630 };

export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: { chainId: string; projectId: string };
}) {
  const fontData = await loadGoogleFont(fontFamily);

  const project = await fetchApplicationById({
    id: params.projectId,
    chainId: params.chainId,
  });

  if (!project) {
    return new ImageResponse(
      (
        <div tw="bg-[#B45309] w-full h-full flex flex-col justify-center items-center">
          <div tw="text-[140px] font-bold text-white">DeepGov</div>
          <div tw="text-4xl text-white">Project Not Found</div>
        </div>
      ),
      {
        ...size,
        fonts: [
          {
            name: fontFamily,
            data: fontData,
            style: "normal",
          },
        ],
      }
    );
  }

  return new ImageResponse(
    (
      <div tw="w-full bg-neutral-900 p-4 h-full flex flex-col items-center">
        <div tw="flex relative mt-8">
          {project.bannerImg && (
            <img
              width={1000}
              height={300}
              tw="flex mt-8"
              src={project.bannerImg}
            />
          )}
        </div>
        <div tw="flex w-[1000px] justify-center mx-auto text-neutral-400 mt-8">
          <div tw="flex flex-col items-center">
            <div tw="text-4xl text-center text-green-50">{project.name}</div>
          </div>
        </div>

        <div tw="flex items-center tracking-wider text-neutral-200 absolute top-0 left-0 bg-neutral-900 p-2">
          <div tw="flex ml-2 text-2xl">DeepGov</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: fontFamily,
          data: fontData,
          style: "normal",
        },
      ],
    }
  );
}
