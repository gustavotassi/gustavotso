import {
  Anton,
  Bebas_Neue as BebasNeue,
  Caveat,
  DM_Sans as DMSans,
  Great_Vibes as GreatVibes,
  Instrument_Serif as InstrumentSerif,
  Libre_Baskerville as LibreBaskerville,
  Playfair_Display as PlayfairDisplay,
} from 'next/font/google'

/** Body copy. */
const dmSans = DMSans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

/** Editorial accents. */
const libreBaskerville = LibreBaskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-libre',
})

/**
 * Everything below exists for the intro animation alone, where the name is
 * typeset over and over in a different voice every few hundred milliseconds.
 * Each one is here for its silhouette: condensed, elegant, heavy, handwritten.
 */
const anton = Anton({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-anton',
})

const bebasNeue = BebasNeue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas',
})

/** Casual handwriting. */
const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
})

/** Formal calligraphy. */
const greatVibes = GreatVibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-vibes',
})

const instrumentSerif = InstrumentSerif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument',
})

const playfairDisplay = PlayfairDisplay({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const fontVariables = [
  dmSans,
  libreBaskerville,
  anton,
  bebasNeue,
  caveat,
  greatVibes,
  instrumentSerif,
  playfairDisplay,
]
  .map((font) => font.variable)
  .join(' ')
