

import { NextResponse } from 'next/server'


export async function GET (){

   try {

    const res = await fetch(`http://localhost:3000/name/random`)       

    const data = await res.json()

    
    return NextResponse.json({ data })

   }catch(error){console.log(error)}
}
