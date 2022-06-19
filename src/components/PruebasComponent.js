import React, {useState, useEffect} from 'react'

function PruebasComponent () {

  const [user, setUser] = useState("Alejandro Vaquero");
  const [counter, setCounter] = useState(0);

  function handleClickModifyUser (e) {
    setUser(e.target.value || "Alejandro Vaquero");
  }

  useEffect(() => {
    console.log(`Has cargado el componente`);
  }, []);

  useEffect(() => {
    setCounter(counter + 1);

    console.log(`Has modificado el Usuario ${counter} veces`);
  }, [user]);

  return (
    <>
      <h2>Ejercicio useEffect</h2>

      <p className={counter >= 10 ? 'label label-green' : 'label'}>
        <strong>{user}</strong>
      </p>

      <form>
        <input type="text" placeholder='Modify User' onChange={handleClickModifyUser} />
      </form>
    </>
  )
}

export default PruebasComponent;