import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../CSS/Login.css';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from "sweetalert";

function Login({ setIsLoggedIn, setShouldClearProfile }) {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isRegister, setIsRegister] = useState(true);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    const handleDobChange = (e) => {
        setDob(e.target.value);
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        if (!name || !email || !password || !dob || !gender) {
            //  setErrorMessage('All fields are required');
            swal('Error!!', 'All fields are required', 'error');
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password, dob, gender }),
            });

            if (response.ok) {
                // alert('Registration successful!');
                swal('Registration successfull !', 'Please Login to continue', 'success');
                // toast.success('🦄 Registration successful!', {
                //     position: "top-right",
                //     autoClose: 5000,
                //     hideProgressBar: false,
                //     closeOnClick: true,
                //     pauseOnHover: true,
                //     draggable: true,
                //     progress: undefined,
                //     theme: "colored",
                // });
                //or 

                // or
                // toast.success("You have been successfully registered !!");
                //alert("Success");

                setIsRegister(false);
            } else {
                // alert("Failed");

                // toast.error("Failed to register! Please try again");

                // toast.error('🦄 Failed to register! Please try again', {
                //     position: "top-center",
                //     autoClose: 5000,
                //     hideProgressBar: false,
                //     closeOnClick: true,
                //     pauseOnHover: true,
                //     draggable: true,
                //     progress: undefined,
                //     theme: "colored",
                // });
                swal('Failed to register!', 'Please try again later', 'error');
            }
        } catch (error) {
            swal('An error occurred.', ' Please try again.', 'error');
            //setErrorMessage('. Please try again later.');

            // toast.error('🦄 An error occurred Please try again', {
            //     position: "top-center",
            //     autoClose: 5000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            //     theme: "colored",
            // });
            alert("Try again");

        }
    };
    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            // setErrorMessage('All fields are required');
            //toast.error("All fields are required !!");

            swal("Error", "All fields are required !!", "error");
            // toast.success('🦄 Wow so easy!', {
            //     position: "bottom-right",
            //     autoClose: 5000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            //     theme: "colored",
            // });
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/user');
            if (response.ok) {
                const users = await response.json();
                const user = users.find((u) => u.email === email && u.password === password);
                if (user) {
                    setIsLoggedIn(true);
                    localStorage.setItem('token', user.id);
                    localStorage.setItem('login', 'true');
                    localStorage.setItem('notice', 'Login');
                    navigate('/');
                    setShouldClearProfile(true); // Clear the profile after successful login
                } else {
                    // setErrorMessage('Invalid email or password');
                    swal('Invalid Credentials !!', ' Please try again.', 'error');
                    // toast.error("Invalid Credentials !!");
                }
            } else {
                //  setErrorMessage('Failed to fetch user data. Please try again.');
                swal('Failed to fetch user data !!', ' Please try again.', 'error');
                //toast.error("Failed to fetch user data. Please try again !!");
            }
        } catch (error) {
            //  setErrorMessage('An error occurred. Please try again later.');
            // toast.error("An error occurred. Please try again later !!");
            swal('An error occurred !!', ' Please try again.', 'error');

        }
    };



    //Front-end code
    useEffect(() => {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const main = document.getElementById('main');

        signUpButton.addEventListener('click', () => {
            main.classList.add('right-panel-active');
        });

        signInButton.addEventListener('click', () => {
            main.classList.remove('right-panel-active');
        });

        return () => {
            signUpButton.removeEventListener('click', () => {
                main.classList.add('right-panel-active');
            });

            signInButton.removeEventListener('click', () => {
                main.classList.remove('right-panel-active');
            });
        };
    }, []);

    return (
        <div id='cont_body'>
            <div className="a_container" id="main">
                {/* {isRegister ? ( */}
                <div className="a_sign-up">
                    <form onSubmit={handleRegister} className="aa_form">
                        <h1 className='aa_nn_me'>Create Account</h1>

                        <div className="social-container">
                            <a href="#" className="social">
                                <FacebookRoundedIcon />
                            </a>
                            <a href="#" className="social">
                                <GoogleIcon />
                            </a>
                            <a href="#" className="social">
                                <LinkedInIcon />
                            </a>
                        </div>

                        <input type="text" value={name} placeholder="Name" className='a_boxx' onChange={handleNameChange} />
                        <input type="email" value={email} placeholder="email" className='a_boxx' onChange={handleEmailChange} />
                        {/* <input type="text" name="contact" placeholder="Contact No" required className='a_boxx' /> */}
                        <input type="password" value={password} placeholder="Password" className='a_boxx' onChange={handlePasswordChange} />
                        <div className='seperate'>
                            <select id="gender" className="box6" onChange={handleGenderChange}>
                                <option value="">Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="others">Others</option>
                            </select>
                            <input id="dob" type="date" value={dob} placeholder="" onChange={handleDobChange} />
                        </div>

                        <button className='a_button' type='submit'>Register</button>
                    </form>
                </div>
                {/* ) : ( */}
                <div className="a_sign-in">
                    <form onSubmit={handleLogin} className="aa_form">
                        <h1 className='aa_nn_me'>Sign in</h1>

                        <div className="social-container">
                            <a href="#" className="social">
                                <FacebookRoundedIcon />
                            </a>
                            <a href="#" className="social">
                                <GoogleIcon />
                            </a>
                            <a href="#" className="social">
                                <LinkedInIcon />
                            </a>
                        </div>

                        <input type="email" value={email} placeholder="email"
                            onChange={handleEmailChange} className='a_boxx' />

                        <input type="password" value={password} placeholder="Password" className='a_boxx' onChange={handlePasswordChange} />
                        <a href="#">Forgot your Password?</a>
                        {/* <button className='a_button'>Sign In</button> */}
                        <button type="submit" className='a_button'>Login</button>
                    </form>
                </div>
                {/* )} */}
                <div className="a_overlay-container">
                    <div className="a_overlay">
                        <div className="a_overlay-left">
                            <h1 className='a_hh1'>Welcome Back!</h1>
                            <p className='a_hh1'>To keep connected with us please login with your personal info</p>
                            <button id="signIn" className='a_button'>LogIn</button>
                        </div>
                        <div className="a_overlay-right">
                            <h1 className='a_hh1'>Hello, Friend!</h1>
                            <p className='a_ppp'>Enter your personal details and start journey with us</p>
                            <button id="signUp" className='a_button'>Register</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Login;