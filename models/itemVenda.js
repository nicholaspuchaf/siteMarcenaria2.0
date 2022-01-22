module.exports = {

    itens : [{titulo:"Tesoura", descricao:"Cortar", listaFotos:[], id:"12haij23", telefone:"+55 19 999309932", email:"nicholas878show@gmail.com"},]
    ,

    retornarTudo(){
        return this.itens;
    }
    ,
    adicionarItens(titulo, descricao, listaFotos, telefone, email){
        let id = gerarId();
        
        let item = {titulo, descricao, listaFotos, id, telefone, email};

        this.itens.push(item);

    }
    ,
    deletarItemPorId(id){
        for(let i = 0; i<this.itens.length;i++){
            if(id==this.itens[i].id){
                this.itens.slice(i,1);
                break;
            }
        }
        console.log(this.itens);

    }

}

function gerarId(){
    return Math.random().toString(36).slice(2,9);
}