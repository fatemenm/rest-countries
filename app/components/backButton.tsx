"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <div className="w-full">
      <button
        onClick={() => router.back()}
        className="text-very-dark-blue dark:bg-dark-blue flex cursor-pointer items-center gap-2 rounded-md bg-white p-4 px-4 py-2 shadow dark:text-white"
      >
        <ArrowLeft />
        Back
      </button>
    </div>
  );
}
