import { Center, Heading, VStack } from '@chakra-ui/layout'
import { primaryTextColor } from '../theme'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { firebase } from '../firebase'

const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,

    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
}

export const Login = () => {
  return (
    <Center mt={8}>
      <VStack>
        <Heading size='md' color={primaryTextColor}>
          Sign In
        </Heading>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </VStack>
    </Center>
  )
}
