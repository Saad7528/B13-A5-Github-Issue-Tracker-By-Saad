// Home 

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

async function loadData() {
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues ")
    const data = await res.json();
    console.log(data.data);
}



loadData()