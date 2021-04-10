import { Center, Heading, Text, VStack } from '@chakra-ui/react'
import { primaryTextColor } from '../theme'

export const MainVisual = () => {
  return (
    <Center>
      <VStack py={16}>
        <Heading color={primaryTextColor}>Single Board</Heading>
        <Text>simple board to post comments</Text>
      </VStack>
    </Center>
  )
}
