import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {HomeApp} from './HomeApp'
import {LoginApp} from './LoginApp'
import {LoginProvider} from './contexts/LoginContext' 
import {DelayedRender} from './Test'


export function App() {
  return (
    <LoginProvider>
      <Router>
          <Routes>
            <Route path="/" element={<HomeApp />} />
            <Route path="/login" element={<LoginApp />} />
            <Route path='/test' element={<DelayedRender />} />
          </Routes>
      </Router>
    </LoginProvider>  
  )
}