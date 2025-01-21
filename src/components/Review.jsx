import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import FeedbackCard from "../tables/FeedbackCard";


const Review = () => {
    const {data: feedbacks = [], isLoading} = useQuery({
        queryKey:['feedbacks'],
        queryFn: async () => {
         const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/feedbacks`)
         return data
        },
    })
    // console.log(feedbacks)
    return (
        <div>
            <h2 className="text-3xl font-bold text-center text-green-400 mt-6 mb-4">*** Feedback and reviews ***</h2>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
            {
                feedbacks.map(feedback => <FeedbackCard key={feedback._id} feedback={feedback}></FeedbackCard>)
            }
        </div>
        </div>
    );
};

export default Review;