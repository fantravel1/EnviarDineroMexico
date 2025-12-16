import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Format currency for Mexican Pesos
export function formatMXN(amount: number): string {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2,
  }).format(amount)
}

// Format currency for US Dollars
export function formatUSD(amount: number): string {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(amount)
}

// Calculate total cost (fee + exchange rate loss)
export function calculateTotalCost(
  amount: number,
  fee: number,
  exchangeRateMarkup: number
): { totalCost: number; percentageCost: number } {
  const exchangeLoss = amount * (exchangeRateMarkup / 100)
  const totalCost = fee + exchangeLoss
  const percentageCost = (totalCost / amount) * 100
  return { totalCost, percentageCost }
}

// Format percentage
export function formatPercentage(value: number, decimals: number = 1): string {
  return `${value.toFixed(decimals)}%`
}

// Get current date in Spanish format
export function getCurrentDateSpanish(): string {
  return new Intl.DateTimeFormat('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date())
}

// Generate star rating display
export function generateStarRating(rating: number): string {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5
  let stars = '★'.repeat(fullStars)
  if (hasHalfStar) stars += '½'
  const emptyStars = 5 - Math.ceil(rating)
  stars += '☆'.repeat(emptyStars)
  return stars
}
