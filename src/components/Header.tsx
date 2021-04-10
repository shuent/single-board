import {
  Flex,
  HStack,
  Spacer,
  Heading,
  Text,
  Container,
  Box,
} from '@chakra-ui/layout'

import { Link } from 'react-router-dom'
import { primaryTextColor } from '../theme'

export const Header = () => {
  return (
    <>
      <Box py={1} shadow='md' bg='gray.600'>
        <Container px={2} maxWidth='container.md'>
          <Flex alignItems='center'>
            <Heading color={primaryTextColor} size='sm'>
              <Link to='/'>Single Board</Link>
            </Heading>
            <Spacer />
            <HStack>
              <Link to='/login'>
                <HeaderText>Sign In</HeaderText>
              </Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </>
  )
}

const HeaderText = (props: React.PropsWithChildren<{}>) => (
  <Text color={primaryTextColor}>{props.children}</Text>
)
