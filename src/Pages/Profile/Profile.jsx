import React, { useState, useEffect } from 'react';
import '../../CSS/Profile.css';
import AddRecipe from './AddRecipe';
import imagess from '../../Images/default_profile_image.png';
import Typewriter from 'typewriter-effect';
import swal from 'sweetalert';
import gomu from '../../Images/gomu.webp';


const Profile = ({ shouldClearProfile, setShouldClearProfile }) => {
    const [user, setUser] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetch(`http://localhost:3000/user/${token}`)
                .then((response) => response.json())
                .then((user) => {
                    if (user) {
                        setUser(user);
                    } else {
                        swal('User not found!', 'Please Login to continue', 'error');
                    }
                })
                .catch((error) => {
                    setErrorMessage('An error occurred. Please try again later.');
                });
        } else {
            swal('User not authenticated!', 'Please Login to continue', 'error');
        }
    }, [shouldClearProfile]);

    useEffect(() => {
        if (shouldClearProfile) {
            setUser(null);
            setErrorMessage('');
            setShouldClearProfile(false);
        }
    }, [shouldClearProfile, setShouldClearProfile]);

    const updateUser = (updatedUser) => {
        const token = localStorage.getItem('token');
        fetch(`http://localhost:3000/user/${token}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedUser),
        })
            .then((response) => response.json())
            .then((data) => {
                setUser(data);
                swal('Update Successful!', '', 'success');
            })
            .catch((error) => {
                console.error('Error:', error);
                swal('Update Failed!', 'An error occurred while updating the user.', 'error');
            });
    };

    const handleUpdate = () => {
        swal({
            text: 'Select field to update:',
            buttons: {
                name: {
                    text: 'Name',
                    value: 'name',
                },
                email: {
                    text: 'Email',
                    value: 'email',
                },
                cancel: true,
            },
        }).then((field) => {
            if (field) {
                swal({
                    text: `Enter your new ${field}:`,
                    content: 'input',
                    buttons: {
                        cancel: true,
                        confirm: {
                            text: 'OK',
                            closeModal: false,
                        },
                    },
                }).then((value) => {
                    if (value) {
                        const updatedUser = { ...user, [field]: value };
                        updateUser(updatedUser);
                    } else {
                        swal('Invalid value!', 'Please enter a valid value.', 'error');
                    }
                    swal.close();
                });
            } else {
                swal.close();
            }
        });
    };

    const [isDetailsVisible, setIsDetailsVisible] = useState(false);
    const openInfo = () => {
        setIsDetailsVisible(true);
    };
    const closeInfo = () => {
        setIsDetailsVisible(false);
    };

    return (
        <div className="profile">
            <div className="d_update_form">
                <div id="d_set">
                    <h1>MY Profile</h1>
                    <div id="linemovement"></div>
                </div>
                <div className={`d_user ${isDetailsVisible ? '' : 'd_hide-details'}`} id="d_userBox">
                    <img src={imagess} alt="Photo" onClick={openInfo} />
                    {user ? (
                        <div className="d_info">
                            <h1>Hyy {user.name}</h1>
                            <p>Your profile details:</p>
                            <p>Email: {user.email}</p>
                            <p>DOB: {user.dob}</p>
                            <button onClick={handleUpdate}>Update</button>
                        </div>
                    ) : (
                        <div>
                            <div className="d_info">
                                <h1>Hyy User,</h1>
                                <p>Please login to continue...</p>
                            </div>
                            <p>{errorMessage}</p>
                        </div>
                    )}
                    <div className="d_close-icon" onClick={closeInfo}></div>
                </div>
                <h2>
                    Welcome to your profile page!<br />
                    Click on your image to explore and view your profile details
                </h2>
            </div>
            <div className="d_add_recipe_form">
                <p>
                    <Typewriter
                        options={{
                            strings: [
                                'Have you cooked something mouth-watering and want to share it with others? Click the Add Recipe button to showcase your culinary masterpiece to the community',
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </p>
            </div>
            <AddRecipe />
            <div className='gomu_move'>
                <img src={gomu} alt="popcorn loading..." className='d_img_move' />
                <img src={gomu} alt="popcorn loading..." className='d_img_move' />
            </div>
        </div>
    );
};

export default Profile;
