export function copyToClipboard(text: string): Promise<boolean> {
  return navigator.clipboard
    .writeText(text)
    .then(() => true)
    .catch(() => false)
}

export function shareOnWhatsApp(text: string, url?: string): void {
  const message = url ? `${text}\n\n${url}` : text
  const encoded = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/?text=${encoded}`
  window.open(whatsappUrl, '_blank')
}

export function getCurrentDay(): number {
  const now = new Date()
  const ramadanStart = new Date(2026, 1, 18) // February 18, 2026 - Ramadan 1448 AH
  const daysPassed = Math.floor((now.getTime() - ramadanStart.getTime()) / (1000 * 60 * 60 * 24))
  return Math.max(1, Math.min(30, daysPassed + 1))
}

export function getCountdownToTime(targetHour: number = 18): { hours: number; minutes: number; seconds: number } {
  const now = new Date()
  const target = new Date(now)
  target.setHours(targetHour, 0, 0, 0)

  if (now > target) {
    target.setDate(target.getDate() + 1)
  }

  const diff = target.getTime() - now.getTime()
  const hours = Math.floor(diff / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)

  return { hours, minutes, seconds }
}

export function getLaylatulQadrNights(): number[] {
  return [21, 23, 25, 27, 29]
}

export function isOddNight(night: number): boolean {
  return night % 2 === 1
}
