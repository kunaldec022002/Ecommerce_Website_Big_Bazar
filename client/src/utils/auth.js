export const checkLogin = async()=>{
    const user = JSON.parse(localStorage.getItem("user")) || null;

    if(!user)
    {
      alert("Please Register First then Login !");
      window.location.href= "/Signup";

}
}



