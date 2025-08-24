import React from 'react'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'
import { MapPin, Clock, DollarSign, Users, ArrowRight, Building2 } from 'lucide-react'

const LatestJobCards = ({job}) => {
    const navigate = useNavigate();
    
    return (
        <div 
            onClick={() => navigate(`/description/${job._id}`)} 
            className='group relative p-6 rounded-2xl shadow-lg bg-white border border-gray-100 cursor-pointer hover:shadow-2xl hover:border-purple-200 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden'
        >
            {/* Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10">
                {/* Company info */}
                <div className='flex items-start justify-between mb-4'>
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center">
                            <Building2 className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                            <h1 className='font-semibold text-lg text-gray-800 group-hover:text-purple-700 transition-colors'>
                                {job?.company?.name}
                            </h1>
                            <div className='flex items-center gap-1 text-sm text-gray-500'>
                                <MapPin className="w-3 h-3" />
                                <span>India</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Arrow icon */}
                    <div className="w-8 h-8 rounded-full bg-gray-50 group-hover:bg-purple-100 flex items-center justify-center transition-all duration-200">
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-0.5 transition-all" />
                    </div>
                </div>

                {/* Job details */}
                <div className="mb-4">
                    <h2 className='font-bold text-xl text-gray-900 mb-2 group-hover:text-purple-800 transition-colors'>
                        {job?.title}
                    </h2>
                    <p className='text-sm text-gray-600 leading-relaxed line-clamp-2'>
                        {job?.description?.length > 120 
                            ? `${job?.description?.substring(0, 120)}...` 
                            : job?.description
                        }
                    </p>
                </div>

                {/* Job metadata */}
                <div className='flex flex-wrap gap-2 mb-4'>
                    <Badge className='bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 font-medium px-3 py-1'>
                        <Users className="w-3 h-3 mr-1" />
                        {job?.position} Positions
                    </Badge>
                    <Badge className='bg-orange-50 text-orange-700 border border-orange-200 hover:bg-orange-100 font-medium px-3 py-1'>
                        <Clock className="w-3 h-3 mr-1" />
                        {job?.jobType}
                    </Badge>
                    <Badge className='bg-green-50 text-green-700 border border-green-200 hover:bg-green-100 font-medium px-3 py-1'>
                        <DollarSign className="w-3 h-3 mr-1" />
                        {job?.salary}LPA
                    </Badge>
                </div>

                {/* Bottom section */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 group-hover:border-purple-100 transition-colors">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-gray-500">Recently posted</span>
                    </div>
                    
                    <button 
                        onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/description/${job._id}`);
                        }}
                        className="text-sm font-medium text-purple-600 hover:text-purple-800 transition-colors"
                    >
                        View Details
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LatestJobCards