import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Repo from '../components/Repo'
const headers = {
  Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
};
const Userinfo = () => {
    const[user, setUser] = useState([])
    const[type, setType] = useState("repos")
    const {pathname} = useLocation();
    const navigate = useNavigate()
    let BaseURL = "https://api.github.com/users"

    async function GetUserInfo() {
        const res = await fetch(BaseURL + pathname, { headers })
        const data = await res.json()
        setUser(()=>[data])
    }

    useEffect(()=>{
        GetUserInfo() 
    },[pathname,type])

  return (
    <div>
      <button  onClick={()=>navigate('/')}  className='px-5 py-1 font-medium mx-1 my-4 bg-amber-50 text-pink-600 rounded p-1 m-1' >
        Back
      </button>
      {
        user && user?.map((uinfo,i)=>(
            <div key={i} className='flex justify-center md:flex-row md:px-0 px-4 flex-col gap-10' >
                <img src={uinfo.avatar_url} className='w-[350px] border-4 border-amber-50 md:mx-0 mx-auto rounded-full' />
                <div  className='text-lg px-3 leading-10 mt-10 font-mono' >
                    <h1 className='text-3xl pb-4 ' >{uinfo?.name}</h1>
                    <h1><span className='text-pink-600' >Login Name</span> : {uinfo?.login}</h1>
                    <h1><span className='text-pink-600' >Location</span> : {uinfo?.location}</h1>
                    <h1><span className='text-pink-600' >Followers</span> : {uinfo?.followers}</h1>
                    <h1><span className='text-pink-600' >Following</span> : {uinfo?.following}</h1>
                    <h1><span className='text-pink-600' >Public Repositories</span> : {uinfo?.public_repos}</h1>
                    <a href={uinfo?.html_url} target='_blank' className='text-gray-200 font-semibold rounded cursor-pointerpx-4 py-1 px-2 bg-pink-600 my-3 tracking-wide' >Vist Profile</a>
                </div>
            </div>
        ))
      }
      <div className='flex border-b pb-4 gap-6 mt-[10%] mb-6 justify-center md:text-xl w-screen' >
        <button className={`${type==='repos' && 'text-pink-600' }`}  onClick={()=>setType("repos")}   type={type} setType={setType}>
        </button>
        
        {type==="repos" && (
          <div> 
           {type === "repos" && (
          <div>
            <Repo username={user[0]?.login} />
          </div>
        )}
          </div>
        )} 
          
      </div>
    </div>
  )
}

export default Userinfo
