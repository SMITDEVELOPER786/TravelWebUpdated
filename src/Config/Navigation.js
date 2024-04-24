import React from 'react'
import { lazy,Suspense } from 'react'
import Loader from '../Common/Loader'


// const Dashboard = lazy(() => import("./pages/dashboard"));

const Login = lazy(()=> import("../Components/Login"))





function Navigation() {
  return (
    <>




<Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <Login/>
            </Suspense>
          }
        />






      
    </>
  )
}

export default Navigation
