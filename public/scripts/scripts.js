
window.addEventListener('load', (e)=>{
    carregarItems();
})

function carregarItems(){

    var items = ""

    fetch('http://localhost:5000/api/getAll').then(res=>{
        return (res).json()
    }).then(json=>{
        items = json

        let bigDiv = ""

        for(let i = 0; i<items.length; i++){
            let partDiv = `
            <div class="item">
                <div id="titulo">${items[i].titulo}</div>
                <div class="boxFotos">
                    <img style= "width: 300px;"src="./assets/img.jpg" alt="">
                    <img style= "width: 300px;"src="./assets/img.jpg" alt="">
                    <img style= "width: 300px;"src="./assets/img.jpg" alt="">
                    <img style= "width: 300px;"src="./assets/img.jpg" alt="">
                    <img style= "width: 300px;"src="./assets/img.jpg" alt="">
                </div>
                <div id="descricao">${items[i].descricao}</div>
                <div id="telefone">Telefone : ${items[i].telefone}</div>
                <div id="email">Email : ${items[i].email}</div>
    
    
            </div>`
        
            bigDiv += partDiv
    
        }
    
    
        /* 
        descricao: "Cortar"
        email: "nicholas878show@gmail.com"
        id: "12haij23"
        listaFotos: []
        telefone: "+55 19 999309932"
        titulo: "Tesoura"
    
    
        <div class="item">
                <div id="titulo">Tesoura</div>
                <div class="boxFotos">
                    <img style= "width: 300px;"src="./assets/img.jpg" alt="">
                    <img style= "width: 300px;"src="./assets/img.jpg" alt="">
                    <img style= "width: 300px;"src="./assets/img.jpg" alt="">
                    <img style= "width: 300px;"src="./assets/img.jpg" alt="">
                    <img style= "width: 300px;"src="./assets/img.jpg" alt="">
                </div>
                <div id="descricao">Cortar</div>
                <div id="telefone">Telefone : +55 19 999309932</div>
                <div id="email">Email : nicholas@gmail.com</div>
    
    
            </div>
        */
    
        //console.log(bigDiv)
    
        let item = document.querySelector('.item');
        item.innerHTML = bigDiv;
    


        
    })

   

    
}


