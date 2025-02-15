import * as React from 'react'
import { FC, PropsWithChildren } from 'react'
import { Stack } from '@mui/material'
import Box from '@mui/material/Box'
import GeneralHeader from 'src/components/layouts/header/general-header.component'
import GeneralFooter from 'src/components/layouts/footer/general-footer.component'

const LayoutCheckout: FC<PropsWithChildren> = ({
  children
}: PropsWithChildren) => {
  return (
    <>
      <Stack direction={'column'} height={'100%'}>
        <GeneralHeader variant={'simple'} />
        <Box display={'flex'} flexGrow={1}>
          {children}
        </Box>
        <GeneralFooter />
      </Stack>
    </>
  )
}
export default LayoutCheckout
