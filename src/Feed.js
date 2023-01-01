import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import EventNoteIcon from '@mui/icons-material/EventNote';
import Post from './Post';
import { db } from './firebase';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';


export default function Feed() {

    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([])
    const user = useSelector(selectUser)

    useEffect(()=>{
        async function getAllPosts(){
            const {docs} = await getDocs(collection(db, "posts"))
            const posts =docs.map(doc=> ({id : doc.id, data:doc.data()}))
            setPosts(posts)
        
          }
          getAllPosts();
    },[posts])

    const sendPost = (e) =>{
        e.preventDefault()

        const post = {
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || '',
        }
        addDoc(collection(db, "posts"), post)
        setInput('')
    }
    console.log(posts)
  return (
    <div className='feed'>
        <div className='feed__inputContainer'>
            <div className='feed__input'>
                <CreateIcon />
                <form>
                    <input value={input} onChange={e=>setInput(e.target.value)} type='text' />
                        <button onClick={sendPost} type='submit'>Send</button>
                </form>
            </div>
            <div className='feed__inputOptions'>
                <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9'/>
                <InputOption Icon={SubscriptionsIcon} title='Video' color='#E7A33E'/>
                <InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD'/>
                <InputOption Icon={CalendarViewDayIcon} title='Write article' color='#7FC15E'/>
            </div>
        </div>
        
            {/* Posts */}
            {posts.map(({id, data:{name, description, message, photoUrl
                }})=>(
                <Post 
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}
            {!!posts &&
            <>
            <Post 
                name="Raneru Lathpandura" 
                description="This is a test" 
                message="test Message" 
            />
            <Post 
                name="Raneru Lathpandura" 
                description="This is a test" 
                message="test Message" 
            />
            <Post 
                name="Raneru Lathpandura" 
                description="This is a test" 
                message="test Message" 
            />
            <Post 
                name="Raneru Lathpandura" 
                description="This is a test" 
                message="test Message" 
            />
            <Post 
                name="Raneru Lathpandura" 
                description="This is a test" 
                message="test Message" 
            />
            <Post 
                name="Raneru Lathpandura" 
                description="This is a test" 
                message="test Message" 
            />
            <Post 
                name="Raneru Lathpandura" 
                description="This is a test" 
                message="test Message" 
            />
            <Post 
                name="Raneru Lathpandura" 
                description="This is a test" 
                message="test Message" 
            />
            </>  
        }
    </div>
  )
}
