import { collection, getDocs, where, query } from 'firebase/firestore/lite'
import { db } from '../firebase/init_Firebase'

export const getDocsCustom = async (endpoint, ...whereOptions) => {
  const collectionRef = collection(db, endpoint)

  const q = whereOptions.reduce((accumulator, currentValue) => {
    return query(accumulator, currentValue)
  }, collectionRef)

  return await getDocs(q)
}
// export { getDocsCustom }

export const getAllData = async (endpoint) => {
  const querySnapshot = await getDocs(collection(db, endpoint))
  querySnapshot.forEach((doc) => {
    return doc.id, ' => ', doc.data()
  })

  return querySnapshot
}
