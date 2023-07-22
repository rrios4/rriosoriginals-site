"use client"
import { InstagramIcon, LinkedinIcon, TwitchIcon, TwitterIcon, YoutubeIcon } from "lucide-react"
import React from "react"
import { Button } from "components/ui/button"
import { Input } from "components/ui/input"
import { Textarea } from "components/ui/textarea"
import { openInNewTab } from "lib/utils"
import DefaultPageHeader from "components/page-header"

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-screen-xl">
      <DefaultPageHeader
        title="Contact"
        description="Reach out to me by filling out the form below or by following me through my social media platforms to stay
          updated."
      />
      <div className="flex flex-col gap-12">
        <div className="mt-8 flex w-full justify-center gap-4">
          <Button>
            <LinkedinIcon
              size={20}
              className="mx-auto px-0"
              onClick={() => openInNewTab("https://www.linkedin.com/in/rrios4/")}
            />
          </Button>
          <Button>
            <InstagramIcon
              size={20}
              className="mx-auto px-0"
              onClick={() => openInNewTab("https://www.instagram.com/rriosoriginals/")}
            />
          </Button>
          <Button>
            <TwitterIcon
              size={20}
              className="mx-auto px-0"
              onClick={() => openInNewTab("https://twitter.com/rriosoriginals")}
            />
          </Button>
          <Button>
            <YoutubeIcon
              size={20}
              className="mx-auto px-0"
              onClick={() => openInNewTab("https://www.youtube.com/channel/UCPH-go5rxP-47s-XzPmAgHw")}
            />
          </Button>
          <Button>
            <TwitchIcon
              size={20}
              className="mx-auto px-0"
              onClick={() => openInNewTab("https://www.twitch.tv/roriginals")}
            />
          </Button>
        </div>
        <div className="mx-auto flex w-full max-w-screen-md flex-col justify-center gap-12 md:flex-row">
          <div className="w-full">
            <p className="text-2xl">Contact Me</p>
            <p className="text-slate-700">
              Have something to say? We are here to help. Fill up the form or send email or call phone.
            </p>
          </div>
          <div className="flex w-full flex-col gap-4">
            <Input placeholder="Full Name" />
            <Input placeholder="Email" />
            <Textarea placeholder="Type your message here." />
            <Button>Send your message</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
