// const imageSimple =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
// const niceImg =`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`  
// id in niceImg is 000 format. as 001  002  012  200 
import React from 'react'

export const genImg=()=>{
    const ids=[1,2,3,4,5,6,7,8,9]
    // const niceImg =`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00${id}.png`
    return (
        ids.map(id=>{return <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00${id}.png`} alt=""/>})
    )

}
export const genImg99=()=>{
    const id=((Math.ceil(Math.random()*99))/100).toString().replace(".","")
    const niceImg =`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`
    return niceImg
    

}

export const genImage=(id)=>{
    let niceImage='';
    (id<=9)&&(niceImage=`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00${id}.png`);
    (id>9&&id<=99)&&(niceImage=`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0${id}.png`);
    (id>99&&id<=810)&&(niceImage=`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`);
    return niceImage; 
}
