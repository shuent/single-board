import { HStack, Box, Avatar, Heading, Text } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useComments } from '../contexts/commentsContext'

import { IComment, IUser } from '../models'
import { primaryColor } from '../theme'

const user1: IUser = { displayName: 'testuser1', photoURL: 'sample.jpg' }

export const CommentList = () => {
  const { state, dispatch } = useComments()
  const dcomments: IComment[] = [
    {
      user: user1,
      content:
        'first comment assssssss   ssssssssssssssss ssssssssssssssssss sssssssssssssssssss sssssssssssssssssssssss sssssssssssssssssss ssssssssssssssssssss ssssssssssssssssssssss',
      createdAt: new Date(),
      id: 'comment1id',
    },
    {
      user: user1,
      content: '元気ですか',
      createdAt: new Date(),
      id: 'comment2id',
    },
  ]

  useEffect(() => {
    let unmount = false
    if (!unmount) {
      console.log('set comments called')
      dispatch({ type: 'SET_COMMENTS', comments: dcomments })
    }
    return () => {
      unmount = true
    }
  }, [dispatch])

  return (
    <>
      <Heading mt={4} mb={2} size='md' color='gray.600'>
        Posted Comments
      </Heading>
      <ul>{state.comments.map(Comment)}</ul>
    </>
  )
}

const Comment = (comment: IComment) => (
  <Box key={comment.id} bg='white' shadow='md' p={2} mb={4} rounded='md'>
    <HStack mb={2}>
      <Avatar
        size='sm'
        src={comment.user.photoURL ? comment.user.photoURL : undefined}
        bg={primaryColor}
      ></Avatar>
      <Heading size='sm' color='gray.700'>
        {comment.user.displayName}
      </Heading>
    </HStack>
    <Text>{comment.content}</Text>
    <Text color='gray.400' mt={1} fontSize='sm' align='end'>
      {comment.createdAt.toLocaleString()}
    </Text>
  </Box>
)
