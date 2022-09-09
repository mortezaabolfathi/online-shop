import Input from "../../common/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./loginformstyle.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/loginUpservices";
import { useEffect, useState } from "react";
import { useAuth, useAuthActions } from "../../Providers/AuthProvider";
import { useQuery } from "../hooks/useQuery";


const styleCalassButton =
  "text-black rounded-none w-full bg-gradient-to-br from-amber-600 to-amber-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-amber-300 dark:focus:ring-amber-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2";
// 1.
const initialValues = {
  email: "",
  password: "",
};

// 2.


// 3.
const validationSchema = Yup.object({
  email: Yup.string()
    .email("لطفا فرمت ایمیل را صحیح وارد کنید")
    .required("ایمیل وارد شده صحیح نیست"),
  password: Yup.string()
    .required("پسورد وارد شده صحیح نیست")
    // .matches(
    //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    //   "Must Contain 8 Characters, One Uppercase"
    // ),
});

const LoginForm = () => {

  const [error,setError]=useState(null);
  const setAuth=useAuthActions()
  const navigate=useNavigate()
  const query=useQuery()
  const redirect=query.get('redirect') || "/";
  // console.log("redirect is login form:", redirect)
  const auth=useAuth()
  useEffect(()=>{
    if(auth) navigate(redirect)
  },[auth,redirect])


  const onSubmit =async (values) => {
   try{
    const {data}= await loginUser(values)
    // console.log("data is good login user is :", data)
    setAuth(data);
    // localStorage.setItem("ausState",JSON.stringify(data)) goTo AuthProvider
    setError(null)
    navigate(redirect)
   }catch(error){
    if(error.response && error.response.data.message){
      setError(error.response.data.message)
    }
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
        <Input formik={formik} name="email" label="ایمیل" />
        <Input formik={formik} name="password" label="رمز عبور" type="password"/>
        <Link to="/layOutAdmin">  
            <button
              type="submit"
              disabled={!formik.isValid}
              className={styleCalassButton} 
            >
              ورود
            </button>
        
        </Link>
        <div className="flex flex-row">
          {error && <h3 className="text-red-500 px-4">{error}</h3>}
          <Link to={`/singUpPage?redirect= ${redirect}`}>
            <p className="text-amber-500">قبلا ثبت نام نکرده اید؟</p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
