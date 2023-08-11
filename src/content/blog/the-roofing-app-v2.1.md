---
draft: false
title: "The Roofing App v2.1 release update"
snippet: "Hello everyone 👋, I’m back and happy to announce the v2.1.0 of the app. During the development of this update I decided I wanted to give the app a brand to go by."
image: {
    src: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?&fit=crop&w=430&h=240",
    alt: "full stack web development"
}
publishDate: "2023-07-09 11:39"
category: "Product Update"
author: "Rogelio Rios Jr."
tags: [webdev, chakraui, frontend]
---

## Introduction

Hello everyone 👋, I’m back and happy to announce the v2.1.0 of the app. During the development of this update I decided I wanted to give the app a brand to go by. After thinking about it for a while I landed on “The Roofing App”. Nothing too complex just straight forward and simple. 

Between now and the last release I have been at work not only improving the app but also creating internal workflow for CI/CD internally self hosted . I have created a dev environment separate from my production version of the app. Making it possible to continue development without breaking anything in production. And the last version has been good so far but small quirks here and there that needed to be address which are in this version.

## Future plan

With this release I wanted to focus on making the current core features robust on the app by making them more robust and improving maintainability. As I keep maintaining this piece of software the more I keep learning and the more I see the challenges that come with that. I have a road map planned for up to version 2.5, that will be my milestones that will help this app stand out from the rest. There is a vision I have for the app but don’t want to spoil what that is 😄.

## Highlights

With this release of “The Roofing App” here are the following highlights:

- UI Refresh for Leads, Quotes, Invoices, and Customers Pages
    - Quote Request got rebranded to Leads because it better represents what that data is.
- More stat cards for each of the main pages in the app
- Tanstack Tables with sorting, filtering, and pagination
    - Customers, Quotes, Invoices, and Leads
- Tanstack Query for state management, caching, mutations and auto refreshes for data
- Convert quote into an invoice with validation
- Invoice/Quote have proper internal/external note.
- Delete Alert Modal refreshed UI Design
- Empty State Cards for main pages when no data is found
- Proper error feedback toast messages to the user across action in the app.

### Bugs

- Fixed issue where user would be pushed to login page instead to dashboard when logged in.
- Fix infinity place holder value when no invoices or quotes are available in respective forms.
- Theme color established for Apple devices to display instead of the color black
- Fix problem where custom addresses were not being displayed and exported for Invoice and Quote.
- Fix where certain addresses did not contain google maps hotlink to search for address in a new tab.
