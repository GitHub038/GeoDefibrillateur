import { collection, getDocs, query } from 'firebase/firestore/lite'
import { db } from '../firebase/init_Firebase'
import { calculateDistance } from '../utils/helpers.js'

const getDocsCustom = async (endpoint, ...whereOptions) => {
  const collectionRef = collection(db, endpoint)

  const q = whereOptions.reduce((accumulator, currentValue) => {
    return query(accumulator, currentValue)
  }, collectionRef)

  return await getDocs(q)
}

const getGeoDocs = async (endpoint, center) => {
  const collectionRef = collection(db, endpoint)
  const snapshot = await getDocs(collectionRef)
  const docs = []
  snapshot.docs.forEach((doc) => {
    const data = doc.data()
    const lat = data.c_lat_coor1
    const lon = data.c_long_coor1

    const distance = calculateDistance(
      center.latitude,
      center.longitude,
      lat,
      lon,
    )
    if (distance <= 100) {
      docs.push({
        doc,
        distance,
      })
    }
  })

  return docs
}

export { getDocsCustom, getGeoDocs }
