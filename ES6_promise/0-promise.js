export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {  
      resolve('ok');
    }, 500);
  });   
}
 