import { firedb, firebase } from '../firebase'
import { IComment, ICommentAdd } from '../models'

export const getComments = async () => {
  const snapShot = await firedb
    .collection('comments')
    .orderBy('createdAt', 'desc')
    .get()
  const data = snapShot.docs.map<IComment>((doc) => ({
    user: doc.data().user,
    content: doc.data().content,
    createdAt: doc.data().createdAt.toDate(),
    id: doc.id,
  }))
  return data
}

export const addComment = async (comment: ICommentAdd) => {
  return firedb.collection('comments').add({
    user: comment.user,
    content: comment.content,
    createdAt: firebase.firestore.Timestamp.now(),
  })
}
