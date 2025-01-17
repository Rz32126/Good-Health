import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useContext, useState } from 'react'
import { AuthContext } from '../provider/AuthProvider'


export default function JoinModal({ closeModal, isOpen, setIsOpen, camp}) {
const {user} = useContext(AuthContext)
const { health, name, fee, location, _id } = camp || {}
const [registerInfo, setRegisterInfo] = useState({
  participant:{
    name: user?.displayName,
    email: user?.email,
  },
  campId: _id,
  age: '',
  number: '',
  gender: '',
  contact: '',
  status: 'Pending',
})
const handleRegister = async () => {
  registerInfo.email = user?.email
  registerInfo.name = user?.displayName
  console.log(registerInfo)
}
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open dialog</button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
            <DialogTitle className="font-bold">Name: {name}</DialogTitle>
            <Description>Camp Fee: ${fee}</Description>
            <p>Location: {location}</p>
            <p>Healthcare Professional Name: {health}</p>
            <p
            // name='name'
            // id='name'
            // onChange={(e) => setRegisterInfo(prv=>{
            //  return{...prv, name: e.target.value}
            // })} 
            >Participant Name: {user?.displayName}</p>
            <p
            // name='email'
            // id='email'
            // onChange={(e) => setRegisterInfo(prv=>{
            //  return{...prv, email: e.target.value}
            // })}
            >Participant Email: {user?.email}</p>
               <p className='flex'>Age: <input
               name='age'
               id='age'
               onChange={(e) => setRegisterInfo(prv=>{
                return{...prv, age: e.target.value}
               })}
               className='input input-bordered'></input></p>
               <p>Phone Number:<input
                name='number'
                id='number'
                onChange={(e) => setRegisterInfo(prv=>{
                return{...prv, number: e.target.value}
                })}
                className='input input-bordered' type='number'></input></p>
            <div className='flex'>
                 <p className='mt-2'>Gender:</p>
                 <select
                 name='gender'
                 id='gender'
                 onChange={(e) => setRegisterInfo(prv=>{
                  return{...prv, gender: e.target.value}
                 })} 
                 className="select select-bordered w-full max-w-xs">
                    <option>Male</option>
                    <option>Female</option>
                 </select>
            </div>
            <p>Emergency Contact: <input
             name='contact'
             id='contact'
             onChange={(e) => setRegisterInfo(prv=>{
              return{...prv, contact: e.target.value}
             })}
             className='input input-bordered' type='number'></input></p>
            <div className="flex gap-4">
              <button onClick={handleRegister}>Register</button>
              <button onClick={() => setIsOpen(false)}>Cancel</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}