import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import Userfront from '@userfront/toolkit/react';
import { Navigate, useNavigate } from "react-router-dom";

Userfront.init("8nwy5zrn");

const CreatePost = () => {
    const [postTitle, setPostTitle] = useState();
    const [postContent, setPostContent] = useState();
    const [postImage, setPostImage] = useState();
    const navigate = useNavigate();

    if (!Userfront.accessToken()) {
        return (
            <Navigate to="/login" />
        );
    }

    const validateForm = () => {
        if (
            !postTitle ||
            !postContent ||
            !postImage
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

        if (!checkFileType()) {
            alert('Filtypen för bilden måste vara png eller jpg!');
            return;
        }

        const data = {
            title: postTitle,
            content: postContent,
            image: postImage,
            email: Userfront.store.user.email,
            name: Userfront.store.user.email
        };

        const formData = new FormData();

        formData.append('title', data.title);
        formData.append('content', data.content);
        formData.append('image', data.image);
        formData.append('email', data.email);
        formData.append('name', data.name);

        // Send form data.
        fetch('https://dt162gexpress.onrender.com/api/posts', {
            method: 'POST',
            headers: {
                authorization: `Bearer ${Userfront.accessToken()}`
            },
            body: formData
        })
        .then(res => {
            if (!res.ok) {
                throw Error('Något gick fel, inlägget kunde inte skapas.');
            }

            if (res.status === 200) {
                alert('Inlägget skapades!');
                navigate('/dashboard');
            }
        })
        .catch(err => {
            console.error(err.message);
        })
    }

    return (
        <Container>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Titel</Form.Label>
                    <Form.Control type="text" placeholder="En titel för ditt inlägg" onChange={(event) => setPostTitle(event.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Innehåll</Form.Label>
                    <Form.Control as="textarea" rows={3} onChange={(event) => setPostContent(event.target.value)} />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Bild (png eller jpg)</Form.Label>
                    <Form.Control type="file" name="postImage" accept="image/png, image/jpg" onChange={(event) => setPostImage(event.target.files[0])} />
                </Form.Group>
                <Button onClick={sendForm}>Skapa</Button>
            </Form>
        </Container>
    );
}

export default CreatePost;