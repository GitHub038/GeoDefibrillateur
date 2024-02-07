<<<<<<< Updated upstream
import { Context } from '@/context/AuthContext'
=======
import { Context } from '../context/AuthContext'
>>>>>>> Stashed changes
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

const Protected = ({ children }) => {
  const { user } = useContext(Context)
  if (!user) {
    return <Navigate to="/auth" replace />
  } else {
    return children
  }
}

export default Protected
