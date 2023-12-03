import axios from 'axios'
import {useEffect, useState} from 'react'

const Codeforces = () => {
    const  [userData,setUserData] = useState(null)
    const  [contests,setContests] = useState([])
    const [loading,setLoading] = useState(true)

    const getData = async() => {
        try {
            setLoading(true)
            const {data} = await axios.get('https://codeforces.com/api/user.info?handles=ishan_sen')
            setUserData({...data.result})
            setLoading(false)
            getContests()
            // console.log(userData)
        } catch (error) {
            console.log(error)
        }
    }

    const getContests = async() =>{
        try {
            setLoading(true)
            const {data} = await axios.get('https://codeforces.com/api/user.rating?handle=ishan_sen')
            setContests(data.result)
            setLoading(false)
            // console.log(contests.length)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
      getData();
    }, [])

    if(loading) return (
    <>
        <div className=' p-6 flex flex-col gap-3 sm:w-[80%] mx-auto text-lg'>
            <div className='flex justify-between'>
            <p className=''>Rank </p><span className='uppercase text-green-600 font-bold'>-</span>
            </div>
            <div className='flex justify-between'>
            <p>Max Rating </p><span>-</span>
            </div>
            <div className='flex justify-between'>
            <p>Current Rating</p> <span>-</span>
            </div>
            <div className='flex justify-between'>
            <p>Contests </p><span>-</span>
            </div>   
        </div>
    </>)

  return (
    <>
        <div className=' p-6 flex flex-col gap-3 sm:w-[80%] mx-auto text-lg'>
            <div className='flex justify-between'>
            <p className=''>Rank </p><span className='uppercase text-green-600 font-bold'>{userData[0].rank}</span>
            </div>
            <div className='flex justify-between'>
            <p>Max Rating </p><span>{userData[0].maxRating}</span>
            </div>
            <div className='flex justify-between'>
            <p>Current Rating</p> <span>{userData[0].rating}</span>
            </div>
            <div className='flex justify-between'>
            <p>Contests </p><span>{contests.length}</span>
            </div>   
        </div>
    </>
    
  )
}

export default Codeforces

