import Image from "next/image"
import { Ubuntu } from "next/font/google"

const ubuntu = Ubuntu({ subsets: ["latin"],  weight: "300"})

const estiloRectangulo: React.CSSProperties = {
  position: 'absolute',
  width: '70%',
  height: '80%',
  backgroundColor: '#FFFFFF',
  top: '10vh',
  left: '25vw'
};

const estiloComponente: React.CSSProperties = {
  width: '16vw',
  height: '16vw',
  alignContent: 'center',
  borderRadius: '50%',
  backgroundColor: '#9BBEC8',
  position: 'relative',
  overflow: 'hidden',
};

const estiloImagen: React.CSSProperties = {
  width: '70%',
  height: '70%',
  objectFit: 'cover',
  position: 'absolute',
  top: '50%', 
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

const estiloTitulo: React.CSSProperties = {

  marginTop: '10px',
  textTransform: 'uppercase',
  color: 'black',
  fontSize: 24,
  fontWeight: 700,
};


export default function Home() {
  return (
    <div style={estiloRectangulo} >
      <div>
      <div style={{ position: 'absolute', top: '5%', left: '10%', display:'inline-block', alignItems: 'center', justifyContent: 'center'}}>
        <div style={estiloComponente}>
          <img src="https://iili.io/JzVLjyP.png" style={estiloImagen} />
        </div>
        <h1 style={estiloTitulo}>Soporte a clientes</h1>
      </div>
      </div>
      <div style={{ position: 'absolute', top: '5%', left: '50%'}}>
        <div style={estiloComponente}>
          <img src="https://iili.io/JzWK2Db.png" style={estiloImagen} />
        </div>
        <h1 style={estiloTitulo}>Gestión de proyectos</h1>
      </div>
    </div>
  )
}

