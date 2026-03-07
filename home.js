// Home 
// const statusBtns = document.getElementById("status-btn-container");
// statusBtns.addEventListener('click', function (event) {
//     console.log(event)
// })

const activeBtn = ["btn-primary", "text-white"]
// const deactivateBtn = ["btn"]

function switchBtn(btn){
    // console.log(btn);
    const btnName = ['all', 'open', 'close'];
    btnName.forEach(element => {
        const btnN = document.getElementById(element+"-btn")
        // console.log(btnN);

        if(element === btn){
            btnN.classList.add(...activeBtn)
        }else{
            btnN.classList.remove(...activeBtn)
        }
    });
}