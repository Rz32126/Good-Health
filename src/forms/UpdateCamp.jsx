import { useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateCamp = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue, 
  } = useForm();

  useEffect(() => {
    const fetchCampData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/update-camp/${id}`);
        const campData = response.data;

        setValue("name", campData.name);
        setValue("photo", campData.photo);
        setValue("fee", campData.fee);
        setValue("date", campData.date);
        setValue("location", campData.location);
        setValue("health", campData.health);
        setValue("count", campData.count);
        setValue("description", campData.description);
      } catch (err) {
        console.error(err);
        toast.error("Failed to load camp data.");
      }
    };

    fetchCampData();
  }, [id, setValue]);

  const onSubmit = async (data) => {
    setLoading(true);

    const { count } = data;
    const participant = {
      ...data,
      count: parseInt(count),
      participant: {
        email: user?.email,
        name: user?.displayName,
        image: user?.photoURL,
      },
    };

    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/update-camp/${id}`, participant);
      console.log(response.data);
      toast.success("Data Updated Successfully");
      reset();
      navigate('/dashboard/manage-camp')
    } catch (err) {
      console.log(err);
      toast.error("Failed to update camp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-10/12 mx-auto bg-green-300 mb-5 rounded-2xl'>
      <div className='mx-7 px-5 py-12'>
        <h1 className='text-xl font-bold text-center'>Update Your Camps Here</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Camp Name</span>
            </label>
            <input type="text" {...register("name", { required: "Put a name" })} name="name" placeholder="Put Camp name here" className="input input-bordered" />
            {errors?.name && <span className="text-red-600">{errors?.name?.message}</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input type="text" {...register("photo", { required: "Put a photo url" })} name="photo" placeholder="Put a photo url here" className="input input-bordered" />
            {errors?.photo && <span className="text-red-600">{errors?.photo?.message}</span>}
          </div>
          <div className='flex'>
             <div className="form-control w-6/12">
          <label className="label">
            <span className="label-text">Camp Fees</span>
          </label>
          <input type="number" {...register("fee", { required: "Camp fee required" })} name="fee" placeholder="Put Total Camp Fee" className="input input-bordered" />
          {errors?.fee && <span className="text-red-600">{errors?.fee?.message}</span>}
             </div>
             <div className="form-control ml-4 w-6/12">
          <label className="label">
            <span className="label-text">Date & Time</span>
          </label>
          <input type="text" {...register("date", { required: "Give the Date and Time" })} name="date" placeholder="Date & Time" className="input input-bordered" />
          {errors?.date && <span className="text-red-600">{errors?.date?.message}</span>}
             </div>
          </div>
          <div className='flex gap-4'>
            <div className="form-control w-6/12">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input type="text" {...register("location", { required: "location is required" })} name="location" placeholder="location" className="input input-bordered" />
              {errors?.location && <span className="text-red-600">{errors?.location?.message}</span>}
            </div>
            <div className="form-control w-6/12">
              <label className="label">
                <span className="label-text">Healthcare Name</span>
              </label>
              <input type="text" {...register("health", { required: "HealthCare is required" })} name="health" placeholder="HealthCare Name" className="input input-bordered" />
              {errors?.health && <span className="text-red-600">{errors?.health?.message}</span>}
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">participant count</span>
            </label>
            <input type="number" defaultValue={0} {...register("count", { required: "count is required" })} name="count" placeholder="count address" className="input input-bordered" />
            {errors?.count && <span className="text-red-600">{errors?.count?.message}</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input type="text" {...register("description", { required: "description is required" })} name="description" placeholder="description address" className="input input-bordered" />
            {errors?.description && <span className="text-red-600">{errors?.description?.message}</span>}
          </div>
          <div className='mt-6'>
            <button
              type='submit'
              className='w-full px-6 py-3 text-sm font-medium text-green-700 bg-yellow-200 rounded-lg'
            >
              Update the camp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCamp;
