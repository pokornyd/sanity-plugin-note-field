import {definePlugin, defineType} from 'sanity'

import NoteInput from './note-input'

/**
 * Registers the `note` schema type, which renders an inline, read-only note
 * inside a document form instead of an editable field.
 *
 * @public
 */
export const noteField = definePlugin(() => {
  return {
    name: 'sanity-plugin-note-field',
    schema: {
      types: [
        defineType({
          title: 'Note',
          name: 'note',
          type: 'string',
          components: {
            input: NoteInput,
            field: (props) => <>{props.children}</>,
          },
        }),
      ],
    },
  }
})
