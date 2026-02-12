import { Separator } from '@/components/ui/separator'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white mt-12">
      <div className="max-w-3xl mx-auto px-4 py-6">
        <Separator className="mb-4" />
        <p className="text-sm text-gray-600 text-center">
          Ramadan Toolkit · Built with ❤️ · Fast and lightweight, no tracking
        </p>
      </div>
    </footer>
  )
}
