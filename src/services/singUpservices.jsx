import http from "./httpServic";

export const singUpUser=(data)=>{
    return http.post("/user/register",data)
}