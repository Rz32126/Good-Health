import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider'


export default function JoinModal({ closeModal, isOpen, setIsOpen, camp}) {
const {user} = useContext(AuthContext)
const {health,name,fee,location} = camp || {}
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
            <p>Participant Name: {user?.displayName}</p>
            <p>Participant Email: {user?.email}</p>
               <p className='flex'>Age: <input className='input input-bordered'></input></p>
               <p>Phone Number:<input className='input input-bordered' type='number'></input></p>
            <div className='flex'>
                 <p className='mt-2'>Gender:</p>
                 <select className="select select-bordered w-full max-w-xs">
                    <option>Male</option>
                    <option>Female</option>
                 </select>
            </div>
            <p>Emergency Contact: <input className='input input-bordered' type='number'></input></p>
            <div className="flex gap-4">
              <button onClick={() => setIsOpen(false)}>Cancel</button>
              <button onClick={() => setIsOpen(false)}>Deactivate</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}