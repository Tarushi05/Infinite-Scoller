let container = document.querySelector(".container")

//  const url ='https://dog.ceo/api/breeds/image/random'

function loadimg(numImage=15)
{
  let i =0;
  while(i<numImage){
    fetch("https://dog.ceo/api/breeds/image/random")
     .then(function(response)
     {
      return response.json()
     })
     .then(function(data){
      const image = document.createElement("img")
      image.src = `${data.message}`
      container.appendChild(image)
     })
       i++
     }

}
loadimg()

window.addEventListener("scroll",()=>{
  if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
    loadimg()
  }
  
})