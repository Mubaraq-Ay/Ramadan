'use client';

import { useState, useEffect } from 'react'

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(initialValue)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const item = window.localStorage.getItem(key)
    if (item) {
      try {
        setStoredValue(JSON.parse(item))
      } catch {
        setStoredValue(initialValue)
      }
    }
  }, [key, initialValue])

  const setValue = (value: T) => {
    try {
      setStoredValue(value)
      if (isClient) {
        window.localStorage.setItem(key, JSON.stringify(value))
      }
    } catch {
      console.error(`Error saving to localStorage: ${key}`)
    }
  }

  return [storedValue, setValue]
}
