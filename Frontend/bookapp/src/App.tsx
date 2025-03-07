import './App.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import { signupAction } from './pages/AuthPage'
import HomePage from './pages/HomePage'

import ProfilePage from './pages/ProfilePage'


const router=createBrowserRouter([
  {path:"/",element:<AuthPage />,action:signupAction},
  {path:"/HomePage",element:<HomePage />},
])


function App() {
  return <RouterProvider router={router} />
}

export default App
