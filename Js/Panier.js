// // Sélectionnez les boutons plus et moins
// const plusButtons = document.querySelectorAll('.bouton-plus');
// const moinsButtons = document.querySelectorAll('.bouton-moins');

// // Bouclez sur chaque bouton plus et moins
// for (let i = 0; i < plusButtons.length; i++) {
//   // Ajoutez un gestionnaire d'événements pour le clic sur le bouton plus
//   plusButtons[i].addEventListener('click', function() {
//     // Sélectionnez l'élément avec l'ID blockProduit
//     const blockProduit = document.getElementById('blockProduit');

//     // Ajoutez la classe box__pcpromo à l'élément
//     blockProduit.classList.add('box__pcpromo');

//     // Obtenez le produit actuellement sélectionné
//     const product = { id: i }; // Remplacez cette ligne par la logique réelle pour obtenir le produit actuellement sélectionné

//     // Appelez la méthode add de la classe Pc pour ajouter le produit au panier
//     Pc.add(product);
//   });

//   // Ajoutez un gestionnaire d'événements pour le clic sur le bouton moins
//   moinsButtons[i].addEventListener('click', function() {
//     // Sélectionnez l'élément avec l'ID blockProduit
//     const blockProduit = document.getElementById('blockProduit');

//     // Supprimez la classe box__pcpromo de l'élément
//     blockProduit.classList.remove('box__pcpromo');

//     // Obtenez le produit actuellement sélectionné
//     const product = { id: i }; // Remplacez cette ligne par la logique réelle pour obtenir le produit actuellement sélectionné

//     // Appelez la méthode remove de la classe Pc pour supprimer le produit du panier
//     Pc.remove(product);
//   });
// }


// /* class Pc {
//     constructor() {
//         let Pc = localStorage.getItem("Pc");
//         if (Pc == null){
//             this.Pc = [];
//         }else {
//             this.Pc = JSON.parse(Pc);
//         }
//     }

//     save(){
//         localStorage.setItem("Pc" ,JSON.stringify(this.Pc));
//     }

//     add(product) {
//         let foundProduct = this.Pc.find(p => p.id == product.id);
//         if (foundProduct != undefined) {
//             foundProduct.quantity++;
//         }else {
//             product.quantity = 1;
//             this.Pc.push(product);
//         }
//         this.save();
//     }

//     remove(product) {
        
//         this.Pc = this.Pc.filter(p => p.id != product.id);
//         this.save();
//     } 

//     changeQuantity(product, quantity) {
//         let foundProduct = this.Pc.find(p => p.id == product.id);
//         if (foundProduct != undefined) {
//             foundProduct.quantity += quantity;
//             if (foundProduct.quantity <= 0) {
//                 this.removeFromPc(foundProduct);
//             }else {
//                 savePc();
//             }
//         }
//     }

//     getNumberProduct() {
//         let number = 0;
//         for (let product of this.Pc) {
//             number += product.quantity;
//         }
//         return number; 
//     }

//     getTotalPrice() {
//         let number = 0;
//         for (let product of this.Pc) {
//             total += product.quantity * product.price;
//         }
//         return total; 
//     }



// }







/* sauvegarder les info
 */

 function savePc(Pc) {
    localStorage.setItem("Pc", JSON.stringify(Pc));/* transforme en chaine de caractere */
}
/* recupere les info
 */
function getPc() {
    let Pc = localStorage.getItem("Pc");/* transforme l'objet en tableaux, objet, etc */
    if (Pc == null){
        return [];  /* si Pc null retourun tableau vide  */
    }
    else{
        return JSON.parse(Pc); /*retourne les objets*/
    } 
}
/* partage les info
 */
function addPc(product) {
    let Pc = getPc(); /* recupere le panier dans le local storage */
    let foundProduct = Pc.find(p => p.id == product.id); /* recherche dans le panier si il ya produit dont l'id et égale a l id que je veux ajouter */
    if(foundProduct != undefined){ /* si le produit n'est pas undefined on augment la quantite */
        foundProduct.quantity++;
    }
    else{
        product.quantity = 1; /* la quantite rajouter */
        Pc.push(product); /* ajoute un produit au panier  */
    }
    savePc(Pc);  /* sauvegarde le panier */
}


function removeFromPc(product){
    let Pc = getPc();
    Pc = Pc.filter(p => p.id != product.id);
    savePc(Pc);
}

function changeQuantity(product, quantity){
    let Pc = getPc();
    let foundProduct = Pc.find(p => p.id == product.id);
    if ( foundProduct != undefined){
        foundProduct.quantity += quantity;
        if(foundProduct.quantity <= 0){
            removeFromPc(foundProduct);
        }else{
             savePc(Pc);
        }
    }
}

function getNumberProduct(){
    let Pc = getPc();
    let number = 0;
    for(let product of basket){
        number += product.quantity;
    }
    return number; 
}

function getTotalPrice(){
    let Pc = getPc();
    let number = 0;
    for(let product of basket){
        number += product.quantity * product.price;
    }
    return total;
}
