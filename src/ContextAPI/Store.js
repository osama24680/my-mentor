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
import { useNavigate } from "react-router-dom";

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
  const [isLoggedin, setIsLoggedin] = useState(true);
  const [lookinOptions, setLookinOptions] = useState(lookinOptionsData);
  const [designationOptions, setDesignationOptions] = useState(
    designationOptionsData
  );
  const [selectedLookingOption, setSelectedLookingOption] = useState("Mentee");
  const [selectedDesignationOption, setSelectedDesignationOption] =
    useState(null);
  const [isMenteeOption, setIisMenteeOption] = useState(false);
  const [editUserArray, setEditUserArray] = useState([1]);
  const [skillValue, setSkillValue] = useState("");
  const [skillValuesArray, setSkillValuesArray] = useState([]);
  const [activeJop, setActiveJop] = useState(false);
  const [searchJopValue, setSearchJopValue] = useState("Jop");
  const [activeMentor, setActiveMentor] = useState(false);
  const [searchMentorValue, setSearchMentorValue] = useState("Mentor");
  const [activeExperience, setActiveExperience] = useState(false);
  const [searchExperienceValue, setSearchExperienceValue] = useState("Experience");
  const [mentorships, setMentorships] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [mentees, setMentees] = useState([]);
  const [menteeships, setMenteeships] = useState([]);
  const [mentorStars, setMentorStars] = useState([1, 2, 3, 4, 5]);
  const [area, setArea] = useState({ value: 'Alexandria', label: 'Alexandria' });
  const [isChecked, setIsChecked] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [userProfiles, setUserProfiles] = useState([]);
  const [data , setData] = useState()


  const [allUsers, setAllUsers] = useState([])

  const [signupNameValue, setSignupNameValue] = useState("")
  const [signupEmailValue, setSignupEmailValue] = useState("")
  const [signupPasswordValue, setSignupPasswordValue] = useState("")
  const [signup_R_PasswordValue, setSignup_R_PasswordValue] = useState("")


  const navigate = useNavigate();
  let form = useRef();
  let areas = [
    { value: "Alexandria", label: "Alexandria" },
    { value: "Cairo", label: "Cairo" },
  ]


  const changeData = (newData)=>{
    setData(newData)
  }






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
  const addUserExperienceInput = () => {
    let newArray = editUserArray
    newArray.push(newArray.length + 1)
    setEditUserArray([...newArray]);
  };
  const getSkill = (e) => {
    if (e.key === 'Enter') {
      let newValues = skillValuesArray
      newValues.push(skillValue)
      setSkillValuesArray([...newValues]);
      setSkillValue("")
    }


  };
  const handleActiveJop = () => {
    let value = !activeJop
    setActiveJop(value)
    setActiveMentor(false)
    setActiveExperience(false)
  };
  const handleActiveMentor = () => {
    let value = !activeMentor
    setActiveMentor(value)
    setActiveJop(false)
    setActiveExperience(false)
  };
  const handleActiveExperience = () => {
    let value = !activeExperience
    setActiveExperience(value)
    setActiveJop(false)
    setActiveMentor(false)
  };
  const handleActiveJopList = (e) => {
    if (e.target.innerHTML.includes("svg") || e.target.innerHTML.includes("path")) {

    } else {
      setSearchJopValue(e.target.innerHTML)
      handleActiveJop()
    }

  };
  const handleActiveMentorList = (e) => {
    if (e.target.innerHTML.includes("svg") || e.target.innerHTML.includes("path")) {

    } else {
      setSearchMentorValue(e.target.innerHTML)
      handleActiveMentor()
    }
  };
  const handleActiveExperienceList = (e) => {
    if (e.target.innerHTML.includes("svg") || e.target.innerHTML.includes("path")) {

    } else {
      setSearchExperienceValue(e.target.innerHTML)
      handleActiveExperience()
    }

  };

  const fetchMentorships = () => {
    setMentorships([...JSON.parse(localStorage.getItem("mentorshipsData"))])
  }
  const fetchMentors = () => {
    setMentors([...JSON.parse(localStorage.getItem("mentorsData"))])
  }
  const fetchMenteeships = () => {
    setMenteeships([...JSON.parse(localStorage.getItem("menteeshipsData"))])
  }

  const menteeData = () => {
    setMentees([...JSON.parse(localStorage.getItem("menteeData"))])
  }
  const userProfilesData = () => {
    setUserProfiles([...JSON.parse(localStorage.getItem("userProfilesData"))])
  }




  const handleCheckBox = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)


    let checked = e.target.checked
    let value = Number(e.target.value)
    let filteredData;
    if (checked) {
      if (value === 5 || value === 4 || value === 3 || value === 2 || value === 1) {
        filteredData = mentorships.filter(men => men.stars === value)
        console.log(filteredData)
        setMentorships([...filteredData])
      }
      else {
        console.log("no value")
      }
    } else {
      console.log("no check")
    }
  }


  const handleCheckBoxMentee = (e) => {
    let filterLocationData
    let filterCheckedData;
    let checked = e?.target.checked

    let localStorageMenteeShips = [...JSON.parse(localStorage.getItem("menteeshipsData"))]
    filterLocationData = localStorageMenteeShips.filter(mentee => mentee.city === area.value)
    setMenteeships([...filterLocationData])

    if (checked) {
      filterCheckedData = filterLocationData.filter(mentee => mentee.hired === "Yes")
      setMenteeships([...filterCheckedData])
    } else {
      filterCheckedData = filterLocationData.filter(mentee => mentee.hired === "No")
      setMenteeships([...filterCheckedData])
    }
  }


  const handleCheckBoxOpportunity = (e) => {

    let filterLocationData
    let filterCheckedData;
    let checked = e?.target.checked


    let localStorageMentorShips = [...JSON.parse(localStorage.getItem("mentorshipsData"))]
    filterLocationData = localStorageMentorShips.filter(mentor => mentor.city === area.value)
    setMentorships([...filterLocationData])

    if (checked) {
      filterCheckedData = filterLocationData.filter(mentor => mentor.isHired === true)
      setMentorships([...filterCheckedData])
    } else {
      filterCheckedData = filterLocationData.filter(mentor => mentor.isHired === false)
      setMentorships([...filterCheckedData])
    }



    if (checked) {
      filterCheckedData = filterLocationData.filter(mentor => mentor.isPaid === true)
      setMentorships([...filterCheckedData])
    } else {
      filterCheckedData = filterLocationData.filter(mentor => mentor.isPaid === false)
      setMentorships([...filterCheckedData])
    }


    if (checked) {
      filterCheckedData = filterLocationData.filter(mentor => mentor.isCertificate === true)
      setMentorships([...filterCheckedData])
    } else {
      filterCheckedData = filterLocationData.filter(mentor => mentor.isCertificate === false)
      setMentorships([...filterCheckedData])
    }
    // ********************************11111****************************


    if (checked) {
      filterCheckedData = filterLocationData.filter(mentor => mentor.isCertificate === true)
      setMentorships([...filterCheckedData])
    } else {
      filterCheckedData = filterLocationData.filter(mentor => mentor.isCertificate === false)
      setMentorships([...filterCheckedData])
    }

  }

  const handleCheckBoxRequest = (e) => {

    let filterLocationData
    let filterCheckedData;
    let filterCheckedDataLookin;
    let checked = e?.target.checked
    let inputName = e?.target.name


    let localStorageMenteeShips = [...JSON.parse(localStorage.getItem("menteeshipsData"))]
    filterLocationData = localStorageMenteeShips.filter(mentee => mentee.city === area.value)
    setMenteeships([...filterLocationData])


    if (checked) {
      if (inputName === "Paid") {
        filterCheckedData = filterLocationData.filter(mentee => mentee.isPaid === true)
        setMenteeships([...filterCheckedData])
        if (inputName === "lookingJop") {
          filterCheckedDataLookin = filterLocationData.filter(mentee => mentee.lookingForJop === true)
          setMenteeships([...filterCheckedData, ...filterCheckedDataLookin])
        } else {
          filterCheckedDataLookin = filterLocationData.filter(mentee => mentee.lookingForJop === false)
          setMenteeships([...filterCheckedData, ...filterCheckedDataLookin])
        }
      } else {
        filterCheckedData = filterLocationData.filter(mentee => mentee.isPaid === false)
        setMenteeships([...filterCheckedData])

        if (inputName === "lookingJop") {
          filterCheckedDataLookin = filterLocationData.filter(mentee => mentee.lookingForJop === true)
          setMenteeships([...filterCheckedData, ...filterCheckedDataLookin])
        } else {
          filterCheckedDataLookin = filterLocationData.filter(mentee => mentee.lookingForJop === false)
          setMenteeships([...filterCheckedData, ...filterCheckedDataLookin])
        }
      }

    }


  }


  const searchHome = () => {

    if (searchValue.trim()) {
      if (searchValue === "Mentor" || searchValue === "Mentee") {
        if (searchValue === "Mentor") {
          navigate("/SearchResults/MentorSearch")
        } else if (searchValue === "Mentee") {
          navigate("/SearchResults/MenteeSearch")
        }
      }
    }
  }
// const HandleSignup=(e)=>{
//   navigate("/login")
// }

  useEffect(() => {

    handleCheckBoxMentee()
    handleCheckBoxOpportunity()
    handleCheckBoxRequest()
  }, [area])


  useEffect(() => {
    if (
      selectedLookingOption?.value === "Mentee" ||
      selectedLookingOption === "Mentee"
    ) {
      setIisMenteeOption(true);
    } else {
      setIisMenteeOption(false);
    }
    fetchMentorships()
    fetchMentors()
    fetchMenteeships()
    menteeData()
    userProfilesData()


    if (localStorage.getItem("localUsers") == null) {
      setAllUsers([])
    } else {
      setAllUsers([...JSON.parse(localStorage.getItem("localUsers"))])
    }

  }, [selectedLookingOption, editUserArray,]);

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
    editUserArray,
    addUserExperienceInput,
    getSkill,
    skillValue,
    skillValuesArray,
    setSkillValue,
    handleActiveJop,
    handleActiveJopList,
    activeJop,
    searchJopValue,
    handleActiveMentor,
    activeMentor,
    handleActiveMentorList,
    searchMentorValue,
    handleActiveExperienceList,
    searchExperienceValue,
    activeExperience,
    mentorships,
    mentors,
    handleCheckBox,
    areas,
    area,
    setArea,
    handleCheckBoxMentee,
    menteeships,
    mentees,
    handleCheckBoxOpportunity,
    handleCheckBoxRequest,
    // HandleSignup,
    signupNameValue,
    setSignupNameValue,
    setSignupEmailValue,
    signupEmailValue,
    signupPasswordValue,
    setSignupPasswordValue,
    signup_R_PasswordValue,
    setSignup_R_PasswordValue,
    setSearchValue,
    searchValue,
    searchHome,
    userProfiles,
    changeData,
    data,


  };

  return (
    <mentorStore.Provider value={values}>{props.children}</mentorStore.Provider>
  );
};
