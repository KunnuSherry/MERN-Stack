import React from 'react'

const Badge = ({ children, className, variant }) => {
  const baseClasses = "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium transition-all duration-300 hover:scale-105"
  const variantClasses = variant === "ghost" ? "bg-opacity-10 hover:bg-opacity-20" : ""
  
  return (
    <span className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </span>
  )
}

const LatestJobCards = () => {
    return (
        <div className='group p-6 rounded-2xl shadow-xl bg-gradient-to-br from-white via-gray-50 to-blue-50 border border-gray-100 hover:shadow-2xl hover:scale-105 transform transition-all duration-500 hover:rotate-1 cursor-pointer overflow-hidden relative'>
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            {/* Floating particles effect */}
            <div className="absolute top-2 right-2 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
            <div className="absolute top-6 right-8 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-40"></div>
            <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce opacity-50"></div>
            
            <div className='relative z-10'>
                <div className='mb-4 transform group-hover:translate-x-2 transition-transform duration-300'>
                    <h1 className='text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 animate-fade-in'>Company Name</h1>
                    <p className='text-gray-600 group-hover:text-gray-700 transition-colors duration-300 flex items-center'>
                        <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                        India
                    </p>
                </div>
                
                <div className='mb-6 transform group-hover:translate-x-1 transition-transform duration-400 delay-100'>
                    <h1 className='text-lg font-semibold text-gray-700 group-hover:text-purple-600 transition-colors duration-300 mb-2'>Job Title</h1>
                    <p className='text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                
                <div className='flex items-center gap-3 flex-wrap'>
                    <Badge className="text-blue-700 font-bold bg-blue-100 hover:bg-blue-200 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 animate-slide-in-left" variant="ghost">
                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                        12 Positions
                    </Badge>
                    <Badge className="text-[#f83002] font-bold bg-red-100 hover:bg-red-200 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 delay-100 animate-slide-in-up" variant="ghost">
                        <span className="inline-block w-2 h-2 bg-[#f83002] rounded-full mr-2 animate-pulse"></span>
                        Part Time
                    </Badge>
                    <Badge className="text-[#7209b7] font-bold bg-purple-100 hover:bg-purple-200 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 delay-200 animate-slide-in-right" variant="ghost">
                        <span className="inline-block w-2 h-2 bg-[#7209b7] rounded-full mr-2 animate-pulse"></span>
                        24 LPA
                    </Badge>
                </div>
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
            </div>
            
            <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes slide-in-left {
                    from { opacity: 0; transform: translateX(-20px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                
                @keyframes slide-in-right {
                    from { opacity: 0; transform: translateX(20px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                
                @keyframes slide-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                .animate-fade-in {
                    animation: fade-in 0.6s ease-out;
                }
                
                .animate-slide-in-left {
                    animation: slide-in-left 0.6s ease-out;
                }
                
                .animate-slide-in-right {
                    animation: slide-in-right 0.6s ease-out;
                }
                
                .animate-slide-in-up {
                    animation: slide-in-up 0.6s ease-out;
                }
            `}</style>
        </div>
    )
}

export default LatestJobCards