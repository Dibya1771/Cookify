import React, { useState, useRef } from 'react';
import '../../CSS/Profile.css';
//import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
import swal from "sweetalert";
const AddRecipe = () => {
    const [showForm, setShowForm] = useState(false);
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [recipe, setRecipe] = useState('');
    const [video, setVideo] = useState('');
    const [image, setImage] = useState('');

    const handlePostClick = () => {
        setShowForm(true);
    };

    const handleSubmit = (e) => {
        // e.preventDefault();

        const formData = {
            title,
            ingredients,
            recipe,
            video,
            image
        };

        fetch('http://localhost:3000/items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Data stored successfully:', data);
                setTitle('');
                setIngredients('');
                setRecipe('');
                setVideo('');
                setImage('');
                setShowForm(false);
                swal('Congratulation !!', 'Data stored successfully', 'success');
            })
            .catch((error) => {
                console.error('Error storing data:', error);
            });
    };

    return (
        <div>
            <button onClick={handlePostClick} className="d_post-button" >       {/** */}
                Add New Recipe
            </button>

            {showForm && (
                <div className="d_form-overlay"  >
                    <div className="d_form-container" >
                        <h1>Add Your Recipe</h1> <hr />


                        <span className="d_close-button" onClick={() => setShowForm(false)} >
                            &#x2715;
                        </span>
                        <form onSubmit={handleSubmit} className="d_post-form" >
                            <br></br>
                            <input
                                type="text"
                                placeholder="Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="d_form-input"

                            />
                            <br></br>
                            <input
                                type="text"
                                placeholder="Ingredients"
                                value={ingredients}
                                onChange={(e) => setIngredients(e.target.value)}
                                className="d_form-input"
                            />
                            <br></br>
                            <input
                                type="text"
                                placeholder="Recipe"
                                value={recipe}
                                onChange={(e) => setRecipe(e.target.value)}
                                className="d_form-input"
                            />
                            <br></br>
                            <input
                                type="text"
                                placeholder="video URL"
                                value={video}
                                onChange={(e) => setVideo(e.target.value)}
                                className="d_form-input"
                            />
                            <br></br>
                            <input
                                type="text"
                                placeholder="Image URL"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                                className="d_form-input"
                            />
                            <br></br>

                            <button type="submit" className="d_submit-button" >
                                <SendIcon />
                            </button>
                        </form>
                    </div>
                </div>
            )
            }
            <div className="d_data-content">
                {/* Render your API data or other content */}
            </div>
        </div >
    );
}
export default AddRecipe
