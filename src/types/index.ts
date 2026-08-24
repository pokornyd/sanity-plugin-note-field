import type {CardTone} from '@sanity/ui'
import type React from 'react'
import type {StringInputProps, StringSchemaType} from 'sanity'

/**
 * Tones a note's card can use — every tone `@sanity/ui`'s `Card` accepts.
 *
 * @public
 */
export type ThemeColorToneKey =
  | 'transparent'
  | 'default'
  | 'neutral'
  | 'primary'
  | 'suggest'
  | 'positive'
  | 'caution'
  | 'critical'
  | 'inherit'

/**
 * Compile-time guard: if `@sanity/ui` gains or drops a card tone, this stops
 * building instead of silently rejecting a tone `Card` actually supports.
 * Type-only, so nothing is emitted.
 */
type Equals<A, B> = [A] extends [B] ? ([B] extends [A] ? true : false) : false
type Assert<T extends true> = T
export type _TonesMatchCardTone = Assert<Equals<ThemeColorToneKey, CardTone>>

/**
 * Options accepted by a `note` field's `options` object.
 *
 * @public
 */
export type NoteOptions = {
  icon?: React.ElementType
  tone?: ThemeColorToneKey
}

declare module 'sanity' {
  // merged with sanity's own StringOptions, so `options` on a note field is
  // type-checked and autocompletes rather than needing a cast at the use site
  export interface StringOptions extends NoteOptions {}
}

/** @public */
export type noteSchemaType = StringSchemaType

/** @public */
export type noteInputProps = StringInputProps
