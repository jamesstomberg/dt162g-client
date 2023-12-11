import { Button, Container } from "react-bootstrap";
import Userfront from '@userfront/toolkit/react';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';

Userfront.init("8nwy5zrn");

const DeletePost = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { postId } = location.state;

    if (!Userfront.accessToken()) {
        return (
            <Navigate to="/login" />
        );
    }

    const handleDelete = () => {
        fetch('https://dt162gexpress.onrender.com/api/posts/' + postId,
            {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json',
                    'authorization': `Bearer ${Userfront.accessToken()}`
                }
            })
            .then(res => {
                if (!res.ok) {
                    throw Error('Något gick fel, inlägget kunde inte raderas.');
                }

                if (res.status === 200) {
                    alert('Inlägget raderades!');
                    navigate('/dashboard');
                }
            })
            .catch(err => {
                console.error(err.message);
            })
    }

    return (
        <Container>
            <h1>Radera inlägg</h1>
            <p>Är du säker på att du vill radera inlägget?</p>
            <p>ID: {postId}</p>
            <div className="d-flex gap-2">
                <Button variant="success" onClick={handleDelete}>Ja</Button>
                <Button variant="danger" onClick={() => { navigate('/dashboard') }}>Nej</Button>
            </div>
        </Container>
    );
}

export default DeletePost;