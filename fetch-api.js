function postsData(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => displayPosts(data))
}
postsData();


const displayPosts = (data) =>{
    const gridPost = document.getElementById("posts");

    data.forEach((post) => {
        const div = document.createElement("div")

        div.innerHTML = `
            <p>${post.id}</p>
            <p>${post.title}</p>
            <h5>${post.body}</h5>
        
        `;

        gridPost.appendChild(div);
    })


}