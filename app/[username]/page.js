import React from 'react'

const Username = ({ params }) => {
    return (
        <div className=' bg-white'>
            {/* {params.username} */}
            <div className='cover w-full relative '>
                <img className='object-cover w-full h-90' src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/professional-linkedin-cover-background-banner-design-template-8ede87f15a800db60977d73b36f97568_screen.jpg?ts=1736195485" alt="" />
                <div className='absolute -bottom-14 right-[47%] border-white border-2 rounded-full'>
                    <img className='rounded-full' width={100} height={100} src="https://images.unsplash.com/photo-1615789591457-74a63395c990?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0JTIwbWVvd3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
                </div>
            </div>

            <div className='bg-white h-65'>
                <div className='info flex justify-center items-center flex-col gap-2 my-15 text-slate-500'>
                    <div className='font-bold text-lg'>
                        @{params.username}
                    </div>
                    <div>
                        Creating Animated arts for VTT's
                    </div>
                    <div>
                        9,719 members . 82 posts . $15,450 / release
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Username;