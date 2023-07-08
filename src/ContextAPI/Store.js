import { createContext, useState, useRef, useEffect } from "react";
import {
  discoverMentorsData,
  recentOppoData,
  mentoringRequestsData,
  lookinOptionsData,
  designationOptionsData,
} from "./Data";

import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

export const mentorStore = createContext(0);
export const MentorProvider = (props) => {
  const [active, setActive] = useState(false);
  const [fields, setFields] = useState([
    "Ux Designer",
    "Ui Designer",
    "Front-end Developer",
    "Back-end Developer",
    "Data Scientist",
    "Graphic Designer",
  ]);
  const [discoverMentors, setDiscoverMentors] = useState(discoverMentorsData);
  const [recentOppo, setRecentOppo] = useState(recentOppoData);
  const [mentoringRequests, setMentoringRequests] = useState(
    mentoringRequestsData
  );
  const [inviteValue, setInviteValue] = useState("");
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [lookinOptions, setLookinOptions] = useState(lookinOptionsData);
  const [designationOptions, setDesignationOptions] = useState(designationOptionsData);
  const [selectedLookingOption, setSelectedLookingOption] = useState("Mentee");
  const [selectedDesignationOption, setSelectedDesignationOption] = useState(null);
  const [isMenteeOption, setIisMenteeOption] = useState(false);
  let form = useRef();

  const accountToggle = () => {
    let ini_active = !active;
    setActive(ini_active);
  };
  const handleInviteValue = (e) => {
    e.preventDefault();
    if (inviteValue.trim().length > 0) {
      toast("Email has been sent successfully");
      emailjs
        .sendForm(
          "service_f0dhnn6",
          "template_g6uya0e",
          form.current,
          "1o7X5mK6MhxogzwGi"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setInviteValue("");
    }
  };

  useEffect(()=>{
    if(selectedLookingOption?.value==="Mentee" ||selectedLookingOption==="Mentee"){
      setIisMenteeOption(true)
    }else{
      setIisMenteeOption(false)
    }
  
  },[selectedLookingOption])

  let values = {
    discoverMentors,
    recentOppo,
    mentoringRequests,
    accountToggle,
    handleInviteValue,
    active,
    fields,
    inviteValue,
    setInviteValue,
    form,
    isLoggedin,
    lookinOptions,
    designationOptions,
    selectedLookingOption,
    setSelectedLookingOption,
    selectedDesignationOption,
    setSelectedDesignationOption,
    isMenteeOption,
    
  };

  return (
    <mentorStore.Provider value={values}>{props.children}</mentorStore.Provider>
  );
};
