import { collection, getDocs, query } from "firebase/firestore/lite"
import { db } from '../firebase/init_Firebase'

const getDocsCustom = async (endpoint, ...whereOptions) => {
    const collectionRef = collection(db, endpoint);
    
    const q = whereOptions.reduce((accumulator, currentValue) => {
        return query(accumulator, currentValue);
    }, collectionRef);

    return await getDocs(q);
}
export {getDocsCustom}