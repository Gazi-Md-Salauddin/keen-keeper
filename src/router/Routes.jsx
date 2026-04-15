import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../layout/RootLayout'
import Homepage from '../pages/homepage/Homepage'
import Timeline from '../pages/Timeline/Timeline'
import Stats from '../pages/Stats/Stats'
import FriendDetails from '../components/FriendDetails/FriendDetails'


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {
        index: true,
        element: <Homepage/>,
         loader:() => fetch("/friends.json"),
      },
      {
        path: "/timeline",
        element: <Timeline/>,
      },
      {
        path: "/stats",
        element: <Stats/>,
      },
      {
        path: "/Friend/:id",
        element: <FriendDetails/>,
        loader: () => fetch("/friends.json"),
      },
      ]
  }
  ])