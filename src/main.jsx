import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  BrowserRouter,
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";


import { HooksApp } from './HooksApp.jsx'
import { CounterApp } from './01-useState/CounterApp.jsx'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook.jsx'
import { SimpleForm } from './02-useEffect/SimpleForm.jsx'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook.jsx'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks.jsx'
import { FocusScreen } from './04-useRef/FocusScreen.jsx'
import { Memorize } from './06-memos/Memorize.jsx'
import { MemoHook } from './06-memos/MemoHook.jsx'
import { CallbalHook } from './06-memos/CallbalHook.jsx'
import { Padre } from './07-tarea-memo/Padre.jsx'
import { TodoApp } from './08-useReducer/TodoApp.jsx'
import { MainApp } from './09-useContext/MainApp.jsx'
import { AboutPage } from './09-useContext/AboutPage.jsx';
import { HomePage } from './09-useContext/HomePage.jsx';
import { LoginPage } from './09-useContext/LoginPage.jsx';

//import './08-useReducer/intro-reducer'


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainApp/>,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: "about",
        element: <AboutPage />
      },
      {
        path: "login",
        element: <LoginPage />
      },
      {
        path: "*",
        element: <Navigate  to="/"  replace />
      },
    ]
  },
  
]);

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,

  
)
