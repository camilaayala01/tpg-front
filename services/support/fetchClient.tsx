import { useEffect, useState } from "react";
import {Cliente, Employee} from "@/types/types";

export default function fetchClient( clientId: any ) {
    const [client, setLeader] = useState<Cliente>();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(`https://psa-soporte-1yfx.onrender.com/clients/${clientId}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Error ${res.status}: ${res.statusText}`);
                }
                console.log(res);
                return res.json();
            })
            .then((data) => {
                setLeader(data);
            })
            .catch((error) => {
                if (error instanceof TypeError && error.message === 'Failed to fetch') {
                    setError('Couldnt connect to server.');
                } else {
                    setError('This Client does not exist.');
                }
            });
        ;
    }, [clientId]);
    const fullName = client ? (`${client['razon social']} - ${client['CUIT']}`) : "-";

    return ({fullName, error})

}