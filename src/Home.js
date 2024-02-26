import { useEffect, useState } from "react";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
   
    useEffect(() => {
        // Simulando una carga de datos o proceso
        setTimeout(() => {
            setIsLoading(false);
        }, 1500); // Cambia este valor según sea necesario para simular la duración de la carga
    }, []);

    return (
        <div className="container">
            {isLoading ? (
                <div className="loading-container">
                    <h1>Cargando...</h1>
                    {/* Agrega aquí un spinner de carga si lo deseas */}
                </div>
            ) : (
                <div className="content">
                    <h1 className="text-center">¡Bienvenido!</h1>
                    <h2 className="text-center">Gracias por visitarnos</h2>
                    <p className="text-center">Esperamos que disfrutes de tu estancia en nuestro sitio web.</p>
                </div>
            )}
        </div>
    );
}

export default Home;
