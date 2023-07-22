"use client"
import { MenuIcon } from "lucide-react"
import Link from "next/link"
import React from "react"
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "components/ui/sheet"
import { linkItems } from "lp-items"

export default function MobileNavSheet() {
  return (
    <>
      <Sheet>
        <SheetTrigger className="block px-3 border border-slate-200 rounded-lg lg:hidden">
            <MenuIcon size={18} />
        </SheetTrigger>
        <SheetContent className="w-full">
          <SheetHeader>
            <SheetTitle className="font-[600]">
              Rogelio<span className="font-[300] text-slate-400">Rios</span>
            </SheetTitle>
          </SheetHeader>
          <div className="mx-4 my-6 flex flex-col gap-2">
            {linkItems.map((item, index) => (
              <React.Fragment key={index}>
                <div className="flex gap-4">
                  <SheetClose asChild>
                    <Link href={item.path} className="flex w-full gap-2 rounded-lg p-2 hover:bg-slate-200">
                      {item.icon}
                      <p>{item.title}</p>
                    </Link>
                  </SheetClose>
                </div>
              </React.Fragment>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}