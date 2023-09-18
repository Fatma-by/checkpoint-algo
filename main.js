
function vow(chaine) {
   let s=0;
   for(let i =0; i<chaine.length; i++){
       if (ref.includes(chaine[i])){
           s++}
       
   }
   return s;
}

function checkpoint(chaine){
   let nbc=0;
   let nbw=1;
   let nbv= vow(chaine);
   nbc=chaine.length;
   nbw=chaine.split(" ");
   console.log(nbc,nbw,nbv);
}
checkpoint("i work today.")

