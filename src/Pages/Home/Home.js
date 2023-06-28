import { useContext} from "react"
import {mentorStore} from "../../ContextAPI/Store"
import "./Home.scss"
const Home = () => {
  const ctx=useContext(mentorStore)
  return (
    <div>{ctx.projectName}</div>
  )
}

export default Home