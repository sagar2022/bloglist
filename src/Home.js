import  { useState } from 'react';
import BlogList from './BlogList';

function Home() {
    const [blogs, setBlogs] = useState([
        { title:'My New website', body:'lorem epsum ....', author:'mario', id: 1},
        { title:'My party place', body:'lorem epsum ....', author:'luigi', id: 2},
        { title:'Web dev tips', body:'lorem epsum ....', author:'anna', id: 3}
     ]);

     const handleDelete = (id) => {
         const newBlogs = blogs.filter(blog => blog.id !=id);
         setBlogs(newBlogs);
     }

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>   
            <h1>hello world</h1>        
        </div>
    );
}

export default Home;
