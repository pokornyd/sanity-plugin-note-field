import {Box, Card, Flex, Text} from '@sanity/ui'
import startCase from 'lodash-es/startCase.js'
import React from 'react'

import type {noteInputProps} from './types'

const NoteInput = (
  props: noteInputProps & {ref?: React.Ref<HTMLDivElement>},
): React.JSX.Element | null => {
  const {ref, ...args} = props
  const {title, description} = args.schemaType
  const options = args.schemaType.options

  // the note's field name is the last path segment; segments can also be array
  // keys or index tuples, which are not meaningful as an id here
  const lastSegment = args.path.at(-1)
  const pathId = typeof lastSegment === 'string' ? lastSegment : ''

  const displayTitle = startCase(pathId) === title ? null : title
  const Icon = options?.icon
  const tone = options?.tone ?? 'primary'

  // bail if nothing was set
  if (!displayTitle && !description) return null

  return (
    <Card ref={ref} data-note={pathId} padding={4} radius={2} tone={tone}>
      <Flex>
        {Icon && (
          <Box>
            <Text size={1} style={{color: 'var(--card-icon-color)'}}>
              <Icon />
            </Text>
          </Box>
        )}
        <Box flex={1} marginLeft={Icon ? 3 : 0}>
          {displayTitle && (
            <Box marginBottom={description ? 3 : 0}>
              <Text size={1} weight="medium">
                {displayTitle}
              </Text>
            </Box>
          )}

          {description && (
            <Text size={1} muted>
              {description}
            </Text>
          )}
        </Box>
      </Flex>
    </Card>
  )
}

NoteInput.displayName = 'NoteInput'

export default NoteInput
