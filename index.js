console.log('Happy developing ✨')




let answer= ((a,b) => a + b );



 setTimeout(()=>{
        console.log(answer(20,50));
    }, 5000);

function scrollToSection(sectionId){
    const sections = document.getElementsByClassName(sectionId);

    if (sections.length > 0) {
        sections[0].scrollIntoView({ behavior: 'smooth' });
        console.log("Found section:", sections[0]);
    } else {
        console.error(`No element found with class '${className}'`);
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector(`.header-text h1`).classList.add('animate');
});