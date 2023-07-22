"use client"
import Image from "next/image"
import React from "react"
import { AspectRatio } from "components/ui/aspect-ratio"
import { Badge } from "components/ui/badge"
import { openInNewTab } from "lib/utils"
import { ExternalLinkIcon } from "lucide-react"
import { projectItems } from "lp-items"
import DefaultPageHeader from "components/page-header"

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-screen-lg">
      <DefaultPageHeader
        title="Projects"
        description={
          "It has been an absolute pleasure to put my heart and soul into these projects. While you're here, browse these projects"
        }
      />
      {/* <p className="mt-8 text-center text-2xl font-bold">Featured Project</p> */}
      <div
        onClick={() => openInNewTab("https://github.com/rrios4/roofing-webapp")}
        className="-z-50 mt-2 flex w-full cursor-pointer flex-col justify-center gap-8 rounded-xl p-6 duration-150 ease-in-out hover:scale-95 hover:bg-slate-100 lg:flex-row"
      >
        <div className="relative mx-auto w-full">
          <AspectRatio ratio={16 / 9}>
            <Image
              quality={75}
              className="-z-50 mx-auto rounded-xl"
              src={"/assets/posters/roofingv2-webapp-poster.png"}
              alt="roofing-poster"
              fill
            />
          </AspectRatio>
        </div>
        <div className="w-full py-8">
          <div className="flex gap-4">
            <p className="text-3xl font-bold">The Roofing App</p>
            <div className=" my-auto flex justify-end">
              <ExternalLinkIcon size={20} />
            </div>
            <Badge>Featured</Badge>
          </div>
          <p className="mt-4 text-slate-500">
            Admin dashboard built for performance 🚀 to help small roofing businesses to manage important information!
          </p>
          <p className="mt-2 text-slate-700">Jan 2021 - Present</p>
          <div className="mt-4 flex w-full gap-2">
            <Badge>React.js</Badge>
            <Badge>Chakra UI</Badge>
            <Badge>Supabase</Badge>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full max-w-screen-md">
        <p className="mt-8 w-full px-6 text-2xl font-bold">Past Projects</p>
        {projectItems?.map((item, index) => (
          <React.Fragment key={index}>
            <div
              onClick={() => openInNewTab(item.url)}
              className="mt-2 flex w-full cursor-pointer flex-col justify-center gap-8 rounded-xl p-6 duration-150 ease-in-out hover:scale-95 hover:bg-slate-100 lg:flex-row"
            >
              <div className="relative mx-auto w-full">
                <AspectRatio ratio={16 / 9}>
                  <Image
                    quality={75}
                    className="-z-50 mx-auto rounded-xl"
                    src={item.img_url}
                    alt="roofing-poster"
                    fill
                  />
                </AspectRatio>
              </div>
              <div className="my-auto w-full">
                <div className="flex gap-2">
                  <p className="text-xl font-bold">{item.title}</p>
                  {item.url ? (
                    <div className=" my-auto flex justify-end px-2">
                      <ExternalLinkIcon size={20} />
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
                <p className="mt-2 text-sm text-slate-500">{item.description}</p>
                <p className="mt-2 text-sm font-[500] text-slate-700">
                  {item.start_date} - {item.end_date}
                </p>
                <div className="mt-4 flex w-full gap-2">
                  {item.badges.map((item, index) => (
                    <React.Fragment key={index}>
                      <Badge>{item}</Badge>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
