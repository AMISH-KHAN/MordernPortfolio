import React from 'react'

export default function Github() {
  return (
    <>
          <section id='github'>
          <h1 className='h-[7rem]  text-white text-3xl flex items-center justify-center'>GitHub Stats </h1>
        <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
                  <div class="flex md:flex-row flex-col justify-between gap-10"> 
                      <img src="https://github-readme-stats.vercel.app/api?username=AMISH-KHAN&theme=dark&hide_border=false&include_all_commits=true&count_private=true" alt="" />
                      <img src="https://github-readme-streak-stats.herokuapp.com/?user=AMISH-KHAN&theme=dark&hide_border=false" alt="" />
                      <img src="https://github.com/users/AMISH-KHAN/contributions" alt="" />
                      </div>
                      </div>
      </section>
    </>
  )
}
