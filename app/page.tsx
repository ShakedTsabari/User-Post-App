'use client';
import { useState, useEffect } from 'react'
import axios from 'axios';
import Post from '../src/componenets/Post';
import Pagination from '@/src/componenets/Pagination';
import "./styles.css";
 
export default function Home() {
    const [posts, setPosts] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const [numberOfPages, setNumberOfPages] = useState(0);

    const NOTES_URL = 'http://localhost:3001/notes';
    const POSTS_PER_PAGE = 10;

    useEffect(() => {
        const promise = axios.get(NOTES_URL, {
            params: {
            _page: activePage,
            _per_page: POSTS_PER_PAGE
            }});
        promise.then(response => { 
            setPosts(response.data);
            const totalNotes = response.headers['x-total-count'];
            const pagesNumber = Math.ceil(totalNotes / POSTS_PER_PAGE); 
            setNumberOfPages(pagesNumber);
            console.log("useEffect");
        }).catch(error => { console.log("Encountered an error:" + error)});
    }, [activePage]);
    
    const onPageChange = (pageNumber: number) => {
        if (pageNumber > 0 && pageNumber <= numberOfPages)
            setActivePage(pageNumber);
    }

    return(
        <div>
            <h1>Notes</h1>
            {posts.map((post:any) => (
                <Post key={post.id} post={post} />
            ))}
            <Pagination 
                activePage={activePage}
                numberOfPages={numberOfPages}
                onPageChange={onPageChange}
            />
        </div>
    );
};