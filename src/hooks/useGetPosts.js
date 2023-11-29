import { useState, useEffect } from 'react';

const useGetPosts = (url = 'http://localhost:3001/api/posts') => {
    const [posts, setPosts] = useState(null);
    const [pagination, setPagination] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error('Något gick fel, kontrollera att ändpunkten är korrekt.');
                }

                return res.json();
            })
            .then(data => {
                if (data.posts) {
                    setPosts(data.posts);
                    setPagination({page: data.page, pageCount: data.pageCount})
                } else {
                    setPosts(data);
                }

                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                console.error(err.message);
                setError('Något gick fel, inlägg kunde inte hämtas.');
                setIsPending(false);
            })
    }, [url]);

    return { posts, pagination, isPending, error };
}

export default useGetPosts;