import { ImageResponse } from "next/og";
import { metadata } from "./layout";

export const runtime = "edge";

export const alt = metadata.title;
export const size = { width: 1200, height: 630 };

export const contentType = "image/png";

export default async function Image() {
  const fontData = await loadGoogleFont(fontFamily);

  return new ImageResponse(
    (
      <div tw="bg-[#B45309] w-full h-full flex flex-col justify-center items-center">
        <div tw="text-[140px] font-bold text-white">DeepReview</div>
        <div tw="text-4xl text-white">Agent Reviews & Credit Assignment</div>
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

export const fontFamily = "Merriweather";
export async function loadGoogleFont(font = fontFamily) {
  const url = `https://fonts.googleapis.com/css2?family=${font}`;

  const css = await (await fetch(url)).text();

  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/
  );

  if (resource?.[1]) {
    const res = await fetch(resource[1]);
    if (res.status == 200) {
      return await res.arrayBuffer();
    }
  }

  throw new Error("failed to load font data");
}
