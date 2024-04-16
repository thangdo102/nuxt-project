import auth from '@firebase/auth'
import { useState } from 'nuxt/app'

type UserState = auth.User

export const useLoginUser = () => {
  const user: Ref<UserState> = useState('user', () => null)

  const updateUser = (user: Ref<UserState>) => (value: UserState) => {
    user.value = value
  }
  
  return {
    state: readonly(user),
    update: updateUser(user)
  }
}