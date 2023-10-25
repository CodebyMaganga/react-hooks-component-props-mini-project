import blogData from "../data/blog"

function About({link = "https://via.placeholder.com/215"}){
        const Blogabout = blogData.about
        
    return(
        <aside>
            <img src={link} alt="Brand Logo"></img>
            {Blogabout}
        </aside>
        

    )
}

export default About