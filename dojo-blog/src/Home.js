import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum eligendi possimus officiis vitae necessitatibus accusantium itaque autem optio, similique neque corporis reprehenderit maxime, cupiditate nemo eveniet provident nihil eius.", author: 'John Doe', id:1},
        {title: 'blog 2', body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum eligendi possimus officiis vitae necessitatibus accusantium itaque autem optio, similique neque corporis reprehenderit maxime, cupiditate nemo eveniet provident nihil eius.", author: 'Jane Doe', id:2},
        {title: 'blog 3', body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum eligendi possimus officiis vitae necessitatibus accusantium itaque autem optio, similique neque corporis reprehenderit maxime, cupiditate nemo eveniet provident nihil eius.", author: 'Mike Doe',id:3},
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    };

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All blogs!" handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter(
                (blog) => blog.author === "John Doe")} title="John's blogs"/>
        </div>
     );
}
 
export default Home;