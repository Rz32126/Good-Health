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
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AvailableCamp from './components/AvailableCamp';

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
    ]
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
         <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
)
