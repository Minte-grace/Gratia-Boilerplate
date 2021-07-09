import api from '../../Services'
import handleError from '../utils/handleError'

export default async userId => {
  if (!userId) {
    return handleError({ message: 'User ID is required' })
  }
  const response = await api.get(`users/${userId}`)
  return response.data
}