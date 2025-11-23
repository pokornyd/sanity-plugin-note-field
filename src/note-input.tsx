import { Box, Card, Flex, Heading, Inline, Text } from '@sanity/ui'
import startCase from 'lodash/startCase.js'
import React from 'react'

import type { noteInputProps, NoteOptions } from './types'

const NoteInput = (
  props: noteInputProps & { ref?: React.Ref<HTMLDivElement> },
): React.JSX.Element | null => {
  const { ref, ...args } = props
  const { title, description } = args.schemaType
  const options = args.schemaType.options as NoteOptions | undefined

  // get last item in args.path array
  const pathId = String(args.path[args.path.length - 1] ?? '')

  const displayTitle = startCase(pathId) === title ? null : title
  const Icon = options?.icon
  const tone = options?.tone ?? 'primary'

  // bail if nothing was set
  if (!displayTitle && !description) return null

  return (
    <Card ref={ref} data-note={pathId} padding={[2, 4]} radius={3} tone={tone}>
      {displayTitle && (
        <Box marginBottom={description ? 2 : 0}>
          <Inline space={1}>
            {Icon && <Icon />}
            <Heading size={1}>{displayTitle}</Heading>
          </Inline>
        </Box>
      )}

      {description && (
        <Flex align="center">
          <Box style={{ flexShrink: 0, lineHeight: 0 }}>
            {Icon && !displayTitle && <Icon style={{ fontSize: 24 }} />}
          </Box>
          <Box
            marginLeft={displayTitle ? 0 : 3}
            marginTop={!Icon && displayTitle ? 1 : 0}
          >
            <Text size={[1, 1, 1]}>{description}</Text>
          </Box>
        </Flex>
      )}
    </Card>
  )
}

NoteInput.displayName = 'NoteInput'

export default NoteInput
