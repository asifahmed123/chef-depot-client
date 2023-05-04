import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
     const { error, status } = useRouteError()
     console.log(error.statusText);
     return (
          <div className='text-center flex flex-col items-center justify-center h-[100vh]'>
               <div className='text-5xl font-bold mb-5'>
                    {
                         status ?
                              <h2>{status} Not Found</h2>
                              :
                              <h2>Unknown Error Code</h2>
                    }
               </div>
               <h4 className='font-semibold text-2xl'><i>{error?.statusText || error?.message}</i></h4>
               <img className='w-6/12 mx-auto' src="https://img.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page-internet-error-page-issue-found-network-404-error-present-by-man-sleep-display_1150-55450.jpg?w=1060&t=st=1683134369~exp=1683134969~hmac=43ecd74ba47f06aa42a36a637aba9d83dcb17e54092f38d9b4c1d141be2f5212" alt="" />

               <Link to='/'><button className='bg-blue-500 py-2 px-3 rounded font-bold text-white'>Go back to Homepage</button></Link>
          </div>
     );
};

export default Error;