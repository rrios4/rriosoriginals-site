"use client"
import Image from "next/image"
import React from "react"

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-screen-xl">
      {/* <div className='flex gap-4 w-full mt-12'>
        <div className=''>
          <h1 className='text-3xl font-[500]'>{"Hi, I'm Rogelio 👋"}</h1>
          <p className='max-w-screen-lg mt-6 text-slate-700'>{"Howdy, I'm a software engineer with over 3 years of web experience. I'm currently working with NextJS and Typescript. Outside of work I practice my faith, run 3 miles daily, weight training,"} </p>
        </div>
        <div className='w-full'>
          <div className='w-full bg-slate-200'>
            <p>Tets</p>
          </div>
        </div>
      </div> */}
      <div className="mt-8 flex w-full flex-col justify-center">
        <p className="text-center text-5xl font-bold">About</p>
        <p className="mx-auto mt-4 max-w-xl text-center text-slate-700">
          {"Learn a little more about me on my intestest, what I'm working on, and a bit about my story here."}
        </p>
      </div>
      <div className="mx-auto mt-10 w-full">
        <div className="relative mx-auto h-[500px] max-w-screen-md">
          <Image className="mx-auto rounded-xl -z-50" src={"/assets/desk-setup.JPG"} fill alt="desk-setup" />
        </div>
        <p className="mt-2 text-center uppercase text-slate-500">{"What's on my desk"}</p>
      </div>
      <div className="mt-8 w-full">
        <div className="mx-auto max-w-screen-sm">
          <h1 className="mb-4 text-xl font-bold">Story</h1>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Adipiscing
            bibendum est ultricies integer quis auctor elit sed vulputate. Ut sem nulla pharetra diam sit amet nisl
            suscipit adipiscing. Tincidunt dui ut ornare lectus sit amet est. Libero justo laoreet sit amet cursus sit
            amet dictum.
          </p>
          <h1 className="mb-4 text-xl font-bold">Current</h1>
          <p className="mb-4">
            {
              "Working as a Web Developer for a university to help build a production grade applications to bring ease of use and delightful design to our users. Then on the side I'm working on The Roofing App which is a admin dashboard application meant to help small roofing companies that are starting our to manage their important information. The project just started as a tool meant to just help my dad's roofing company but then decided that I wanted to expand it to others and make it open source and continue maintaining it in public."
            }
          </p>
        </div>
        <div className="flex w-full justify-center mt-6 mb-10">
          <div className="relative w-[200px] h-[200px]">
            <Image className="rounded-full -z-50" src={"/assets/profile-me.JPG"} fill alt="my-profile-pic" />
          </div>
        </div>
      </div>
    </div>
  )
}
