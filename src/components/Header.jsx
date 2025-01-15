import { Carousel, Typography, Button } from "@material-tailwind/react";

const Header = () => {
    return (
        <div>
     <Carousel className="rounded-xl mt-24">
       <div className="relative min-h-screen w-full">
         <img
           src="https://i.ibb.co.com/8xn7qsL/zhen-h-Xruf17-Orkw-M-unsplash.jpg"
           alt="image 1"
           className="min-h-screen w-full object-cover"
         />
         <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
           <div className="w-3/4 text-center md:w-2/4">
             <Typography
               variant="h1"
               color="white"
               className="mb-4 text-3xl md:text-4xl lg:text-5xl"
             >
               The Beauty of Nature
             </Typography>
             <Typography
               variant="lead"
               color="white"
               className="mb-12 opacity-80"
             >
               It is not so much for its beauty that the forest makes a claim
               upon men&apos;s hearts, as for that subtle something, that quality
               of air that emanation from old trees, that so wonderfully changes
               and renews a weary spirit.
             </Typography>
             <div className="flex justify-center gap-2">
               <Button size="lg" color="white">
                 Explore
               </Button>
               <Button size="lg" color="white" variant="text">
                 Gallery
               </Button>
             </div>
           </div>
         </div>
       </div>
       <div className="relative min-h-screen w-full">
         <img
           src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
           alt="image 2"
           className="min-h-screen w-full object-cover"
         />
         <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
           <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
             <Typography
               variant="h1"
               color="white"
               className="mb-4 text-3xl md:text-4xl lg:text-5xl"
             >
               The Beauty of Nature
             </Typography>
             <Typography
               variant="lead"
               color="white"
               className="mb-12 opacity-80"
             >
               It is not so much for its beauty that the forest makes a claim
               upon men&apos;s hearts, as for that subtle something, that quality
               of air that emanation from old trees, that so wonderfully changes
               and renews a weary spirit.
             </Typography>
             <div className="flex gap-2">
               <Button size="lg" color="white">
                 Explore
               </Button>
               <Button size="lg" color="white" variant="text">
                 Gallery
               </Button>
             </div>
           </div>
         </div>
       </div>
       <div className="relative min-h-screen w-full">
         <img
           src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
           alt="image 3"
           className="min-h-screen w-full object-cover"
         />
         <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
           <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
             <Typography
               variant="h1"
               color="white"
               className="mb-4 text-3xl md:text-4xl lg:text-5xl"
             >
               The Beauty of Nature
             </Typography>
             <Typography
               variant="lead"
               color="white"
               className="mb-12 opacity-80"
             >
               It is not so much for its beauty that the forest makes a claim
               upon men&apos;s hearts, as for that subtle something, that quality
               of air that emanation from old trees, that so wonderfully changes
               and renews a weary spirit.
             </Typography>
             <div className="flex gap-2">
               <Button size="lg" color="white">
                 Explore
               </Button>
               <Button size="lg" color="white" variant="text">
                 Gallery
               </Button>
             </div>
           </div>
         </div>
       </div>
     </Carousel>
        </div>
    );
};

export default Header;