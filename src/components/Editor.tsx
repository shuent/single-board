import { Box, Button, Flex, Text, Textarea, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { useAuth } from '../contexts/authContext'
import { useComments } from '../contexts/commentsContext'

export const Editor = () => {
  const { user } = useAuth()
  const { state: commentsState, dispatch } = useComments()
  const [content, setContent] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (content !== '' && user) {
      dispatch({
        type: 'ADD_COMMENT',
        comment: {
          user: { displayName: user.displayName, photoURL: user.photoURL },
          content,
          createdAt: new Date(),
          id: 'testid',
        },
      })
    }
    setContent('')
  }
  const handleChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setContent(e.currentTarget.value)
  }

  return (
    <div>
      {user ? <Text>welcome back, {user.displayName}! </Text> : null}
      <VStack
        as='form'
        onSubmit={handleSubmit}
        p={2}
        bg='white'
        rounded='md'
        shadow='md'
        alignItems='flex-end'
      >
        <Textarea
          name='content'
          value={content}
          onChange={handleChange}
          placeholder="What's on your mind?"
        />
        <Button type='submit' colorScheme='orange'>
          create comments
        </Button>
      </VStack>
    </div>
  )
}
