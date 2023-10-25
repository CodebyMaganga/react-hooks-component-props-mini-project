import blogData from "../data/blog"


function ArticleList(){
    
    const calculateEmojis = (minutes) => {
        if (minutes < 30) {
            const coffeeCups = Math.ceil(minutes / 5);
            return "☕️".repeat(coffeeCups);
        } else {
            const bentoBoxes = Math.ceil(minutes / 10);
            return "🍱".repeat(bentoBoxes);
        }
    }

    const Articles = blogData.posts.map((post) =>(
        <div key={post.id}>
            <ol>
                <li>{post.title.toUpperCase()} <small>{post.date} {calculateEmojis(post.minutes)} {post.minutes}</small></li>
            </ol>
        </div>     
    ))

    const Article = blogData.posts.map((post) =>(
        <article>
            <h3>{post.title}</h3>
            <small>{post.date} {calculateEmojis(post.minutes)}</small>
            <p>{post.preview}</p>
        </article>
    ))
    return <main>
        {Article}
        {Articles}
        
        
    </main>
}

export default ArticleList