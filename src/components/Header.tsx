import {
  Flex,
  Spacer,
  Heading,
  Text,
  Container,
  Box,
} from '@chakra-ui/layout'

import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/authContext'
import { auth } from '../firebase'
import { primaryTextColor } from '../theme'

export const Header = () => {
  const { user } = useAuth()
  return (
    <>
      <Box py={1} shadow='md' bg='gray.600'>
        <Container px={2} maxWidth='container.md'>
          <Flex alignItems='center'>
            <Heading color={primaryTextColor} size='sm'>
              <Link to='/'>Single Board</Link>
            </Heading>
            <Spacer />
            {user ? (
              <Text color='white' as='button' onClick={() => auth.signOut()}>
                Log Out
              </Text>
            ) : (
              <Link to='/login'>
                <Text color='white'> Sign In</Text>
              </Link>
            )}
          </Flex>
        </Container>
      </Box>
    </>
  )
}
