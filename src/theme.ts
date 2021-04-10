import { extendTheme } from '@chakra-ui/react'

export const primaryTextColor = 'orange.400'
export const primaryColor = 'orange.300'

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.100',
        color: 'gray.900',
        minHeight: '100vh',
      },
    },
    colors: {
      primaryText: 'orange.500',
      primary: 'orange.300',
    },
  },
})
