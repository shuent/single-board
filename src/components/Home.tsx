import { CommentList } from './CommentList'
import { MainVisual } from './MainVisual'
import { Editor } from './Editor'
import { Footer } from './Footer'
import { Container } from '@chakra-ui/layout'
import { CommentsProvider } from '../contexts/commentsContext'
export const Home = () => (
  <Container px={2} maxW='container.md'>
    <MainVisual />
    <CommentsProvider>
      <Editor />
      <CommentList />
    </CommentsProvider>
    <Footer />
  </Container>
)
