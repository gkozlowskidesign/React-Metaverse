import React from 'react'
const Foundation = () => {
return (
  <div>           
    <div class="px-3 md:lg:xl:px-40 py-20 bg-gradient-to-b from-black via-purple-900 to-pink-900">
      <div class="grid grid-cols-1 md:lg:xl:grid-cols-3 gap-8 group rounded-xl">
  
  
              <a href="/documentation">
                      <div class="p-10 w-4/6 bg-gray-900 flex flex-col items-center  text-center group  hover:bg-gray-200 cursor-pointer rounded-xl">
                          <span class="p-5 rounded-full bg-gradient-to-r from-black to-pink-900 text-white shadow-lg shadow-black"><svg
                                  xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
                                  stroke="currentColor" stroke-width="1.5">
                                  <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                              </svg></span>
                          <p class="text-xl font-medium text-gray-400 mt-3">GitBook</p>
                      </div>
                </a>
  
  
                <a href="http://metaverseofthings.blog">
                      <div class="p-10 bg-gray-900 flex flex-col items-center  text-center group hover:bg-gray-200 cursor-pointer rounded-xl">
                          <span class="p-5 rounded-full bg-gradient-to-r from-black to-pink-900 text-white shadow-lg shadow-black"><svg
                                  xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
                                  stroke="currentColor" stroke-width="1.5">
                                  <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                              </svg></span>
                          <p class="text-xl font-medium text-gray-400 mt-3">Medium</p>
                      </div>
                </a>


              <a href="https://twitter.com/metaverseot">
                      <div class="p-10 bg-gray-900 flex flex-col items-center  text-center group  hover:bg-gray-200 cursor-pointer rounded-xl">
                          <span class="p-5 rounded-full bg-gradient-to-r from-black to-pink-900 text-white shadow-lg shadow-black"><svg
                                  xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
                                  stroke="currentColor" stroke-width="1.5">
                                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                  <polyline points="14 2 14 8 20 8"></polyline>
                                  <line x1="16" y1="13" x2="8" y2="13"></line>
                                  <line x1="16" y1="17" x2="8" y2="17"></line>
                                  <polyline points="10 9 9 9 8 9"></polyline>
                              </svg></span>
                          <p class="text-xl font-medium text-gray-400 mt-3">Twitter</p>
                      </div>
                </a>
  
  
          </div>
       </div>
 </div>     
  )
}
export default Foundation
