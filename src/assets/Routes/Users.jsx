import React, { useEffect, useRef, useState } from 'react'
import UsersContainer from '../components/UsersContainer';
import Loading from '../components/Loading';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(null);
  const BaseURL = "https://api.github.com/users";
  const user = useRef('');

  async function FindUser() {
    const input = user.current.value.trim(); 
    setLoading(true);

    try {
      let res;

      if (input === "") {
        res = await fetch(`${BaseURL}?since=55`);
      } else {
        res = await fetch(`${BaseURL}/${input}`);
      }

      if (res.status === 403) {
        const errorData = await res.json();
        if (errorData.message?.includes("API rate limit exceeded")) {
          throw new Error("API rate limit exceeded. Please try again in a few minutes.");
        } else {
          throw new Error("Access denied by GitHub.");
        }
      }

      if (!res.ok) {
        throw new Error("User not found (404)");
      }

      const data = await res.json();
      if (input === "") {
        setUsers(data);
      } else {
        setUsers([data]);
        user.current.value = ""; 
      }
    } catch (err) {
      console.error(err.message);
      alert(err.message);
      user.current.value = ""; 

      if (!err.message.includes("rate limit")) {
        FindUser(); 
      }
    }

    setLoading(false);
  }

  useEffect(() => {
    FindUser(); 
  }, []);

  return (
    <div>
      <div className='flex justify-center items-center h-11 my-5'>
        <input
          type="text"
          placeholder='search github user name'
          className='h-full md:w-1/3 w-2/3 text-gray-800 px-2 font-semibold outline-none bg-amber-50 rounded'
          ref={user}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const input = user.current.value.trim();
              if (input === "") {
                alert("Please enter a GitHub username to search.");
                return;
              }
              FindUser(); 
            }
          }}
        />
        <button
          onClick={() => {
            const input = user.current.value.trim();
            if (input === "") {
              alert("Please enter a GitHub username to search.");
              return;
            }
            FindUser(); 
          }}
          className='bg-pink-600 font-semibold px-4 h-full mx-1.5 border-amber-50 rounded active:scale-90'>
          Search
        </button>
        <button
          onClick={() => {
            FindUser();
          }}
          className='bg-amber-50 font-semibold px-4 h-full text-pink-600 border-amber-50 rounded active:scale-90'>
          Back
        </button>
      </div>

      {loading ? <Loading /> : <UsersContainer users={users} />}
    </div>
  );
}

export default Users;
