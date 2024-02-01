import { Navbar } from "./components/Navbar"
import AppRouter from "./routes/AppRouter"

import './assets/styles.css'

export const App = () => {


  return (
    <div className="background">
      <div>
        <Navbar />
      </div>
      <div>
        <AppRouter />
      </div>
    </div>
  )
}
