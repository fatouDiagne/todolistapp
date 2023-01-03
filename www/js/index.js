



function ajouterTache(){
    let newTask = '<li>'+tache.value+'</li>'
    listeTache.innerHTML += newTask
    tache.value=""
    tache.focus()
    $(listeTache).listview('refresh')
}


















function refresh(){
    listeTache.innerHTML = ''
    $(listeTache).listview('refresh')
}