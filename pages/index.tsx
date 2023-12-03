import Image from "next/image"
import { Ubuntu } from "next/font/google"
import CommentSectionComponent from "@/components/projects/commentsSection";
import { Stack } from "@mui/material";

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

  textTransform: 'uppercase',
  color: 'black',
  fontSize: 24,
  fontWeight: 700,
};


export default function Home() {
  return (
    <div style={{position:'absolute', marginLeft: '15vw', marginTop:'5vw'}}>

    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={'10vw'}
    >
      <div style={{maxWidth:'20vw', width: 'auto'}}>
        <Stack
          justifyContent="center"
          alignItems="center"
          spacing={'2vw'}
        >
          <div style={estiloComponente}>
              <img src="https://iili.io/JzVLjyP.png" style={estiloImagen} />
            </div>
            <h1 style={estiloTitulo}>Soporte a clientes</h1>
            <div style={{width: '100%', textAlign: 'center', fontSize:'1.1rem', color: 'black', wordWrap: 'break-word'}}>
              Este componente permite la creacion de tickets, en conjunto con sus tareas asociadas, asignar encargados y notificar a las areas correspondientes
            </div>
        </Stack>
      </div>
      <div style={{maxWidth:'20vw', width: 'auto'}}>
        <Stack
          justifyContent="center"
          alignItems="center"
          spacing={'2vw'}
        >
          <div style={estiloComponente}>
              <img src="https://iili.io/JzWK2Db.png" style={estiloImagen} />
          </div>
          <h1 style={estiloTitulo}>Gestión de proyectos</h1>
          <div style={{width: '100%', textAlign: 'center', fontSize:'1.1rem', color: 'black', wordWrap: 'break-word'}}>
          Este componente permite la creacion y modificacion de proyectos, asignarle a este un grupo de trabajo y llevar un registro de los trabajado
            </div>
        </Stack>
        </div>
    </Stack>
  </div>
  )
}

