import { IComment } from '../models'

export type CommentsAction =
  | { type: 'SET_COMMENTS'; comments: IComment[] }
  | { type: 'ADD_COMMENT'; comment: IComment }

export type CommentsState = {
  comments: IComment[]
}

export const initialState: CommentsState = {
  comments: [],
}

export const commentsReducer = (
  state: CommentsState,
  action: CommentsAction
): CommentsState => {
  switch (action.type) {
    case 'SET_COMMENTS':
      return { comments: action.comments }
    case 'ADD_COMMENT':
      return { comments: [action.comment, ...state.comments] }
    default:
      return state
  }
}
