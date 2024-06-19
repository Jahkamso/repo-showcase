"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type Owner = {
    avatar_url: string
}

type Repositories = {
    id: number,
    full_name: string,
    avatar_url: string,
    url: string,
    owner: Owner
}

export default function Repos() {
    const [repositories, setRepositories] = useState<Repositories[]>([])
    const [repoFetchError, setRepoFetchError] = useState<string>("")

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch("https://api.github.com/users/Jahkamso/repos")
                const data = await response.json()
                console.log(data)
                setRepositories(data)
            } catch (error) {
                setRepoFetchError("Error Fetching Repos")
            }
        }
        fetchRepos()
    }, [repositories])

  return (
    <div className="grid grid-cols-3 gap-5 items-center px-[15%]">
      {repositories.map((repos) => (
        <div
          key={repos.id}
          className="relative flex flex-col items-center gap-3 bg-blue-700 text-white rounded-md py-2 px-5"
        >
          <div className="flex items-center justify-between w-full">
            <h2>{repos.full_name}</h2>
            <img
              className="w-[30px] rounded-[50%]"
              src={repos.owner.avatar_url}
              alt=""
            />
          </div>
          <div>
          <Link href={repos.url} target='_blank'>
            <button className='bg-blue-600 py-2 px-5 rounded-md'>Visit Repo</button>
          </Link>
          </div>
        </div>
      ))}
    </div>
  );
}