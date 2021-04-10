export type IUser = {
  displayName: string | null | undefined
  photoURL: string | null | undefined
}
export type IComment = {
  user: IUser
  content: string
  createdAt: Date
  id: string
}
