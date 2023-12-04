import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Link, Navigate } from 'react-router-dom';
import { LogoutButton } from '@userfront/toolkit/react';
import Userfront from '@userfront/toolkit/react';
import { Button } from 'react-bootstrap';
import PostList from './PostList';

Userfront.init("8nwy5zrn");

const Dashboard = () => {
    /*useEffect(() => {
        (async () => {
            try {
                const result = await fetch('http://localhost:3001/api/dashboard', {
                    headers: {
                        Authorization: `Bearer ${Userfront.accessToken()}`
                    }
                })
                    .then(response => response.json());
                setPrivateData(result);
            } catch (err) {
                console.log(err);
            }
        })();
    }, []);*/

    if (!Userfront.accessToken()) {
        return (
            <Navigate to="/login" />
        );
    }

    return (
        <Container>
            <h1>Administration</h1>
            <h2>Välkommen <span className="text-secondary">{Userfront.store.user.email}</span></h2>
            <div className="d-flex my-4 border p-3">
                <div className="w-50">
                    <LogoutButton />
                </div>
                <div className="w-50">
                    <Button variant="link">
                        <Link to="/reset">Återställ lösenord</Link>
                    </Button>
                </div>
            </div>

            <Container>
                <h3>Hantera inlägg</h3>
                <div>
                    <Link to="/create-post">Skapa inlägg</Link>
                </div>

                <PostList />
            </Container>
        </Container>
    );
}

export default Dashboard;