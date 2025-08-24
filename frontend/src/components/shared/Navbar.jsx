import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { Avatar, AvatarImage } from '../ui/avatar'
import { LogOut, User2 } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { USER_API_END_POINT } from '../../utils/constant.js'
import { setUser } from '../../redux/authSlice.js'
import { toast } from 'sonner'

const Navbar = () => {
    const { user } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
            if (res.data.success) {
                dispatch(setUser(null));
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }

    const handleLogoClick = () => {
        navigate('/');
    };

    return (
        <nav className='bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50'>
            <div className='flex items-center justify-between mx-auto max-w-7xl h-20 px-6 lg:px-10'>
                <div className='flex items-center'>
                    <button 
                        onClick={handleLogoClick}
                        className='text-3xl font-extrabold bg-gradient-to-r from-[#6A38C2] to-[#F83002] bg-clip-text text-transparent hover:scale-105 transition-transform duration-200 cursor-pointer'
                    >
                        Work<span className='text-[#F83002]'>Mint</span>
                    </button>
                </div>
                
                <div className='flex items-center gap-8'>
                    <ul className='hidden md:flex font-medium items-center gap-8'>
                        {
                            user && user.role === 'recruiter' ? (
                                <>
                                    <li>
                                        <Link 
                                            to="/admin/companies" 
                                            className='text-gray-700 hover:text-[#6A38C2] px-3 py-2 rounded-lg hover:bg-purple-50 transition-all duration-200 font-medium'
                                        >
                                            Companies
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            to="/admin/jobs" 
                                            className='text-gray-700 hover:text-[#6A38C2] px-3 py-2 rounded-lg hover:bg-purple-50 transition-all duration-200 font-medium'
                                        >
                                            Jobs
                                        </Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        <Link 
                                            to="/" 
                                            className='text-gray-700 hover:text-[#6A38C2] px-3 py-2 rounded-lg hover:bg-purple-50 transition-all duration-200 font-medium'
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            to="/jobs" 
                                            className='text-gray-700 hover:text-[#6A38C2] px-3 py-2 rounded-lg hover:bg-purple-50 transition-all duration-200 font-medium'
                                        >
                                            Jobs
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            to="/browse" 
                                            className='text-gray-700 hover:text-[#6A38C2] px-3 py-2 rounded-lg hover:bg-purple-50 transition-all duration-200 font-medium'
                                        >
                                            Browse
                                        </Link>
                                    </li>
                                </>
                            )
                        }
                    </ul>
                    
                    {
                        !user ? (
                            <div className='flex items-center gap-4'>
                                <Link to="/login">
                                    <Button 
                                        variant="ghost" 
                                        className="text-gray-700 hover:text-[#6A38C2] hover:bg-purple-50 font-medium transition-all duration-200"
                                    >
                                        Login
                                    </Button>
                                </Link>
                                <Link to="/signup">
                                    <Button className="bg-gradient-to-r from-[#6A38C2] to-[#8B5CF6] hover:from-[#5b30a6] hover:to-[#7C3AED] text-white font-medium px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                                        Sign Up
                                    </Button>
                                </Link>
                            </div>
                        ) : (
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Avatar className="cursor-pointer ring-2 ring-purple-200 hover:ring-purple-300 transition-all duration-200 w-10 h-10">
                                        <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
                                    </Avatar>
                                </PopoverTrigger>
                                <PopoverContent className="w-80 p-4 bg-white/95 backdrop-blur-sm border border-purple-100 shadow-2xl rounded-xl">
                                    <div className=''>
                                        <div className='flex gap-3 items-center pb-4 border-b border-gray-100'>
                                            <Avatar className="cursor-pointer ring-2 ring-purple-200 w-12 h-12">
                                                <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
                                            </Avatar>
                                            <div>
                                                <h4 className='font-semibold text-gray-800'>{user?.fullname}</h4>
                                                <p className='text-sm text-gray-600'>{user?.profile?.bio}</p>
                                            </div>
                                        </div>
                                        <div className='flex flex-col my-3 gap-2'>
                                            {
                                                user && user.role === 'student' && (
                                                    <div className='flex items-center gap-3 p-2 rounded-lg hover:bg-purple-50 transition-colors duration-200'>
                                                        <User2 className="w-4 h-4 text-purple-600" />
                                                        <Link to="/profile" className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200">
                                                            View Profile
                                                        </Link>
                                                    </div>
                                                )
                                            }
 
                                            <div className='flex items-center gap-3 p-2 rounded-lg hover:bg-red-50 transition-colors duration-200'>
                                                <LogOut className="w-4 h-4 text-red-500" />
                                                <button 
                                                    onClick={logoutHandler} 
                                                    className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200"
                                                >
                                                    Logout
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        )
                    }

                </div>
            </div>

        </nav>
    )
}

export default Navbar