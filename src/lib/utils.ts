import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { COIN_TO_RUPIAH } from "@/constants/ui"

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs))
}

export function pathImages(src: string) {
  return `/assets/images/${src}`
}

export function formatDate(date: Date | string) {
  return new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(date))
}

export function formatRupiah(koin: number) {
  const rupiah = koin * COIN_TO_RUPIAH
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(rupiah)
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export const MAX_IMAGE_SIZE_BYTES = 5 * 1024 * 1024

export function isImageTooLarge(file: File) {
  return file.size > MAX_IMAGE_SIZE_BYTES
}