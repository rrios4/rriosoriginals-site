"use client"
import {
  BriefcaseIcon,
  FolderGit2Icon,
  GithubIcon,
  LayoutGridIcon,
  NewspaperIcon,
  NfcIcon,
  TwitchIcon,
  User2Icon,
} from "lucide-react"
// import Image from "next/image"
import Link from "next/link"
import React from "react"
// import { Avatar, AvatarFallback, AvatarImage } from "components/ui/avatar"
import { Button } from "components/ui/button"
import { openInNewTab } from "lib/utils"

const linkItems = [
  {
    title: "Home",
    icon: <LayoutGridIcon className="my-auto" size={15} />,
    path: "/",
  },
  {
    title: "Projects",
    icon: <FolderGit2Icon size={15} className="my-auto" />,
    path: "/projects",
  },
  {
    title: "Blog",
    icon: <NewspaperIcon className="my-auto" size={15} />,
    path: "/blog",
  },
  {
    title: "CV",
    icon: <BriefcaseIcon className="my-auto" size={15} />,
    path: "/cv",
  },
  {
    title: "About",
    icon: <User2Icon className="my-auto" size={15} />,
    path: "/about",
  },
  {
    title: "Contact",
    icon: <NfcIcon className="my-auto" size={15} />,
    path: "/contact",
  },
]

export default function Navbar() {
  return (
    <div className="sticky top-0 w-full bg-white px-4 py-2 opacity-95 backdrop-blur-xl dark:bg-slate-900">
      <div className="container flex justify-between">
        <div className="flex gap-4">
          <p className="my-auto text-xl font-bold">
            Rogelio<span className="font-[300] text-slate-500">Rios</span>
          </p>
          <div className="my-auto flex gap-2">
            {linkItems.map((item, index) => (
              <React.Fragment key={index}>
                <Link href={item.path}>
                  <div className="flex gap-2 rounded-md px-2 py-1 hover:bg-slate-100">
                    {item.icon}
                    <p className="my-auto text-slate-700">{item.title}</p>
                  </div>
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          <div className="my-auto rounded-full">
            <Button
              variant={"outline"}
              className="px-3"
              onClick={() => openInNewTab("https://www.twitch.tv/roriginals")}
            >
              {/* <GithubIcon size={20} /> */}
              {/* <TwitterIcon size={20}/> */}
              <TwitchIcon size={18} />
            </Button>
          </div>
          <div className="my-auto rounded-full">
            <Button variant={"outline"} className="px-3" onClick={() => openInNewTab("https://github.com/rrios4")}>
              <GithubIcon size={18} />
            </Button>
          </div>
          {/* <p className="my-auto">Rogelio Rios Jr.</p>
          <Avatar>
            <AvatarImage src="https://avatars.githubusercontent.com/u/60051303?v=4" />
            <AvatarFallback>RR</AvatarFallback>
          </Avatar> */}
        </div>
      </div>
    </div>
  )
}
