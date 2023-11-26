import './Blog.css';
import Post from './Post.jsx';

function Blog() {
  return (
    <>
      <div className="blog">
        <Post Title="The Art of Front-End Craftmanship" Category="Front-End" Date="December 1, 2023" Content="Explore the intricacies of front-end development as I delve into the artistry behind creating captivating user experiences. From the fundamentals of HTML and CSS to the elegance of LESS/SASS, this post will highlight the essence of blending form and function."/>
        <Post Title="Decoding Data: A Journey into Back-End Realms" Category="Database" Date="November 24, 2023" Content="Embark on a journey into the world of back-end development, exploring the power of data and server-side logic. From MySQL queries to Node.js integration, this post will unravel the complexities of creating seamless and data-driven applications."/>
        <Post Title="Beyond Code: Mastering Server Landscapes" Category="Server" Date="November 17, 2023" Content="Dive into the intricacies of server-side orchestration, emphasizing the importance of a well-architected server environment. From APACHE/Linux mastery to achieving full-stack expertise, this post will shed light on crafting stable and scalable server landscapes."/>
        <Post Title="Mastering the Power of MongoDB in Modern Web Development" Category="Database" Date="November 10, 2023" Content="Explore the dynamic role of MongoDB in shaping modern web development. This blog post delves into the versatility, scalability, and innovative applications of MongoDB as a NoSQL database."/>
      </div>
    </>
  );
}

export default Blog;