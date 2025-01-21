

// const FeedbackCard = ({ feedback }) => {
//     return (
//         <div>
//             <div className="hero bg-base-200 min-h-screen">
//   <div className="hero-content flex-col lg:flex-row-reverse">
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
//       className="max-w-sm rounded-lg shadow-2xl" />
//     <div>
//       <h1 className="text-5xl font-bold">{feedback.name}</h1>
//       <p className="py-6">
//        {feedback.feedback}
//       </p>
//       <p className="py-6">
//        {feedback.feedback}
//       </p>
//       <button className="btn btn-primary">Get Started</button>
//     </div>
//   </div>
// </div>
//         </div>
//     );
// };

// export default FeedbackCard;



import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
  } from "@material-tailwind/react";
   
  function StarIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5 text-yellow-700"
      >
        <path
          fillRule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
   
  export default function FeedbackCard({ feedback }) {
    return (
      <Card color="transparent" shadow={false} className="w-full border border-gray-400 mb-5 px-5 py-5 mt-4">
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="mx-0 flex items-center gap-4 pt-0 pb-8"
        >
          <Avatar
            size="lg"
            variant="circular"
            src={feedback.photo}
            alt="tania andrew"
          />
          <div className="flex w-full flex-col gap-0.5">
            <div className="flex items-center justify-between">
              <Typography variant="h5" color="blue-gray">
                Name: {feedback.name}
              </Typography>
              <div className="5 flex items-center gap-0">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </div>
            <Typography color="blue-gray">Contact Number: + {feedback.number}</Typography>
          </div>
        </CardHeader>
        <CardBody className="mb-6 p-0">
          <Typography>
            {feedback.feedback}
          </Typography>
        </CardBody>
      </Card>
    );
  }