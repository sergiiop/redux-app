import { useSelector, useDispatch } from 'react-redux'

import { setUser } from './reducer/user/userSlice'

export const App = () => {
  const dispatch = useDispatch()
  const { email } = useSelector((state) => state.user)
  return (
    <div className='App'>
      <button
        onClick={() => {
          dispatch(
            setUser({
              email: 'javi@mai.com',
              fullName: 'javeasd',
              token: '124'
            })
          )
        }}
      >
        Cambiar user
      </button>
    </div>
  )
}
