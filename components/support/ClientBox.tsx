import fetchEmployee from "@/services/project/fetchEmployee";
import { Employee } from "@/types/types";
import { useEffect, useState } from "react";
import fetchClient from "@/services/support/fetchClient";

export default function ClientBox({id}: {id:any}) {

    const {fullName,error} =  fetchClient(id);

    return (
        <div style={{ background: 'rgba(255, 255, 255, 0)', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
            <div style={{flex: '1 1 0', alignSelf: 'stretch', background: 'rgba(255, 255, 255, 0)', borderLeft: '1px #B9B9B9 solid', borderTop: '1px #B9B9B9 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                <div style={{alignSelf: 'stretch', paddingLeft: 12, paddingRight: 12, paddingTop: 10, paddingBottom: 10, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{flex: '1 1 0', color: 'black', fontSize: '0.9rem', fontWeight: '400', wordWrap: 'break-word'}}>{fullName}</div>
                </div>
            </div>
        </div>
    )

}