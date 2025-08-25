import React, { useState } from 'react'
import { Button } from './ui/button'
import { Bookmark, MapPin, Clock, DollarSign, Users, Building2, Calendar, BookmarkCheck } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const Job = ({job}) => {
    const navigate = useNavigate();
    const [isSaved, setIsSaved] = useState(false);

    const daysAgoFunction = (mongodbTime) => {
        const createdAt = new Date(mongodbTime);
        const currentTime = new Date();
        const timeDifference = currentTime - createdAt;
        return Math.floor(timeDifference/(1000*24*60*60));
    }

    const handleSaveJob = () => {
        setIsSaved(!isSaved);
    }
    
    return (
        <div className='group p-6 rounded-2xl shadow-lg bg-white border border-gray-100 hover:shadow-2xl hover:border-purple-200 transition-all duration-300 transform hover:-translate-y-1'>
            {/* Header */}
            <div className='flex items-center justify-between mb-4'>
                <div className='flex items-center gap-2 text-sm text-gray-500'>
                    <Calendar className="w-4 h-4" />
                    <p>{daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}</p>
                </div>
                <Button 
                    variant="outline" 
                    className={`rounded-full transition-all duration-200 ${isSaved ? 'bg-purple-50 border-purple-200 text-purple-600' : 'hover:bg-purple-50 hover:border-purple-200 hover:text-purple-600'}`} 
                    size="icon"
                    onClick={handleSaveJob}
                >
                    {isSaved ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                </Button>
            </div>

            {/* Company info */}
            <div className='flex items-center gap-4 mb-4'>
                <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 p-1">
                        <Avatar className="w-full h-full">
                            <AvatarImage src={job?.company?.logo} className="rounded-xl object-cover" />
                        </Avatar>
                    </div>
                    {/* Online indicator */}
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 border-2 border-white rounded-full"></div>
                </div>
                <div className="flex-1">
                    <h1 className='font-semibold text-lg text-gray-800 group-hover:text-purple-700 transition-colors'>{job?.company?.name}</h1>
                    <div className='flex items-center gap-1 text-sm text-gray-500'>
                        <MapPin className="w-3 h-3" />
                        <span>India</span>
                    </div>
                </div>
                <div className="text-right">
                    <div className="text-xs text-gray-400 uppercase tracking-wide">Actively hiring</div>
                </div>
            </div>

            {/* Job details */}
            <div className="mb-5">
                <h2 className='font-bold text-xl text-gray-900 mb-2 group-hover:text-purple-800 transition-colors'>
                    {job?.title}
                </h2>
                <p className='text-sm text-gray-600 leading-relaxed line-clamp-3'>
                    {job?.description}
                </p>
            </div>

            {/* Job metadata */}
            <div className='flex flex-wrap gap-2 mb-6'>
                <Badge className='bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 font-medium px-3 py-1.5'>
                    <Users className="w-3 h-3 mr-1" />
                    {job?.position} Positions
                </Badge>
                <Badge className='bg-orange-50 text-orange-700 border border-orange-200 hover:bg-orange-100 font-medium px-3 py-1.5'>
                    <Clock className="w-3 h-3 mr-1" />
                    {job?.jobType}
                </Badge>
                <Badge className='bg-green-50 text-green-700 border border-green-200 hover:bg-green-100 font-medium px-3 py-1.5'>
                    {/* <DollarSign className="w-3 h-3 mr-1" /> */}
                    {job?.salary}LPA
                </Badge>
            </div>

            {/* Action buttons */}
            <div className='flex items-center gap-3 pt-4 border-t border-gray-100 group-hover:border-purple-100 transition-colors'>
                <Button 
                    onClick={() => navigate(`/description/${job?._id}`)} 
                    variant="outline"
                    className="flex-1 hover:bg-purple-50 hover:border-purple-200 hover:text-purple-700 transition-all duration-200"
                >
                    <Building2 className="w-4 h-4 mr-2" />
                    View Details
                </Button>
                <Button 
                    onClick={handleSaveJob}
                    className={`flex-1 transition-all duration-200 ${
                        isSaved 
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600' 
                        : 'bg-gradient-to-r from-[#6A38C2] to-[#8B5CF6] hover:from-[#5b30a6] hover:to-[#7C3AED]'
                    }`}
                >
                    {isSaved ? <BookmarkCheck className="w-4 h-4 mr-2" /> : <Bookmark className="w-4 h-4 mr-2" />}
                    {isSaved ? 'Saved' : 'Save For Later'}
                </Button>
            </div>
        </div>
    )
}

export default Job