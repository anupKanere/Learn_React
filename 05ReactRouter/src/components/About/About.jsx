import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12 ">
                        <img
                        className='rounded-2xl'
                            src="https://5.imimg.com/data5/FG/PT/GLADMIN-24039720/paying-guest-service-500x500.jpg"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-serif md:text-4xl ">
                            Welcome to Royal PG Services
                        </h2>
                        <p className="mt-6 text-gray-600">
                            At Royal PG Services, we are committed to redefining the experience of premium accommodation. Our journey began with a vision to provide a home away from home for students and professionals, and today, we stand as a beacon of comfort, luxury, and hospitality.
                        </p>
                        <br/>
                        <h3 className='text-xl text-left'>Why Choose Royal PG Services?</h3>
                        <p className="mt-4 text-gray-600 text-left">
                            
                            <li>
                            Prime Locations: Our PGs are strategically located near educational institutions and business hubs, making your daily commute a breeze.
                            </li>
                            Safety First: Your security is our top priority. We have robust security measures in place to ensure your peace of mind.
                            <li>
                            Comfort & Convenience: Our rooms are thoughtfully designed to provide you with comfort and convenience, making your stay enjoyable.
                            </li>    
                            <li>
                            Modern Amenities: Enjoy modern amenities such as high-speed internet, well-equipped kitchens, and recreational areas.
                            </li> 
                            <li>
                            Affordability: We offer competitive rates without compromising on quality, making luxury living accessible to all.
                            </li>         
                
                            
                            
                            
                            

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}


