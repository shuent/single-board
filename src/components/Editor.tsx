import { Box, Button, Flex, Text, Textarea, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { addComment } from '../api/commentsApi'
import { useAuth } from '../contexts/authContext'
import { useComments } from '../contexts/commentsContext'
import { ICommentAdd } from '../models'

export const Editor = () => {
  const { user } = useAuth()
  const { dispatch } = useComments()
  const [content, setContent] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (content !== '' && user) {
      const toPost: ICommentAdd = {
        user: { displayName: user.displayName, photoURL: user.photoURL },
        content,
      }
      addComment({ ...toPost })
      dispatch({
        type: 'ADD_COMMENT',
        comment: {
          ...toPost,
          createdAt: new Date(),
          id: Date(),
        },
      })
    } else if (!user) {
      alert('Sign in first')
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
        p={4}
        pb={2}
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
          post
        </Button>
      </VStack>
    </div>
  )
}
