// const imagenApi =  document.createElement('img');

const person =[{
    id:1,
    nombre:"Me llamo randomUser",
    edad:22,
},
{
  id:4,
  nombre:"Me llamo randomUser4",
  edad:22,
},
{
  id:7,
  nombre:"Me llamo randomUser7",
  edad:22,
}]
function crearComponente(props) {
  const {id,nombre,edad} = props;
  const imageUrl = `https://randomuser.me/api/portraits/women/${id}.jpg`;

  const templateString = `
  <div class="picture">
  <img src="${imageUrl}" alt="Avatar" id="avatar-${id}" onclick="opacityChange('avatar-${id}')">
    <p class="nombre">${nombre}</p>
    <p class="nombre">${edad}</p>
  </div>
`;

  return templateString;
}

person.forEach((element) => {
  const componente = crearComponente(element);
  document.body.innerHTML += componente;
});

function opacityChange(id) {
  const image = document.getElementById(id);
    image.classList.remove("disabled");
    image.style.opacity = "0.3";
}