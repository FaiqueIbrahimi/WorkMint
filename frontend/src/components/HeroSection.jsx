import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search, Briefcase, Users, TrendingUp } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-blue-50'>
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>
            
            <div className='relative z-10 text-center px-4 max-w-6xl mx-auto'>
                <div className='flex flex-col gap-8 my-10'>
                    {/* Badge */}
                    <div className='flex justify-center'>
                        <span className='inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 font-semibold text-sm border border-purple-200 shadow-sm'>
                            <TrendingUp className="w-4 h-4" />
                            No. 1 Job Hunt Platform for Students
                        </span>
                    </div>
                    
                    {/* Main heading */}
                    <div className='space-y-4'>
                        <h1 className='text-5xl md:text-7xl font-extrabold leading-tight'>
                            Search, Apply & <br />
                            Get Your{' '}
                            <span className='bg-gradient-to-r from-[#6A38C2] to-[#F83002] bg-clip-text text-transparent'>
                                Dream Jobs
                            </span>
                        </h1>
                        <p className='text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed'>
                            Your one-stop hub where talent meets opportunity, making job hunting and hiring smarter, faster, and more efficient.
                        </p>
                    </div>
                    
                    {/* Search bar */}
                    <div className='flex justify-center mt-8'>
                        <div className='flex w-full max-w-2xl bg-white shadow-2xl border border-gray-200 rounded-full items-center gap-4 p-2 hover:shadow-3xl transition-shadow duration-300'>
                            <div className='flex items-center gap-3 pl-6 flex-1'>
                                <Search className='h-5 w-5 text-gray-400' />
                                <input
                                    type="text"
                                    placeholder='Search for your dream job... (e.g., "React Developer", "Marketing")'
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && searchJobHandler()}
                                    className='outline-none border-none w-full text-gray-700 placeholder-gray-400 text-lg py-3'
                                />
                            </div>
                            <Button 
                                onClick={searchJobHandler} 
                                className="rounded-full bg-gradient-to-r from-[#6A38C2] to-[#8B5CF6] hover:from-[#5b30a6] hover:to-[#7C3AED] px-8 py-3 h-12 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                            >
                                <Search className='h-5 w-5 mr-2' />
                                Search Jobs
                            </Button>
                        </div>
                    </div>
                    
                    {/* Stats section */}
                    <div className='flex justify-center items-center gap-8 mt-12 flex-wrap'>
                        <div className='flex items-center gap-3 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full shadow-md'>
                            <div className='w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center'>
                                <Briefcase className='w-5 h-5 text-white' />
                            </div>
                            <div className='text-left'>
                                <div className='font-bold text-gray-800'>10+</div>
                                <div className='text-sm text-gray-600'>Active Jobs</div>
                            </div>
                        </div>
                        
                        <div className='flex items-center gap-3 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full shadow-md'>
                            <div className='w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center'>
                                <Users className='w-5 h-5 text-white' />
                            </div>
                            <div className='text-left'>
                                <div className='font-bold text-gray-800'>10+</div>
                                <div className='text-sm text-gray-600'>Happy Students</div>
                            </div>
                        </div>
                        
                        <div className='flex items-center gap-3 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full shadow-md'>
                            <div className='w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center'>
                                <TrendingUp className='w-5 h-5 text-white' />
                            </div>
                            <div className='text-left'>
                                <div className='font-bold text-gray-800'>95%</div>
                                <div className='text-sm text-gray-600'>Success Rate</div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Popular searches */}
                    <div className='mt-8'>
                        <p className='text-gray-600 mb-4'>Popular Searches:</p>
                        <div className='flex justify-center gap-3 flex-wrap'>
                            {['Frontend Developer', 'Data Scientist', 'Product Manager', 'UI/UX Designer', 'Backend Developer'].map((term) => (
                                <button
                                    key={term}
                                    onClick={() => {
                                        setQuery(term);
                                        dispatch(setSearchedQuery(term));
                                        navigate("/browse");
                                    }}
                                    className='px-4 py-2 bg-white/80 hover:bg-white border border-gray-200 rounded-full text-gray-700 hover:text-purple-600 hover:border-purple-200 transition-all duration-200 text-sm font-medium'
                                >
                                    {term}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection