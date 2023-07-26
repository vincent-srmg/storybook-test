"use client";

import Button from "@/components/atoms/custom/button"
import Logo from "@/components/atoms/custom/logo/logo.component";
import Tags from "@/components/atoms/custom/tags/tags.component";
import Link from "next/link"
import { useRouter } from 'next/navigation'

const Home = () => {
  const router = useRouter()
  return (
    <>
      <div className="container p-10">
        <Button
          label="CTA Button"
          onClick={() => { }}
          tw="inline-flex items-center gap-2 font-semibold border border-black bg-black text-white hover:bg-[#4B4B55] hover:border-[#4B4B55]"
          twSize="px-6 py-2.5 text-[14px] leading-[18.20px]"
        />
      </div>
    </>
  )
}


export default Home