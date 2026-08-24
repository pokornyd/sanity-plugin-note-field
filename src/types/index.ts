import type React from 'react'
import type {StringInputProps, StringSchemaType} from 'sanity'

/**
 * Card tones supported by a note, mirroring `@sanity/ui`'s theme tones.
 *
 * @public
 */
export type ThemeColorToneKey =
  | 'default'
  | 'transparent'
  | 'primary'
  | 'positive'
  | 'caution'
  | 'critical'

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
