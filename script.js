// const addBtn = document.querySelectorAll(".add-task-btn");
// console.log(addBtn)
// addBtn.forEach((button) => button.addEventListener("click", function(event){
//     console.log(event.target);
//     console.log(event.target.dataset.section);

//     if(event.target.dataset.section == 1){
//         newTask(1);
//     }else if(event.target.dataset.section == 2){
//         newTask(2);
//     }else if(event.target.dataset.section == 3){
//         newTask(3);
//     }else{
//         console.log("Erreur lors de la tentative de création d'une nouvelle tache");
//     }

// }));

// const closeBtn = document.getElementById('id111');
// closeBtn.addEventListener('click', closeModal);

// function closeModal(){

//     console.log("Fermeture de la modale!");
//     document.getElementById('id2').style.display = "none";
//     document.getElementById('body').style.display = "grid";
//     document.getElementById('id1').style.display = "grid";

// }

// function newTask(id){

//     console.log("Ajout d'une nouvelle tache pour la colonne " + id);
//     // On cache la balise main et son contenu pour faire de la place à la modale
//     document.getElementById('id1').style.display = "none";

//     // On centre le body pour que la nouvelle balise main soit au centre de l'écran
//     document.getElementById('body').style.display = "flex";
//     document.getElementById('body').style.justifyContent = "center";
//     document.getElementById('body').style.alignItems = "center";
    
//     // On affiche la modale
//     document.getElementById('id2').style.display = "grid";
//     document.getElementById('id2').style.borderRadius = "15px";
//     document.getElementById('id2').style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px";

// }

// function addTask(string){
//     console.log("Bouton appuyé !");
// }

// function deleteTask(){
//     console.log("Tache supprimée")
// }

// function editTask(){

//     console.log("Demande de modification de tache");
// }

// function switchTaskPriority(){

//     console.log("Changement de la priorité de la tache");
// }

// function saveTaskLocalStorage(){


// }

// function deleteTaskLocalStorage(){


// }

