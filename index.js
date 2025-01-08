const bar1001 = document.getElementById('bar1001');
const bar1002 = document.getElementById('bar1002');
const python = document.getElementById('python');
const html = document.getElementById('html');
const css = document.getElementById('css');
const js = document.getElementById('js');
const php = document.getElementById('php');

function ponerClase(event, clase){
    //event.target.style.width = '100%';
    event.target.classList.add(clase);
}

bar1001.addEventListener('mouseenter', () => ponerClase( event, 'bar-100'));
bar1002.addEventListener('mouseenter', () => ponerClase( event, 'bar-100'));
python.addEventListener('mouseenter', () => ponerClase( event, 'bar-80'));
html.addEventListener('mouseenter', () => ponerClase( event, 'bar-70'));
css.addEventListener('mouseenter', () => ponerClase( event, 'bar-70'));
js.addEventListener('mouseenter', () => ponerClase( event, 'bar-70'));
php.addEventListener('mouseenter', () => ponerClase( event, 'bar-70'));

const projects = document.getElementsByClassName('card');
projects[0].addEventListener('click', () => location.href = 'https://github.com/jchfbmoll/UniverseProject');
projects[1].addEventListener('click', location.href('https://github.com/Joch1986/tetris'));
projects[2].addEventListener('click', location.reload());

