import { HiDotsHorizontal } from 'react-icons/hi';
import { AiOutlineAlignCenter } from 'react-icons/ai';
import { ChangeEvent, MouseEventHandler, useEffect, useRef, useState } from 'react';
import useAxiosAuth from '@/hooks/useAxiosAuth';
import { QueryClient, useQuery } from 'react-query';
import { ChatRooms, formatTimeDifference, getAllChatRooms, getRoomChat, Message } from '@/app/(main)/(user-panel)/user/chats/api';
import Image from 'next/image';
import { useChatCotnext } from '@/app/(main)/(user-panel)/user/chats/context';
import { CHATTYPE } from '@/app/helpers/user/enums';
import io, { Socket } from 'socket.io-client';
import { IoMdSend } from 'react-icons/io';
const socket = io('http://192.168.0.166:3001');
function Chats() {

    const context = useChatCotnext();
    const axiosAuth = useAxiosAuth();
    const { data, isLoading, isSuccess } = useQuery({
        queryKey: 'rooms',
        queryFn: () => getAllChatRooms(axiosAuth),
    });
    useEffect(()=>{
        return ()=>{
            socket.off('joinRoom')
        }
    })
    return <>
        <div className='flex flex-row '>
            <div className={`  w-[350px]   border-r-gray-200 border-r-2 sm:block`}>
                <div className='flex items-center cursor-pointer justify-around gap-20 pt-8 '>
                    <h1 className='text-lg font-semibold'>Unread</h1>
                    <AiOutlineAlignCenter className='h-6 w-6' />

                </div>
                <div className="relative mx-auto  mt-4 w-56">
                    <input
                        id=":R2hl6m6m6m5:"
                        type="text"
                        name="search"
                        placeholder="Search People "
                        className=" border-1  bg-[#EEEEEE]  leading-[22px] px- py-2 pl-[15px] pr-[35px]  w-full text-[#616161] rounded-full"
                    />
                    <button
                        type="button"
                        className="absolute top-1/2 right-4 translate-y-[-50%]"
                    >
                        <svg
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.146 12.3707 1.888 11.112C0.63 9.85333 0.000666667 8.316 0 6.5C0 4.68333 0.629333 3.146 1.888 1.888C3.14667 0.63 4.684 0.000666667 6.5 0C8.31667 0 9.854 0.629333 11.112 1.888C12.37 3.14667 12.9993 4.684 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.81267 10.5623 9.688 9.687C10.5633 8.81167 11.0007 7.74933 11 6.5C11 5.25 10.5623 4.18733 9.687 3.312C8.81167 2.43667 7.74933 1.99933 6.5 2C5.25 2 4.18733 2.43767 3.312 3.313C2.43667 4.18833 1.99933 5.25067 2 6.5C2 7.75 2.43767 8.81267 3.313 9.688C4.18833 10.5633 5.25067 11.0007 6.5 11Z"
                                fill="#616161"
                            />
                        </svg>
                    </button>
                </div>
                <div className="flex overflow-y-auto h-[30rem] px-2 mt-4  flex-col gap-3">
                    {
                        data?.map((room: ChatRooms) => {
                            return <div key={room._id} className='flex w-[20rem] bg-[#E2F3FF] rounded-lg items-center mx-auto  hover:bg-primary-100  max-h-18  gap-2  px-3 py-4 cursor-pointer' onClick={() => {
                                socket.emit('joinRoom', room.senderId, room._id);

                                context.dispatch({ type: CHATTYPE.CHATDETAIL, roomDetail: room })
                            }}>
                                <Image width={48} height={48} src="/images/User Settings.png" alt="User Settings.png" />
                                <div className=''>
                                    <div className='flex gap-3  justify-between items-center'>
                                        <h1 className='text-sm  sm:text-base font-semibold'>{room.title}</h1>
                                        <h1 className='text-sm text-zinc-400'>

                                            {formatTimeDifference(new Date(room.updatedAt))}
                                        </h1>
                                    </div>
                                    <div className="w-52 h-5 p-0 overflow-hidden overflow-ellipsis relative inline-block  whitespace-nowrap no-underline mx-1 ">

                                <h1 className=''>
                                    {room.lastMessage}
                                </h1>
                              
  {/* width: 210px;
    height: 18px;
  padding: 0;
  overflow: hidden;
  position: relative;
  display: inline-block;
  margin: 0 5px 0 5px;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #000; */}

                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            {
                context.state.roomDetail && <ChatRoom />
            }
        </div>
    </>
}

export { Chats }



function ChatRoom() {

    const context = useChatCotnext();
    const axiosAuth = useAxiosAuth();
    const { data, isLoading, isSuccess } = useQuery({
        queryKey: `messageList${context.state.roomDetail?._id}`,
        queryFn: () => getRoomChat(axiosAuth, context.state.roomDetail?._id!),
    });

    // const socket = io('http://localhost:3001', {
    //     autoConnect: true, // Disable auto connection (for manual control)
    //     query: { roomdId: `${context.state.roomDetail?._id}` }
    // });
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<string[]>([]);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [textareaValue, setTextareaValue] = useState<string>('');
console.log(textareaValue);

    const handleSendMessage = () => {
        socket.emit('privateMessage', context.state.roomDetail?._id, "hello user 2");
        setMessage('');
    };
    useEffect(() => {
        // if (isSuccess) {
        socket.on('privateMessage', (message: string) => {
            setMessages([...messages, message]);
        });

        // }
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }

        return () => {
             socket.off('privateMessage');
        }
    }, [isSuccess, messages]);
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTextareaValue(e.target.value);
    };
    return <div className=" flex flex-col w-full cursor-pointer border-r-gray-200 border-r-2">

        {/* // profile */}
        <div className="flex sm:items-center justify-between py-3 px-9  w-full    border-b-2 bg-[rgb(255,255,255)]">
            <div className="relative flex items-center space-x-4">
                <div className="relative">

                    <Image
                        src="/images/User Settings.png"
                        alt="User Settings.png"
                        width={40}
                        height={40}
                        className=" sm:w-12 sm:h-12 rounded-full"
                    />
                </div>
                <div className="flex flex-col leading-tight">
                    <div className=" mt-1 flex items-center">
                        <span className="text-black font-semibold text-xl mr-3">{context.state.roomDetail?.title}</span>
                    </div>
                    <span className="text-base text-gray-600">Active</span>
                </div>
            </div>
            <div className="flex items-center space-x-2">



                <HiDotsHorizontal className='w-6 h-6' />
            </div>
        </div>
        {/* <div key={message._id} className='flex justify-center'>
        
        <button type="button" className="text-white bg-gray-700   font-medium rounded-lg text-sm px-5 py-1 mr-2 mb-2 w-32 ">21/08/2023</button>
    </div> */}
        <div className="flex flex-col overflow-y-auto h-[30rem] sm:h-[32rem] w-full p-6 border-b-2 gap-3">
            {
                data?.map((message: Message) => {
                    return <div key={message._id} className={`flex`}>
                        <div className="flex flex-col space-y-2 text-base font-medium max-w-xs mx-4 order-2 items-end">
                            <div className=''>
                                <span className="px-4 py-4 rounded-lg inline-block break-words w-auto bg-gray-200 text-black">
                                    {messages.length}
                                    {/* {message.message} */}
                                    <div className='flex justify-end'>

                                        <h1 className='text-sm text-gray-500'>
                                            {new Date(message.createdAt).toLocaleTimeString(undefined, {
                                                hour: 'numeric',
                                                minute: 'numeric',
                                                hour12: true, // Use 12-hour format
                                            })}
                                        </h1>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>;
                })
            }
        </div>

        <div className="container mx-auto p-2">
            <div className='flex w-auto border-none gap-3 items-center mx-6'>

                <textarea
                    ref={textareaRef}
                    value={textareaValue}
                    onChange={handleChange}
                    placeholder='Enter the text'
                    className="resize-none  max-h-28 focus:outline-none mt-3 w-full   "
                />
                <IoMdSend className='text-blue-600 w-6 h-6 cursor-pointer' onClick={handleSendMessage} />
            </div>
        </div>



    </div>
}



{/* <div className=" border-gray-200 w-full     bg-[rgb(250,250,250)]  mb- sm:mb-4">
<div className=" flex  ">

    <input
        type="text"
        name='chat'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
        className="w-full h-9 sm:h-14 focus:outline-none  focus:placeholder-gray-400  text-gray-600 placeholder-gray-600 pl-8 bg-[rgb(255,255,255)] py-2"
    />

    <div className=" flex   bg-[rgb(255,255,255)] px-6 items-center gap-12 ">
        <AiOutlineAlignCenter className='w-6 h-6' />
        {/* <IoMdSend className='text-blue-600 w-6 h-6' onClick={handleSendMessage} /> */}

//     </div>
// </div>
// </div> */}