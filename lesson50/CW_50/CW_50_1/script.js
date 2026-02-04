getPost.onclick = () => {
fetch(`https://jsonplaceholder.typicode.com/posts/${postId.value}`)
.then(response => {
    // console.log(response);
    // console.log(response.status);
    // console.log(response.ok);
    // console.log(response.headers);
    if (!response.ok){
        throw new Error("Network response was not ok")
    }
    return response.json();
})
.then(data => {
    const h1 =document.createElement('h1');
    h1.append(`ID: ${data.id}, Title: ${data.title}`);
    document.body.append(h1);
})
.catch(e => {
    const h1 = document.createElement('h1');
    h1.append(`${e.message}`);
    document.body.append(h1);
});
}