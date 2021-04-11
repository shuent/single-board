import { HStack, Box, Avatar, Heading, Text } from '@chakra-ui/react'
import { useEffect } from 'react'
import { getComments } from '../api/commentsApi'
import { useComments } from '../contexts/commentsContext'

import { IComment } from '../models'
import { primaryColor } from '../theme'

export const CommentList = () => {
  const {
    state: { comments },
    dispatch,
  } = useComments()
  useEffect(() => {
    getComments().then((data) => {
      dispatch({ type: 'SET_COMMENTS', comments: data })
    })
  }, [dispatch])

  return (
    <>
      <Heading mt={4} mb={2} size='md' color='gray.600'>
        Posted Comments
      </Heading>
      <ul>
        {comments === [] ? (
          <p>No Post</p>
        ) : (
          comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))
        )}
      </ul>
    </>
  )
}

const Comment = ({ comment }: { comment: IComment }) => (
  <Box bg='white' shadow='md' p={4} mb={4} rounded='md'>
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
