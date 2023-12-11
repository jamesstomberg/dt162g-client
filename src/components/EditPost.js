import { Container, Form, Button } from "react-bootstrap";
import { useState } from "react";
import Userfront from '@userfront/toolkit/react';



const EditPost = () => {
    const [postTitle, setPostTitle] = useState();
    const [postContent, setPostContent] = useState();
    const [postImage, setPostImage] = useState();
    const [authorEmail, setAuthorEmail] = useState(Userfront.store.user.email);

    const validateForm = () => {
        if (
            !postTitle,
            !postContent,
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

export default EditPost;