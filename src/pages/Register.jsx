import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'


export default function Register(){
const [name,setName] = useState('')
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const [err,setErr] = useState(null)
const { register } = useAuth()
const nav = useNavigate()


async function handleSubmit(e){
e.preventDefault(); setErr(null)
try{
await register({ name, email, password })
nav('/')
}catch(ex){ setErr(ex.message) }
}


return (
<div style={{maxWidth:420}}>
<h2>Register</h2>
<form onSubmit={handleSubmit} className="mt-4">
<div style={{marginBottom:8}}>
<input value={name} onChange={e=>setName(e.target.value)} placeholder="Full name" style={{width:'100%',padding:8}} />
</div>
<div style={{marginBottom:8}}>
<input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" style={{width:'100%',padding:8}} />
</div>
<div style={{marginBottom:8}}>
<input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" style={{width:'100%',padding:8}} />
</div>
{err && <div style={{color:'red',marginBottom:8}}>{err}</div>}
<button className="btn" type="submit">Register</button>
</form>
</div>
)
}