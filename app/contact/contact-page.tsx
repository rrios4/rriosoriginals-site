"use client"
import { InstagramIcon, LinkedinIcon, TwitchIcon, TwitterIcon, YoutubeIcon } from "lucide-react"
import React from "react"
import { Button } from "components/ui/button"
import { Input } from "components/ui/input"
import { Textarea } from "components/ui/textarea"


export default function ContactPage() {
  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="flex w-full flex-col justify-center mt-12">
        <p className="text-center text-5xl font-bold">Contact</p>
        <p className="mx-auto mt-4 max-w-xl text-center text-slate-600">
          Reach out to me by filling out the form below or by following me through my social media platforms to stay
          updated.
        </p>
      </div>
      <div className="flex flex-col gap-12">
        <div className="mt-8 flex w-full justify-center gap-4">
          <Button>
            <LinkedinIcon size={20} className="mx-auto px-0" />
          </Button>
          <Button>
            <InstagramIcon size={20} className="mx-auto px-0" />
          </Button>
          <Button>
            <TwitterIcon size={20} className="mx-auto px-0" />
          </Button>
          <Button>
            <YoutubeIcon size={20} className="mx-auto px-0" />
          </Button>
          <Button>
            <TwitchIcon size={20} className="mx-auto px-0" />
          </Button>
        </div>
        <div className="flex w-full max-w-screen-md justify-center gap-8 mx-auto">
          <div className="w-full">
            <p className="text-2xl">Contact Me</p>
            <p className="">Have something to say? We are here to help. Fill up the form or send email or call phone.</p>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <Input placeholder="Full Name"/>
            <Input placeholder="Email"/>
            <Textarea placeholder="Type your message here."/>
            <Button>Send your message</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
