import { useEffect, useState } from "react";
import { Employee } from "@/types/types";

export default function LeaderBox({ leaderId }: {leaderId: number}) {
    const [leader, setLeader] = useState<Employee>();
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      fetch(`http://localhost:8080/employees/${leaderId}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Error ${res.status}: ${res.statusText}`);
          }
          return res.json();
        })
        .then((data) => {
          setLeader(data);
        })
        .catch((error) => {
          if (error instanceof TypeError && error.message === 'Failed to fetch') {
            setError('Couldnt connect to server.');
          } else {
            setError('This leader does not exist.');
          }
        });
    }, [leaderId]);

    const fullName = leader ? (`${leader['Nombre']} ${leader['Apellido']}`) : "-";
    
    return (
     <div style={{ background: 'rgba(255, 255, 255, 0)', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
        <div style={{flex: '1 1 0', alignSelf: 'stretch', background: 'rgba(255, 255, 255, 0)', borderLeft: '1px #B9B9B9 solid', borderTop: '1px #B9B9B9 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
            <div style={{alignSelf: 'stretch', paddingLeft: 12, paddingRight: 12, paddingTop: 10, paddingBottom: 10, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                <div style={{flex: '1 1 0', color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>{fullName} {}</div>
            </div>
        </div>
    </div>
    )

}