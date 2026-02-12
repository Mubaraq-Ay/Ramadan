# Ramadan Toolkit

A minimalist, distraction-free Ramadan companion for daily remembrance, duas, and spiritual consistency.

## Features

✨ **Minimalist Design**
- Clean white background with near-black text and muted gray accents
- Single centered column layout (max 900px)
- Thin dividers, subtle animations, no gradients or heavy shadows

🕌 **Adhkār (Remembrance)**
- Morning, evening, and after-salah adhkār
- Copy-to-clipboard functionality
- WhatsApp sharing for each item
- Counter for tracking repetitions

📿 **Duʿā (Supplications)**
- 12+ supplications across 5 categories
- Full-text search and filtering
- Favorite management with localStorage
- Category chips for quick browsing
- Show favorites only toggle

📅 **Ramadan Calendar**
- 30-day tracker with daily progress
- Today's day highlighted
- Last 10 nights highlighting for Laylatul Qadr focus
- Progress bar visualization

🌙 **Laylatul Qadr (Night of Power)**
- Live countdown timer to 6:00 PM
- Nights 21-30 with odd night highlighting
- Beautiful night grid layout
- WhatsApp reminders

🎯 **Global Features**
- Responsive mobile navigation using shadcn/ui Sheet
- Page fade/slide animations on route change
- Subtle section reveal animations on scroll
- Button micro-interactions (scale on tap)
- All data stored locally (no backend needed)
- No tracking or analytics

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui (Tabs, Badge, Button, Input, Separator, Sheet)
- **Animations**: Framer Motion
- **State**: React hooks + localStorage for favorites

## Project Structure

```
├── app/
│   ├── layout.tsx                 # Root layout with navigation
│   ├── page.tsx                   # Home page
│   ├── adhkar/
│   │   └── page.tsx              # Adhkār page with tabs
│   ├── duas/
│   │   └── page.tsx              # Duʿā page with search & filters
│   ├── calendar/
│   │   └── page.tsx              # Ramadan calendar tracker
│   ├── laylatul-qadr/
│   │   └── page.tsx              # Night of Power page
│   └── globals.css               # Global styles
├── components/
│   ├── Header.tsx                # Navigation header
│   ├── Footer.tsx                # Footer
│   ├── AdhkarCard.tsx            # Adhkār item display
│   ├── DuaaCard.tsx              # Duʿā item display
│   └── ui/                       # shadcn/ui components
├── hooks/
│   ├── useLocalStorage.ts        # localStorage hook
│   └── use-mobile.tsx            # Mobile detection
├── lib/
│   ├── data.ts                   # Adhkār and Duʿā data
│   ├── animations.ts             # Framer Motion variants
│   ├── utils-custom.ts           # Utility functions
│   └── utils.ts                  # shadcn utilities
└── package.json
```

## Key Features Implementation

### Copy to Clipboard
Implemented in AdhkarCard and DuaaCard with visual feedback:
```tsx
const success = await copyToClipboard(text)
if (success) {
  setCopied(true)
  setTimeout(() => setCopied(false), 2000)
}
```

### WhatsApp Sharing
Share any adhkār or duʿā directly to WhatsApp with context:
```tsx
const text = `${item.title}\n${item.arabic}\n\nRamadan Toolkit`
shareOnWhatsApp(text, pageUrl)
```

### localStorage Favorites
Favorites are persisted using custom hook:
```tsx
const [favorites, setFavorites] = useLocalStorage<string[]>('duaa-favorites', [])
```

### Live Countdown Timer
Updates every second to the next night start (6:00 PM):
```tsx
const updateCountdown = () => {
  const time = getCountdownToTime(18)
  setCountdown(time)
}
const interval = setInterval(updateCountdown, 1000)
```

### Animations
- **Page transitions**: Fade in with slight slide
- **Section reveals**: Staggered children animations on scroll
- **Button interactions**: Scale on hover and tap
- **Card hovers**: Border color transition

## Color System

- **Background**: White (#ffffff)
- **Primary Text**: Near-black (#000000)
- **Secondary Text**: Gray (#666666)
- **Borders**: Light gray (#e5e5e5)
- **Accents**: Dark gray (#000000)

No gradients, no glassmorphism, minimal shadows.

## Getting Started

### Installation

```bash
# Clone and install dependencies
npm install

# Install shadcn/ui components (optional, already included)
npx shadcn-ui@latest init
```

### Running

```bash
npm run dev
```

Visit `http://localhost:3000`

## Building

```bash
npm run build
npm start
```

## Features Details

### Adhkār Page
- **3 Tabs**: Morning (6 items), Evening (6 items), After Salah (6 items)
- **Per Item**: Title, Arabic, Transliteration, English meaning
- **Actions**: Copy (with "Copied" feedback), WhatsApp share, Counter
- **Styling**: Minimal cards with subtle hover effects

### Duʿā Page
- **Search**: Real-time filtering by title or meaning
- **Categories**: Fasting, Iftar, Forgiveness, Parents, Laylatul Qadr
- **Favorites**: Toggle to show only saved duʿā
- **Per Item**: Same as adhkār + favorite toggle with heart icon
- **12 Duʿā**: Distributed across categories

### Calendar Page
- **30-Day Table**: Day, Hijri date, Gregorian date, notes
- **Progress**: Visual bar + "Day X/30" text
- **Highlighting**: Today's row highlighted with 📍
- **Last 10 Nights**: Toggle to highlight nights 21-30 with 🌙

### Laylatul Qadr Page
- **Live Countdown**: Hours:Minutes:Seconds to 6:00 PM
- **Night Grid**: 10 cards (nights 21-30)
- **Odd Nights**: Highlighted (21, 23, 25, 27, 29)
- **Current Night**: Bold with 🌙
- **Share Button**: WhatsApp reminder for tonight

### Home Page
- **Hero**: Title, subtitle, badge
- **Quick Links**: 4 cards (Adhkār, Duʿā, Calendar, Laylatul Qadr)
- **Today Panel**: Day X/30, featured duʿā, featured adhkār
- **Share CTA**: Share toolkit on WhatsApp

## Data Format

All data is stored as local arrays in `lib/data.ts`. No API calls or backend needed.

### Adhkār Item
```typescript
{
  id: string
  category: 'morning' | 'evening' | 'after-salah'
  title: string
  arabic: string
  transliteration: string
  meaning: string
}
```

### Duʿā Item
```typescript
{
  id: string
  category: 'fasting' | 'iftar' | 'forgiveness' | 'parents' | 'laylatul-qadr'
  title: string
  arabic: string
  transliteration: string
  meaning: string
}
```

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

Uses modern Web APIs:
- localStorage for favorites
- Clipboard API for copy-to-clipboard
- Web Share API (with WhatsApp fallback)

## Performance

- No external APIs or backend requests
- Lightweight animations (Framer Motion optimized)
- Responsive design with mobile-first approach
- Page transitions are smooth and fast
- All data loaded on page load

## Customization

### Change Primary Color
Edit `app/globals.css`:
```css
:root {
  --primary: [your-color]
  --primary-foreground: [contrast-color]
}
```

### Add More Adhkār or Duʿā
Edit `lib/data.ts` and add items to `adhkarData` or `duaaData` arrays.

### Modify Animation Timing
Edit `lib/animations.ts` and adjust `duration` and `delay` values.

### Change Night Countdown Time
Edit `lib/utils-custom.ts` in `getCountdownToTime()` function:
```tsx
const targetHour = 18 // Change to your preferred hour (0-23)
```

## Credits

Built with ❤️ using Next.js, React, and Tailwind CSS.

Designed to enhance your Ramadan journey with simplicity and focus.

May Allah accept from all of us. 🌙

## License

Created for spiritual and educational purposes during Ramadan.
