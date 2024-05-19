import { useEffect, useState, createContext, useContext } from "react";
import axios from "axios";
import * as Yup from "yup";
import { useLocation } from "react-router-dom";

const studentContext = createContext("");

export function UseStudentContext() {
  return useContext(studentContext);
}

export default function StudentProvider({ children }) {
  const [studentData, setStudentData] = useState([]);
  const [courseData, setCourseData] = useState([]);
  
  const [coursesList, setCoursesList] = useState([]);
  
  const [openAdd, setOpenAdd] = useState(false);
  const [openUp, setOpenUp] = useState(false);
  
  const [openStdUp, setOpenStdUp] = useState(false);
  const [openStdNw, setOpenStdNw] = useState(false);
  
  const [dataMessage, setDataMessage] = useState({})
  
  const [stdSearchitem,setStdSearchitem] = useState('')
  const [stdSearch, setStdSearch ] = useState([])
  
  const [courseSearchitem,setCourseSearchitem] = useState('')
  const [courseSearch, setCourseSearch ] = useState([])
  
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [seletedName, setSeletedName] = useState('') 
  
  const [showCourseConfirmation, setShowCourseConfirmation] = useState(false)
  const [seletedCourseName, setSeletedCourseName] = useState('')
  
  const [courseId, setCourseId] = useState(null);
  const [studentId, setStudentId] = useState(null);

  const [currentTab, setCurrentTab] = useState("students");
  
  const { pathname } = useLocation();

  const client = axios.create({
    baseURL: "http://localhost:8080",
  });
  
  useEffect(() =>{
    const filterResult = studentData.filter(std => 
        ((std.name).toLowerCase()).includes(stdSearchitem.toLowerCase())
    )
    setStdSearch(filterResult.reverse())
  },[studentData,stdSearchitem])

  useEffect(() =>{
    const filterResult = courseData.filter(course => 
        ((course.course).toLowerCase()).includes(courseSearchitem.toLowerCase())
    )
    setCourseSearch(filterResult.reverse())
  },[courseData,courseSearchitem])
  
  const handleSelect = (eventKey) => {
    setCurrentTab(eventKey);
  };

  const studentSchema = Yup.object({
    name: Yup.string().required("Name required"),
    email: Yup.string().required("Email required").email("Invalid email"),
    phone: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    gender: Yup.string().required("Gender is required"),
    dob: Yup.string().required("Date of birth is required"),
    address: Yup.string().required("Address is required"),
    state: Yup.string().required("State is required"),
    pincode: Yup.string()
      .matches(/^\d{6}$/, "Pincode must be 6 digits")
      .required("Pincode is required"),
    course: Yup.string().required("Course is required"),
    status: Yup.string().required("Please select an option"),
  });

  const courseSchema = Yup.object({
    name: Yup.string().required("Name required"),
    email: Yup.string().required("Email required").email("Invalid email"),
    course: Yup.string().required("Course is required"),
  });

  useEffect(() => {
    if(pathname === '/courses'){
      handleSelect('courses')
    }
    const fetchStudentData = async () => {
      try {
        const res = await client.get("/api/students");
        setStudentData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchCourseData = async () => {
      try {
        const res = await client.get("/api/courses");
        setCourseData(res.data);
        setCoursesList(res.data.map((course) => course.course))
      } catch (error) {
        console.log(error);
      }
    };
    

    fetchStudentData();
    fetchCourseData();
  }, [pathname]);

  const handleNewStudent = async (data) => {
    try {
      const response = await client.post("/api/newstudent", data);
      setStudentData((prevData) => [response.data, ...prevData]);
      setOpenStdNw(false);
    } catch (error) {
      console.error("Error creating new user:", error);
    }
  };

  const handleNewCourse = async (data) => {
    try {
      const coursedata = {
        name:data.name,
        email:data.email,
        course:data.course.toLowerCase(),
      }
      
      const response = await client.post("/api/newcourse",coursedata );
    
      if(response.data  !== "course name is already added") {
        setCourseData((prevData) => [response.data, ...prevData]);
        setOpenAdd(false)
      }else{
          setDataMessage({coursetaken: response.data})
      }
      
    } catch (error) {
      console.error("Error creating new user:", error);
    }
  };

  const handleUpdateCourse = async (id,data) => {
    try {
      const response = await client.put(`/api/updatecourse/${id}`, data);
      setCourseData(
        courseData.map((course) =>
          course._id === id ? { ...response.data } : course
        )
      );
      setOpenUp(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateStudent = async (id,data) => {
    try {
      const response = await client.put(`/api/updatestudent/${id}`, data);
      setStudentData(
        studentData.map((std) => (std._id === id ? { ...response.data } : std))
      );
      setOpenStdUp(false);
    } catch (error) {
      console.log(error);
    }
  };

  const changeStatus = async (value,id) =>{
    try{
        const status = {status: value};
        const response = await client.put(`/api/updatestatus/${id}`, status);
        setStudentData(
          studentData.map((std) => (std._id === id ? { ...response.data } : std))
        );
    }catch(error){
      console.log(error);
    }
  }

  const handleCourseDelete = async (id) => {
    try {
      await client.delete(`/api/deletecourse/${id}`);
      setCourseData(courseData.filter((users) => users._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleStudentDelete = async (id) => {
    try {
      await client.delete(`/api/deletestudent/${id}`);
      setStudentData(studentData.filter((users) => users._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const clickCourseEdit = (id) => {
    setCourseId(id);
    setOpenUp(true);
  };

  const clickStudentEdit = (id) => {
    setStudentId(id);
    setOpenStdUp(true);
  };

  const handleDeleteClick = () => {
    handleStudentDelete(studentId);
    setShowConfirmation(false);
};

const handleCourseDeleteClick = () => {
  handleCourseDelete(courseId);
  setShowCourseConfirmation(false);
};


  return (
    <studentContext.Provider
      value={{
        openStdNw,
        setOpenStdNw,
        openAdd,
        openStdUp,
        studentId,
        seletedCourseName, 
        setSeletedCourseName,
        setStudentId,
        clickStudentEdit,
        setOpenStdUp,
        setOpenAdd,
        setCourseId,
        courseSearchitem,
        setCourseSearchitem,
        courseSearch,
        stdSearch,
        stdSearchitem,
        setStdSearchitem,
        seletedName, 
        setSeletedName,
        showConfirmation, 
        setShowConfirmation,
        showCourseConfirmation, 
        setShowCourseConfirmation,
        studentData,
        courseData,
        coursesList,
        currentTab,
        changeStatus,
        openUp,
        courseId,
        clickCourseEdit,
        handleUpdateCourse,
        handleUpdateStudent,
        handleSelect,
        handleNewStudent,
        handleNewCourse,
        studentSchema,
        courseSchema,
        setStudentData,
        setCourseData,
        setOpenUp,
        dataMessage,
        handleDeleteClick,
        handleCourseDeleteClick,
      }}
    >
      {children}
    </studentContext.Provider>
  );
}
