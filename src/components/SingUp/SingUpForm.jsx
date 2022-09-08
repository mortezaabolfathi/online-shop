import Input from "../../common/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./singUpFormStyle.css";
import { Link, useNavigate } from "react-router-dom";

import { singUpUser } from "../../services/singUpservices";
import { useEffect, useState } from "react";
import { useAuth, useAuthActions } from "../../Providers/AuthProvider";
import { useQuery } from "../hooks/useQuery";

const styleClassButton="text-black rounded-none w-1/4 bg-gradient-to-br from-amber-600 to-amber-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-amber-300 dark:focus:ring-amber-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2"
// 1.
const initialValues = {
  name: "",
  email:"",
  phoneNumber: "",
  password: "",
  passwordConfirm: "",
};

// 3.
const validationSchema = Yup.object({
  name: Yup.string()
    .required("وارد کردن نام ضروری است")
    .min(3, "Name length is not valid"),
  email: Yup.string()
    .email("Invalid email format")
    .required("وارد کردن ایمیل ضروری است"),
  phoneNumber: Yup.string()
    .required("وارد کردن شماره همراه ضروری است")
    .matches(/^[0-9]{11}$/, "شماره وارد شده کمتر از یازده رقم است")
    .nullable(),
  password: Yup.string()
    .required("وارد کردن پسورد ضروری است"),
    // .matches(
    //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    //   "Must Contain 8 Characters, One Uppercase"
    // ),
  passwordConfirm: Yup.string()
    .required("رمز تکرار شده صحیح نیست")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});



const SingUpForm = () => {
  const [error,setError]=useState(null)
  const navigate=useNavigate();
  const setAuth=useAuthActions()
  const query=useQuery();
  const redirect=query.get('redirect') || "/";
  const auth=useAuth()
  useEffect(()=>{
    if(auth) navigate(redirect)
  },[redirect,auth])



  // 2.
const onSubmit = async (values) => {
  const {name,email,phoneNumber,password}=values
    const userData={
      name,
      email,
      phoneNumber,
      password
    }
    try{
      const {data}=await singUpUser(userData)
      // console.log("data is good sing up user is:", data);
      setAuth(data)
      setError(null)
      // localStorage.setItem("ausState", JSON.stringify(data)) goTo AuthProvider
      navigate(redirect)
    }catch(error){
      if(error.response && error.response.data.message){
        setError(error.response.data.message)
      }
      console.log(error)
    }
};
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return ( 
    <div className="h-screen flex containerPageSingUp">
    <form onSubmit={formik.handleSubmit} className="flex items-center justify-center w-screen flex-col">
      <Input formik={formik} name="name" label="نام و نام کاربری" />
      <Input formik={formik} name="email" label="ایمیل" />
      <Input formik={formik} name="phoneNumber" label="شماره تماس" type="tel"/>
      <Input formik={formik}  name="password" label="رمز عبور" type="password"/>
      <Input formik={formik} name="passwordConfirm" label="تکرار رمز عبور " type="password"/>

      <button type="submit" disabled={!formik.isValid} className={styleClassButton}>
          ثبت نام
      </button>
      <div className="flex  flex-row">
      {error &&  <h3 className="text-red-500 px-4">{error}</h3>}
        <Link to={`/loginPage?redirect= ${redirect}`}>
          <p className="text-amber-500">قبلا ثبت نام کرده اید؟</p>
        </Link>
      </div>
      </form>
      </div>
   );
}
 
export default SingUpForm;