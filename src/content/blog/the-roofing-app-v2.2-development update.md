---
draft: false
title: "The Roofing App v2.2 development update"
snippet: "Hello everyone 👋, I’m back and happy to announce the v2.1.0 of the app. During the development of this update I decided I wanted to give the app a brand to go by."
image: {
    src: "https://kcasqwspojmlwabzxloe.supabase.co/storage/v1/object/public/nextjs-website-public/The%20Roofing%20App/THR%20Status%20Update%20Canvas.png",
    alt: "the-roofing-app-v2.2-canvas-update"
}
publishDate: "2023-08-25 11:39"
category: "Product Update"
author: "Rogelio Rios Jr."
tags: [webdev, software-engineering, frontend]
---

<img src="https://kcasqwspojmlwabzxloe.supabase.co/storage/v1/object/public/nextjs-website-public/The%20Roofing%20App/THR%20Status%20Update%20Canvas.png"/>

## Introduction

Here is a status update to my development progress with version 2.2. A part of software development is seeing problem and learning to pivot when stuck. For a couple weeks now I have been stuck at executing the the implementation of the job project management system with this update and mostly it has to do with design and a bit on how it will function. I initially started by coming up with the features and changes I wanted to make and went straight to code. 

## Learning from experience

Finding out the complexity that comes with doing project management had me stuck. I want to implement something that is raw that is good in design. I don’t know exactly how I would tackle to manage jobs because I want to manage data such as images, documents, invoices, leads, and quotes. 

I learned that the need to design the UX first is very important before beginning to code and so I create a new Figma project that handles colors, styling, and design. Then I can just focus on design and make sure not waste time just making constant changes back and forth while coding. I design and that’s what I code and creating a more productive workflow as I keep updating this software.

## Currently working on

Here are some changes that I’m currently working on:

- Focus on customer being the driving force for the app and design will reflect that
- Adding “The Roofing App” its own logo since this will be its own thing that can be used by others.
- Designing the project management Kanban board page & details page
- Implementing Memojis to add life customers stored in the system
- Google maps popover preview for quick glance at address
- Customer popover info card for quick glance to customer information and actions
- 404 Page when navigating to pages that don’t exist
- Migrating from Chakra UI to Tailwind using shadcn ui library
- Recreating forms to be type safe, accessible, and have validation using react-hook-forms and zod.
- Reduction on bundle size for a more performant app.
- Refreshing the dashboard UI & finding alterantive method to display charts.
- And many more things.

## Migrating to Tailwind

This is quite a lot of things this update will contain but just alone doing the migration from Chakra UI to Tailwind will take me like 2 weeks because I wanted to code faster when building the UI and found that with Chakra UI my developer experience involves more friction. Meaning that I can build off quickly things but when it comes to stepping away for 2 weeks and coming back the friction is huge. While with tailwind I can always step away and come back to make changes with minimal friction on my side.

Long story short this update will take me longer than expected but at the end it will be well worth it. 🚀

If you have any question or want to collaborate on this project dont be afraid to contact me. Here are the links to the open source repo for the project.

Link to repo:
https://github.com/rrios4/roofing-webapp

Open issue here: 
https://github.com/rrios4/roofing-webapp/issues