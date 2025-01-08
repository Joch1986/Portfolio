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
projects[1].addEventListener('click', () => location.href = 'https://github.com/Joch1986/Tetris');
projects[2].addEventListener('click', () => location.href = 'https://github.com/Joch1986/Portfolio');

window.addEventListener('scroll', function() {
  const skills = document.getElementsByClassName('progress-bar');
  console.log(skills);
  for(let i = 0; i < skills.length; i++){
    const element = skills[i];
    const rect = element.getBoundingClientRect();

    // Si el elemento está en la pantalla (su parte superior está dentro del viewport)
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      // Realizar alguna acción
      element.classList.add('bar-'+element.textContent.split('%')[0].trim());
    }
  }

});