const posts = [
  {title: "First post"},
  {title: "Second post"}
];

/* 
function createPost(post){
   setTimeout(function(){
    posts.push(post);
   },2000);
}

function getPosts(){
  setTimeout(function(){
    let output = '';
    posts.forEach(function(post){
       output += `<li>${post.title}</li>`;
    });
      document.querySelector('ul').innerHTML= output;
  },1000);
  
}

createPost({title: "Third post"});
getPosts();
 */


/* 
       CALLBACKS.

function createPost(post, callback){
  setTimeout(function(){
   posts.push(post);
   callback();
  },2000);
}

function getPosts(){
 setTimeout(function(){
   let output = '';
   posts.forEach(function(post){
      output += `<li>${post.title}</li>`;
   });
     document.querySelector('ul').innerHTML= output;
 },1000);
 
}

createPost({title: "Third post"}, getPosts);
 */

 /* 
      PROMISES (still cause  me confusion)

function createPost(post){
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      posts.push(post);
      
      const error = false;

      if(!error){
         resolve();
      } else {
        reject('ERROR!!!');
      }
     },2000);
   

  });
}

function getPosts(){
 setTimeout(function(){
   let output = '';
   posts.forEach(function(post){
      output += `<li>${post.title}</li>`;
   });
     document.querySelector('ul').innerHTML= output;
 },1000);
 
}

createPost({title: "Third post"})
.then(getPosts)
.catch(function(err){
    console.log(err);
}); 
*/

// ASYNC AND AWAIT (still cause me confusion.)

async function getUsers(){
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        const data = await response.json();

        return data;
}

getUsers().then(users => console.log(users));