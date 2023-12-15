import axios from 'axios'
import {useEffect, useState} from 'react'

const Leetcode = () => {
    const  [userData,setUserData] = useState({})
    const getData = async() => {
        try {
            const {data} = await axios.get('https://leetcode-stats-api.herokuapp.com/Jolly_Bolt')
            setUserData({...data})
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
      getData();
    }, [])

    const meterStyle = {
        background:`conic-gradient(#ffa015 ${(userData.totalSolved/userData.totalQuestions)*360}deg,#4A4A4A 0deg)`,
    }
    
    
  return (
    <div>
        <div className='text-white sm:pl-5 rounded-2xl'>     
            <div className='flex flex-row gap-1 sm:gap-5'>
                <div className=' flex items-center justify-center mt-6 sm:mt-0'>
                    <div 
                    className={`h-[100px] sm:h-[130px] w-[100px] sm:w-[130px] flex items-center justify-center rounded-full`} 
                    style={meterStyle}                 
                    >
                        <div className='flex flex-col items-center bg-tertiary justify-center h-[90px] w-[90px] sm:h-[120px] sm:w-[120px] rounded-full' >                          
                                <span className='text-2xl font-extrabold'>{userData.totalSolved}</span>
                                <span className='text-xs'>Solved</span>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='p-3'>
                        <p><span className='text-xs'>Easy</span> <span className='ml-3 text-lg font-bold'>{userData.easySolved}</span><span className='text-xs'> / {userData.totalEasy}</span></p>
                        <div className='h-2 rounded-full bg-[#2E4D36] mt-2'>
                            <div 
                            className={`easy-meter h-2 rounded-full bg-[#00B8A2]  `}
                            style={{width:`${(userData.easySolved*100/userData.totalEasy).toFixed(2)}%`}}
                            >
                            </div>
                        </div>
                    </div>
                    <div className='p-3'>
                        <p><span className='text-xs'>Medium</span> <span className='ml-3 text-lg font-bold'>{userData.mediumSolved}</span><span className='text-xs'> / {userData.totalMedium}</span></p>
                        <div 
                        className='h-2 rounded-full bg-[#5E4E2B] mt-2'
                        >
                            <div 
                            className={`medium-meter h-2 rounded-full bg-[#FFA015] `}
                            style={{width:`${(userData.mediumSolved/userData.totalMedium * 100).toFixed(2)}%`}}
                            >
                            </div>
                        </div>
                    </div>
                    <div className='p-3'>
                        <p><span className='text-xs'>Hard</span> <span className='ml-3 text-lg font-bold'>{userData.hardSolved}</span><span className='text-xs'> / {userData.totalHard}</span></p>
                        <div className='h-2 rounded-full bg-[#5A3130] mt-2'>
                            <div 
                            className={`hard-meter h-2 rounded-full bg-[#EF4643] `}
                            style={{width:`${(userData.hardSolved/userData.totalHard * 100).toFixed(2)}%`}}
                            >
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Leetcode