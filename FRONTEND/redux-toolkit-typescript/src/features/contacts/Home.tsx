import {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchContactList } from './contactSlice';

const Home = () => {
    const dispatch = useDispatch();
    const contacts = useSelector((state:any)=>state.contacts.contactList)

    console.log(contacts);
    
    useEffect(() => {
       dispatch(fetchContactList())
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default Home
