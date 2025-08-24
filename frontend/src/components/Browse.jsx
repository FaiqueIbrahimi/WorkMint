import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import Job from './Job';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import useGetAllJobs from '@/hooks/useGetAllJobs';
import { Search, Filter, MapPin, Briefcase } from 'lucide-react';

const Browse = () => {
    useGetAllJobs();
    const {allJobs} = useSelector(store=>store.job);
    const {searchedQuery} = useSelector(store=>store.job);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        return ()=>{
            dispatch(setSearchedQuery(""));
        }
    },[])
    
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            
            {/* Header Section */}
            <div className='bg-white border-b border-gray-200'>
                <div className='max-w-7xl mx-auto px-4 py-8'>
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className='text-3xl font-bold text-gray-900 mb-2'>
                                {searchedQuery ? `Jobs for "${searchedQuery}"` : 'Browse All Jobs'}
                            </h1>
                            <div className="flex items-center gap-4 text-gray-600">
                                <div className="flex items-center gap-2">
                                    <Briefcase className="w-4 h-4" />
                                    <span className="text-sm">{allJobs.length} jobs found</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    <span className="text-sm">India</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Filters */}
                        <div className="flex items-center gap-3">
                            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                <Filter className="w-4 h-4" />
                                <span>Filters</span>
                            </button>
                            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500">
                                <option>Most Recent</option>
                                <option>Salary: High to Low</option>
                                <option>Salary: Low to High</option>
                                <option>Most Relevant</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Jobs Grid */}
            <div className='max-w-7xl mx-auto px-4 py-8'>
                {allJobs.length === 0 ? (
                    <div className="text-center py-16">
                        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Search className="w-12 h-12 text-gray-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
                        <p className="text-gray-600 mb-6">Try adjusting your search criteria or browse different categories.</p>
                        <button 
                            onClick={() => dispatch(setSearchedQuery(""))}
                            className="px-6 py-3 bg-gradient-to-r from-[#6A38C2] to-[#8B5CF6] text-white rounded-lg hover:from-[#5b30a6] hover:to-[#7C3AED] transition-colors"
                        >
                            Browse All Jobs
                        </button>
                    </div>
                ) : (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {allJobs.map((job) => (
                            <Job key={job._id} job={job}/>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Browse