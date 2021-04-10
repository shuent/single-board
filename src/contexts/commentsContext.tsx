import {
  createContext,
  Dispatch,
  ReactNode,
  useReducer,
  useContext,
} from 'react'
import {
  CommentsAction,
  commentsReducer,
  CommentsState,
  initialState,
} from '../reducers/commentsReducer'

type CommentsContextProps = {
  state: CommentsState
  dispatch: Dispatch<CommentsAction>
}

const CommentsContext = createContext<CommentsContextProps>({
  state: initialState,
  dispatch: () => initialState,
})

export const CommentsProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(commentsReducer, initialState)
  return (
    <CommentsContext.Provider value={{ state, dispatch }}>
      {children}
    </CommentsContext.Provider>
  )
}

export const useComments = () => useContext(CommentsContext)
