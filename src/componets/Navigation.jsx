import React from 'react'
import 'flowbite';
const Navigation = () => {
return (

<nav class="bg-black border-gray-200 px-2 sm:px-4 py-2.5">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    <a href="https://flowbite.com/" class="flex items-center">
        <img src="https://github.com/gkozlowskidesign/React-MVoT-Website/blob/codespace-gkozlowskidesign-opulent-chainsaw-59jvrpj6p56fp7w5/MVOT%20LOGO%20copy.png?raw=true" class="h-20 mr-3" alt="Flowbite Logo" />
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:border-gray-700">
        <li>
          <a href="/" 
          class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 
          md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-white
          md:dark:hover:text-purple-700 dark:hover:bg-purple-700 dark:hover:text-purple-700 
          md:dark:hover:bg-transparent" 
          >Getting Started</a>
        </li>
        <li>
          <a href="/foundation" 
          class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 
          md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-white
          md:dark:hover:text-purple-700 dark:hover:bg-purple-700 dark:hover:text-purple-700 
          md:dark:hover:bg-transparent">Foundations</a>
        </li>
        <li>
          <a href="/learning" 
          class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 
          md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-white
          md:dark:hover:text-purple-700 dark:hover:bg-purple-700 dark:hover:text-purple-700 
          md:dark:hover:bg-transparent">Education</a>
        </li>
        <li>
          <a href="https://mvot-analyitcs.netlify.app/" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 
          md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-white
          md:dark:hover:text-purple-700 dark:hover:bg-purple-700 dark:hover:text-purple-700 
          md:dark:hover:bg-transparent">Finance</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  


)};
export default Navigation
            
   
