import * as React from 'react'
import { FC, PropsWithChildren } from 'react'
import Container, { ContainerProps } from '@mui/material/Container'
import { Stack, Typography } from '@mui/material'

interface BodySingleProps extends PropsWithChildren {
  title?: string
  containerProps?: ContainerProps
}

const BodySingle: FC<BodySingleProps> = ({
  title,
  containerProps,
  children
}: BodySingleProps) => {
  return (
    <Container maxWidth="xl" {...containerProps}>
      <Stack flexDirection={'row'} flexWrap={'wrap'} gap={4} display={'flex'} justifyContent={'center'} alignItems={'flex-start'}>
        {title && (
          <Typography
            variant={'h2'}
            my={2}
            width={'100%'}
            textAlign={'center'}
            fontSize={28}
            fontWeight={600}
          >
            {title}
          </Typography>
        )}
        {children}
      </Stack>
    </Container>
  )
}
export default BodySingle
