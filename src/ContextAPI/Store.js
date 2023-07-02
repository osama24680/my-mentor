import { createContext } from "react";



export const mentorStore = createContext(0)
export const MentorProvider = (props) => {

    let values = {
        projectName: "My Mentor Project "
    }

    return (
        <mentorStore.Provider value={values}>
            {props.children}
        </mentorStore.Provider>
    )
}

















