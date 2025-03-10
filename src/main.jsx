import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import AuthProvider from './provider/AuthProvider';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AvailableCamp from './components/AvailableCamp';
import AddCamp from './forms/AddCamp';
import MyProfile from './components/MyProfile';
import ManageCamp from './components/ManageCamp';
import ManageRegister from './components/ManageRegister';
import Analytics from './components/Analytics';
import CampRegister from './components/CampRegister';
import Payment from './components/Payment';
import CampDetails from './components/CampDetails';
import { Toaster } from 'react-hot-toast';
import UpdateCamp from './forms/UpdateCamp';
import PrivetRoute from './provider/PrivetRoute';
import AdminRoute from './provider/AdminRoute';
import ParticipantRoute from './provider/ParticipantRoute';
import PayDonePage from './components/PayDonePage';
import FeedBack from './tables/FeedBack';
import Profile from './components/Profile';
import Blog from './components/Blog';

const queryClient = new QueryClient()

const router = createBrowserRouter([
  { path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/available-camps',
        element: <AvailableCamp></AvailableCamp>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/camp-details/:id',
        element: <CampDetails></CampDetails>
      },
      {
        path: '/update-camp/:id',
        element: <UpdateCamp></UpdateCamp>
      },
    ]
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        index: true,
        element: <PrivetRoute>
                   <MyProfile></MyProfile>
                </PrivetRoute>
      },
      {
        path: 'add-camp',
        element: <PrivetRoute>
                     <AdminRoute>
                        <AddCamp></AddCamp>
                     </AdminRoute>
                 </PrivetRoute>
      },
      {
        path: 'manage-camp',
        element: <PrivetRoute>
                   <AdminRoute>
                     <ManageCamp></ManageCamp>
                   </AdminRoute>
                 </PrivetRoute>
      },
      {
        path: 'manage-register',
        loader: () => fetch('https://assignment-12-server-kappa-flame.vercel.app'),
        element: <PrivetRoute>
          <AdminRoute>
            <ManageRegister></ManageRegister>
          </AdminRoute>
        </PrivetRoute>
      },
      {
        path: 'analytics',
        element: <PrivetRoute>
          <ParticipantRoute>
             <Analytics></Analytics>
          </ParticipantRoute>
        </PrivetRoute>
      },
      {
        path: 'camp-register',
        loader: () => fetch('https://assignment-12-server-kappa-flame.vercel.app'),
        element: <PrivetRoute>
          <ParticipantRoute>
              <CampRegister></CampRegister>
          </ParticipantRoute>
        </PrivetRoute>
      },
      {
        path: 'payment',
        element: <PrivetRoute>
          <Payment></Payment>
        </PrivetRoute>
      },
      {
        path: 'pay/:id',
        element: <PayDonePage></PayDonePage>
      },
      {
        path: 'feedback',
        element: <FeedBack></FeedBack>
      },
      {
        path: 'my-profile',
        element: <PrivetRoute>
          <Profile></Profile>
        </PrivetRoute>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
         <RouterProvider router={router} />
      </QueryClientProvider>
      <Toaster></Toaster>
    </AuthProvider>
  </StrictMode>,
)
