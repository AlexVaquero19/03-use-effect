import React, {useState, useEffect} from 'react'

function AjaxComponent() {
  
  const [users, setUsers] = useState([]);
  const API = "https://reqres.in/api/users?page=2";
  //const API = "https://reqresdd.in/api/users24.inf?page=34"; 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getUsuarioEstaticos = () => {
    setUsers([
      {
        "id": 1,
        "email": "george.bluth@reqres.in",
        "first_name": "George",
        "last_name": "Bluth",
        "avatar": "https://reqres.in/img/faces/1-image.jpg"
      },
      {
        "id": 2,
        "email": "janet.weaver@reqres.in",
        "first_name": "Janet",
        "last_name": "Weaver",
        "avatar": "https://reqres.in/img/faces/2-image.jpg"
      },
      {
        "id": 3,
        "email": "emma.wong@reqres.in",
        "first_name": "Emma",
        "last_name": "Wong",
        "avatar": "https://reqres.in/img/faces/3-image.jpg"
      }
    ]);
  }

  const getUsuariosAjaxPms = () => {
    fetch(API)
      .then(response => response.json())
      .then(usersAjax => setUsers(usersAjax.data))
      .catch(error => console.log(error));
  }

  const getUsuariosAjaxAsync = () => {
    setTimeout(async () => {
      try{
        const response = await fetch(API);
        const {data} = await response.json();

        setUsers(data);
        setLoading(false);
      }catch(error){
        console.log(error.message);
        setError(error.message);
      }
    }, 2000);
  }

  useEffect(() => {
    //getUsuarioEstaticos();
    //getUsuariosAjaxPms();
    getUsuariosAjaxAsync();
    
  }, []);

  if(error !== ""){
    return (
      <div className='cargando'>
        <h2>{error}</h2>
      </div>
    )
  }else if(loading === true)
  {
    return (
      <div className='cargando'>
        <h2>Cargando...</h2>
      </div>
    )
  }else if(loading === false && error === ""){
    return (
      <>
        <h2>Listado Usuarios Vía Ajax</h2>
  
        <ol className='userList'>
          {users.map(user => (
            <li key={user.id}>
              <img src={user.avatar} alt={user.first_name} />
              <p>{user.first_name} {user.last_name}</p>
            </li>
          ))}
        </ol>
      </>
    )
  }
}

export default AjaxComponent