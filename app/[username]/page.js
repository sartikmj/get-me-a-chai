import React from 'react'

const Username = async ({ params }) => {
    const { username } = await params;
    return (
        <div className=' bg-white'>
            {/* {params.username} */}
            <div className='cover w-full relative '>
                <img className='object-cover w-full h-90' src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/professional-linkedin-cover-background-banner-design-template-8ede87f15a800db60977d73b36f97568_screen.jpg?ts=1736195485" alt="" />
                <div className='absolute -bottom-14 right-[47%] border-white border-2 rounded-full'>
                    <img className='rounded-full' width={100} height={100} src="https://images.unsplash.com/photo-1615789591457-74a63395c990?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0JTIwbWVvd3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
                </div>
            </div>

            <div className='bg-white min-h-screen'>
                <div className='info flex justify-center items-center flex-col gap-2 my-15 text-slate-500'>
                    <div className='font-bold text-lg'>
                        @{decodeURIComponent(params.username)}
                    </div>
                    <div>
                        Creating Animated arts for VTT's
                    </div>
                    <div>
                        9,719 members . 82 posts . $15,450 / release
                    </div>

                    <div className="payment flex w-[80%] gap-3 mt-10">
                        <div className="supporters w-1/2 bg-slate-900 rounded-lg text-white p-5">
                            {/* show list of the supporters as a leaderboard */}
                            <h2 className='text-2xl font-bold my-5'>Supporters</h2>
                            <ul className='mx-5 text-lg'>
                                <li className='my-4 flex gap-2 items-center' >
                                    <img width={30} src="/avatar.gif" alt="user avatar" />
                                    <span>
                                        Shubam donated <span className='font-bold '>$30</span>  with a message "I support you bro. Lots of ❤️"
                                    </span>
                                </li>
                                <li className='my-4 flex gap-2 items-center' >
                                    <img width={30} src="/avatar.gif" alt="user avatar" />
                                    <span>
                                        Shubam donated <span className='font-bold '>$30</span>  with a message "I support you bro. Lots of ❤️"
                                    </span>
                                </li>
                                <li className='my-4 flex gap-2 items-center' >
                                    <img width={30} src="/avatar.gif" alt="user avatar" />
                                    <span>
                                        Shubam donated <span className='font-bold '>$30</span>  with a message "I support you bro. Lots of ❤️"
                                    </span>
                                </li>
                    
                            </ul>
                        </div>
                        <div className="makePayment w-1/2 bg-gray-900 rounded-lg text-white p-5">
                            <h2 className='text-2xl font-bold my-5'>Support {decodeURIComponent(params.username)}</h2>
                            <div className='flex flex-col gap-2'>
                                <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Amount' />
                                {/* Input for name and message */}
                                <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />
                                <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />
                                <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay</button>

                            </div>
                            {/* or choose frorm these amounts */}
                            <div className="flex gap-2 my-5">
                                <button className='bg-slate-800 p-3 rounded-lg '>Pay 10$</button>
                                <button className='bg-slate-800 p-3 rounded-lg '>Pay 20$</button>
                                <button className='bg-slate-800 p-3 rounded-lg '>Pay 50$</button>
                            </div>
                            <p>Powered By RazorPay</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Username;