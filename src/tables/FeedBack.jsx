import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const FeedBack = () => {
    const navigate = useNavigate()
    const  {
            register,
            handleSubmit,
            reset,
            formState: { errors },
          } = useForm()


    const onSubmit= async (data) => {
          console.log(data)
        const participant = {
            ...data, 
             }
          
            try{
                const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/feedback`, participant)
                console.log(data)
                toast.success('Thank you for your Feedback')
                reset()
                navigate('/')
                }catch(err){
                  console.log(err)
                }
            }
    return (
        <div>
            <h2 className="text-2xl font-bold text-center mt-7 text-lime-600">
               ** Give us your Feedback Here **
            </h2>
            <div className="border border-lime-500 w-11/12 mx-auto px-3 py-3 mt-6 rounded-xl">
            <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" {...register("name", { required: "Put a name" })} name="name" placeholder="Put your name here" className="input input-bordered" />
          {errors?.name && <span className="text-red-600">{errors?.name?.message}</span>}
          </div>
          <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" {...register("photo", { required: "Put a photo" })} photo="photo" placeholder="Give your photo url here" className="input input-bordered" />
          {errors?.photo && <span className="text-red-600">{errors?.photo?.message}</span>}
          </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Give Feedback About our Services</span>
          </label>
          <input type="text" {...register("feedback", { required: "feedback is required" })} name="feedback" placeholder="please write your feedback here" className="input input-bordered" />
          {errors?.feedback && <span className="text-red-600">{errors?.feedback?.message}</span>}
            </div>

            <div className="form-control">
          <label className="label">
            <span className="label-text">Your Contact Number</span>
          </label>
          <input type="number" {...register("number", { required: "Put a number" })} name="number" placeholder="+88" className="input input-bordered" />
          {errors?.number && <span className="text-red-600">{errors?.number?.message}</span>}
        </div>
            <div className='mt-6'>
              <button
                type='submit'
                className='w-full px-6 py-3 text-sm font-medium text-white bg-lime-500 rounded-lg'
              >
                Give Feedback
              </button>
            </div>
          </form>
            </div>


        </div>
    );
};

export default FeedBack;



