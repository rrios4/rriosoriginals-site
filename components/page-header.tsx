import React from "react"

type Props = {
    title: string;
    description: string;
}

export default function DefaultPageHeader({ title, description }: Props) {
  return (
    <div className="mt-8 flex w-full flex-col justify-center">
      <p className="text-center text-3xl font-bold lg:text-4xl">{title}</p>
      <p className="mx-auto mt-4 max-w-xl text-center text-slate-700">{description}</p>
    </div>
  )
}
