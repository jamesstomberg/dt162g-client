import { Container, Form, Button } from "react-bootstrap";
import { useState } from "react";
import Userfront from '@userfront/toolkit/react';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';

Userfront.init("8nwy5zrn");

const EditPost = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { post } = location.state;
    const [postTitle, setPostTitle] = useState(post.postTitle);
    const [postContent, setPostContent] = useState(post.postContent);
    const [postImage, setPostImage] = useState();
    const [authorEmail, setAuthorEmail] = useState(Userfront.store.user.email);

    if (!Userfront.accessToken()) {
        return (
            <Navigate to="/login" />
        );
    }

    const validateForm = () => {
        if (
            !postTitle ||
            !postContent
        ) {
            return false;
        }

        return true;
    }

    const checkFileType = () => {
        if (postImage.type !== "image/png" && postImage.type !== "image/jpg" && postImage.type !== "image/jpeg") {
            return false;
        }

        return true;
    }

    const sendForm = () => {
        if (!validateForm()) {
            alert('Alla fält måste fyllas i!');
            return;
        }

        if (postImage) {
            if (!checkFileType()) {
                alert('Filtypen för bilden måste vara png eller jpg!');
                return;
            }

            // Update post with image.
            const data = {
                title: postTitle,
                content: postContent,
                image: postImage,
                email: Userfront.store.user.email,
                name: Userfront.store.user.email
            };

            const formData = new FormData();

            formData.append('postTitle', data.title);
            formData.append('postContent', data.content);
            formData.append('image', data.image);
            formData.append('email', data.email);
            formData.append('name', data.name);

            // Send form data.
            fetch('https://dt162gexpress.onrender.com/api/posts/' + post._id, {
                method: 'PUT',
                headers: {
                    authorization: `Bearer ${Userfront.accessToken()}`
                },
                body: formData
            })
                .then(res => {
                    if (!res.ok) {
                        throw Error('Något gick fel, inlägget kunde inte uppdateras.');
                    }

                    if (res.status === 200) {
                        alert('Inlägget uppdaterades!');
                        navigate('/dashboard');
                    }
                })
                .catch(err => {
                    console.error(err.message);
                })
        } else {
            const data = {
                postTitle: postTitle,
                postContent: postContent,
                postAuthor: Userfront.store.user.email
            };

            // Update post without image.
            fetch('https://dt162gexpress.onrender.com/api/posts/' + post._id,
                {
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json',
                        'authorization': `Bearer ${Userfront.accessToken()}`
                    },
                    body: JSON.stringify(data)
                })
                .then(res => {
                    if (!res.ok) {
                        throw Error('Något gick fel, inlägget kunde inte uppdateras.');
                    }

                    if (res.status === 200) {
                        alert('Inlägget uppdaterades!');
                        navigate('/dashboard');
                    }
                })
                .catch(err => {
                    console.error(err.message);
                })
        }
    }

    return (
        <Container>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Titel</Form.Label>
                    <Form.Control type="text" placeholder="En titel för ditt inlägg" onChange={(event) => {
                        setPostTitle(event.target.value);
                        post.postTitle = event.target.value;
                    }} value={post.postTitle} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Innehåll</Form.Label>
                    <Form.Control as="textarea" rows={3} onChange={(event) => {
                        setPostContent(event.target.value)
                        post.postContent = event.target.value;
                    }} value={post.postContent} />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Bild (png eller jpg) - kan lämnas tom</Form.Label>
                    <Form.Control type="file" name="postImage" accept="image/png, image/jpg" onChange={(event) => setPostImage(event.target.files[0])} />
                </Form.Group>
                <Button variant="success" onClick={sendForm}>Uppdatera</Button>
            </Form>
        </Container>
    );
}

export default EditPost;