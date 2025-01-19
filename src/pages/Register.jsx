import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import {toast, Toaster} from "react-hot-toast";
import { useForm } from 'react-hook-form';
import { AuthContext } from '../provider/AuthProvider';
import { saveUser } from '../api/utils';
import axios from 'axios';


const Register = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm()
      const { signInWithGoogle, createUser, updateUserProfile,  } = useContext(AuthContext)
      const navigate = useNavigate()
  
      const [image, setImage] = useState(null);

      const handleImageChange = (e) => {
        setImage(e.target.files[0]);
      };
    
      const imageUpload = async (imageData) => {
        const formData = new FormData();
        formData.append('image', imageData);
        const { data } = await axios.post(
          `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
          formData
        );
        return data.data.display_url;
      };

      const onSubmit= async (data) => {
        console.log(data)

        const { email, password, name } = data;

        try {
          const result = await createUser(email, password);
          const loggedUser = result.user;
          console.log(loggedUser);

          let photoURL = '';
      if (image) {
        photoURL = await imageUpload(image);
        console.log('Image uploaded to ImgBB:', photoURL);
      }

          await updateUserProfile(name, photoURL)
          console.log(result)
          await saveUser({...result?.user, displayName:name, photoURL})
    
          await ({...result?.user, displayName:name, photoURL})

          toast.success('Registration Successful');
          reset(); 
          navigate('/'); 
        } catch (err) {
           console.log(err);
           toast.error(err?.message || 'Registration failed');
         }
       };


  const handleGoogleSignIn = async () => {
    try {
      const data = await signInWithGoogle()
      await saveUser(data?.user)
      toast.success('Register Successful')
      navigate('/')
      
    } catch (err) {
      console.log(err)
      toast.error(err?.message)
    }
  }
    return (
        <div className='lg:w-5/12 mx-auto bg-yellow-300 mt-5 mb-5 rounded-2xl'>

        <div className='mx-7 px-5 py-12'>

          <h1 className='text-xl font-bold text-center'>Register Here</h1>

          <div
            onClick={handleGoogleSignIn}
            className='flex lg:flex-row flex-col cursor-pointer items-center justify-center mt-4 btn'
          >
            <div className='px-4 py-2'>
              <svg className='w-6 h-6' viewBox='0 0 40 40'>
                <path
                  d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
                  fill='#FFC107'
                />
                <path
                  d='M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z'
                  fill='#FF3D00'
                />
                <path
                  d='M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z'
                  fill='#4CAF50'
                />
                <path
                  d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
                  fill='#1976D2'
                />
              </svg>
            </div>

            <span className='w-5/6 px-4 py-3 font-bold text-center'>
              Sign in with Google
            </span>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" {...register("name", { required: "Put a name" })} name="name" placeholder="Put your name here" className="input input-bordered" />
          {errors?.name && <span className="text-red-600">{errors?.name?.message}</span>}
          </div>
        <input
          type="file"
          className='mt-3'
          accept="image/*"
          onChange={handleImageChange}
        />
        {image && <p>Image selected: {image.name}</p>}
            {/* <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input  onChange={handleImageChange} type="text" {...register("photo", { required: "Put a photo url" })} name="photo" placeholder="Put your photo url here" className="input input-bordered" />
          {errors?.photo && <span className="text-red-600">{errors?.photo?.message}</span>}
            </div> */}
            <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" {...register("email", { required: "Email is required" })} name="email" placeholder="Email address" className="input input-bordered" />
          {errors?.email && <span className="text-red-600">{errors?.email?.message}</span>}
            </div>

            <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" {...register("password", { required: "Put a Password" })} name="password" placeholder="Password" className="input input-bordered" />
          {errors?.password && <span className="text-red-600">{errors?.password?.message}</span>}
        </div>
            <div className='mt-6'>
              <button
                type='submit'
                className='w-full px-6 py-3 text-sm font-medium text-white bg-green-800 rounded-lg'
              >
                Register Now
              </button>
            </div>
          </form>

          <div className='flex items-center justify-center mt-4  '>

            <Link
              to='/login'
              className='text-black'
            >
              Don't Have Account <span className='text-red-800 ml-3'>Login Here</span>
            </Link>
          </div>
        </div>
        <Toaster></Toaster>
    </div>
    );
};

export default Register;