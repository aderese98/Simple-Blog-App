import { useState } from 'react';

const Home = () => {
    // let name = "John";
    const [likes, setLikes] = useState(0);
    const handleClick = (e) => {
        setLikes(likes+1);
    };

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ likes }</p>
            <button onClick={handleClick}>Like</button>
        </div>
     );
}
 
export default Home;