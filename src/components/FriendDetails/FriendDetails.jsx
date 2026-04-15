import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Call from '../../assets/call.png'
import Text from '../../assets/text.png'
import Video from '../../assets/video.png'

const FriendDetails = () => {
    const { id } = useParams();
    const friends = useLoaderData();

    const friend = friends.find(f => f.id === parseInt(id));

    const statusColor = {
        overdue: "bg-[#EF4444]",
        "almost due": "bg-[#E4AD44]",
        "on-track": "bg-[#244D3F]"
    };

    return (
        <div className="bg-gray-100 border shadow">
            <div className="text-center px-10 bg-gray-100 rounded mt-4 mb-4">
                <div className="left space-y-4">
                    <div className="space-y-2 p-2 bg-white rounded">
                        <figure className="px-10 pt-10 flex justify-center">
                            <img
                                src={friend.picture}
                                alt="friend photo"
                                className="rounded-full"
                            />
                        </figure>
                        <h2 className="text-2xl font-bold">{friend.name}</h2>
                        <span
                            className={`badge text-sm text-white ${statusColor[friend.status]}`}
                        >
                            {friend.status}
                        </span>
                        <p>{friend.bio}</p>
                        <p>preffered: {friend.email}</p>
                    </div>
                    <div className="bg-white rounded">
                        <p>Snooze 2 weeks</p>
                    </div>
                    <div className="bg-white rounded">
                        <p>Archive</p>
                    </div>
                    <div className="bg-white rounded">
                        <p className="text-red-500">Delete</p>
                    </div>
                </div>
                <div className="right mt-4">
                    <div className="flex gap-3 flex-wrap">
                        <div className="bg-white p-2 rounded">
                            <h2>60</h2>
                            <p>Days since contact</p>
                        </div>
                        <div className="bg-white p-2 rounded">
                            <h2>30</h2>
                            <p>Goal (Days)</p>
                        </div>
                        <div className="bg-white p-2 rounded">
                            <h2>Feb 27,2026</h2>
                            <p>Next Due</p>
                        </div>
                    </div>

                    <div className="flex justify-between bg-white mt-4 p-4 rounded">
                        <div className="flex flex-col">
                            <h2>Relationship Goal</h2>
                            <p>
                                Connect Every
                                <span className="font-bold">30 days</span>
                            </p>
                        </div>
                        <div className="rounded-full">
                            <p>Edit</p>
                        </div>
                    </div>

                    <div className="bg-white flex gap-3 mt-4 p-4 justify-center">
                      <div className="bg-gray-100 p-4">
                        <img src={Call} alt="call" className="w-6 h-6 flex justify-center"/>
                        <p>Call</p>
                      </div>
                      <div className="bg-gray-100 p-4">
                        <img src={Text} alt="text" className="w-6 h-6 flex justify-center"/>
                        <p>Text</p>
                      </div>
                      <div className="bg-gray-100 p-4">
                        <img src={Video} alt="video" className="w-6 h-6"/>
                        <p>Video</p>
                      </div>
                    </div>
                    
                    <div className="bg-white mt-4">
                      <h2 className="font-bold">Recent Interations</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;
