import { Carousel, Typography, Button } from "@material-tailwind/react";

const Header = () => {
    return (
        <div>
     <Carousel className="rounded-xl mt-24">
       <div className="relative min-h-screen w-full">
         <img
           src="https://i.ibb.co.com/rQvTykd/Screenshot-2025-01-18-020517.png"
           alt="image 1"
           className="min-h-screen w-full object-cover"
         />
         <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/55">
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
           src="https://i.ibb.co.com/B6h0WbZ/Screenshot-2025-01-18-020254.png"
           alt="image 2"
           className="min-h-screen w-full object-cover"
         />
         <div className="absolute inset-0 grid h-full w-full items-center bg-black/55">
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
           src="https://i.ibb.co.com/6ZkpB4r/Screenshot-2025-01-18-021314.png"
           alt="image 3"
           className="min-h-screen w-full object-cover"
         />
         <div className="absolute inset-0 grid h-full w-full items-end bg-black/55">
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