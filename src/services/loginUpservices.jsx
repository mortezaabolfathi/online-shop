import http from "./httpServic";

export const loginUser= (data)=>{
  return  http.post("/user/login",data)
}