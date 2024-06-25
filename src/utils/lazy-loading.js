const lazyLoading=()=>{
  const lazyImgs=document.querySelectorAll(".lazy");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let img = entry.target;
        console.log(entry.target);
        img.src = img.dataset.src;
        img.classList.replace("loading","loaded");
        observer.unobserve(img);
      }
    });
  });

  lazyImgs.forEach((img)=>{
    observer.observe(img);
  })
}

export default lazyLoading;