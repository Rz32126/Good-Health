import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useContext, useState } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import axios from 'axios'
import toast from 'react-hot-toast'


export default function JoinModal({ closeModal, isOpen, setIsOpen, camp, refetch}) {
const {user} = useContext(AuthContext)
const { health, name, fee, count, location, _id } = camp || {}
// const participantCount = parseInt(count);
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
  // console.log(registerInfo)
  try{
    await axios.post(`${import.meta.env.VITE_API_URL}/register`, registerInfo)
    await axios.patch(`${import.meta.env.VITE_API_URL}/camps/count/${_id}`, {countToUpdate: count})
    toast.success('Successfully Your Register done.')
    refetch()
  }catch(err){
    console.log(err)
  }
  finally{
    closeModal()
  }

}
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open dialog</button>
      <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
            <DialogTitle className="font-bold">Name: {name}</DialogTitle>
            <Description>Camp Fee: ${fee}</Description>
            <p>Location: {location}</p>
            {/* <p>Participant Count: {count}</p> */}
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
    </div>
  )
}