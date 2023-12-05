    const showMoreBtn=document.querySelector("#read-more");


    showMoreBtn.addEventListener('click',(e)=>{
    const spantext=document.querySelector('.extended-part-span')
    spantext.classList.toggle('extended-part-span--show')
    const text=document.querySelector('.extended-part')
    text.classList.toggle('extended-part--show')
    showMoreBtn.textContent=e.target.textContent.includes("Show More ↓")?"Show Less ↑":"Show More ↓"
    })

    module.exports={showMoreBtn}