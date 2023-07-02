import { useContext} from "react"
import {mentorStore} from "../../ContextAPI/Store"
<<<<<<< HEAD
<<<<<<< HEAD
import "./Home.scss"
=======
// import "./Home.css"
>>>>>>> f544ea2 (ss)
=======
import "./Home.scss"
>>>>>>> 1441eef0922ca4fe3a71059534ecb57e54ce1a4d
const Home = () => {
  const ctx=useContext(mentorStore)
  return (
    <div>{ctx.projectName}</div>
  )
}

export default Home