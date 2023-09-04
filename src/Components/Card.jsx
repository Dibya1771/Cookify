import React from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const MealItem = ({ data }) => {
  console.log(data);
  let navigate = useNavigate();
  // if(loading){
  //   return <h2>Loading...</h2>;
  // }
  const handlelogin = () => {
    var t = localStorage.getItem('notice');
    if (t != 'Login') {
      alert("You need to first log-In ...");
      // swal('Error', 'You need to first log-In !!', 'error');
      window.location = "/login";
      console.log(t)
    }

    //   if (t == "Login") {
    //     window.location.href = "DonationForm.html";
    // } else {
    //     alert("Want to Donate Blood. You need to first SignIn");
    //     window.location.href = "login.html";
    // }

  }

  return (
    <>
      {!data
        ? "Not Found"
        : data.map((item) => {
          return (
            <div
              className="card"
              key={item.id}
              onClick={() => {
                handlelogin()
                navigate(`/items/${item.id}`);
              }}
            >
              <img src={item.image} alt="Loading" />
              <h3>{item.title}</h3>
            </div>
          );
        })}
    </>
  );
};

export default MealItem;
