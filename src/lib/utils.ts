import { type ClassValue, clsx } from "clsx";
import { addRequestMeta } from "next/dist/server/request-meta";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const addEmailToWaitList = async (email: string) => {
  const request = await fetch(
    `https://script.google.com/macros/s/AKfycbynJ9YC105ox1if7rvgN9EbgUuAwt-XXkwU47MWtEy-muQ8U0JOeiBF8ZeK6mwt3Hzz/exec?email=${email}`
  );
  return request.json();
};
