function openNavigationMenu(){
    document.getElementById('navigation').style.width = '100%';
    document.getElementById('navigationMenu').style.display = 'flex';
    document.body.style.overflowY = 'hiddden';
}
function closeNavigationMenu(){
    document.getElementById('navigation').style.width = '0';
    document.getElementById('navigationMenu').style.display = 'none';
    document.body.style.overflowY = 'auto';
}