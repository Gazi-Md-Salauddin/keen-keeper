import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { useState } from "react";
import Call from "../../assets/call.png";
import Text from "../../assets/text.png";
import Video from "../../assets/video.png";
import { MdHistory } from "react-icons/md";
import { useInteraction } from '../../context/InteractionContext'
import { toast } from 'react-toastify';

const FriendDetails = () => {
    const { id } = useParams();
    const friends = useLoaderData();

    const friend = friends.find(f => f.id === parseInt(id));

    const statusColor = {
        overdue: "bg-[#EF4444]",
        "almost due": "bg-[#E4AD44]",
        "on-track": "bg-[#244D3F]"
    };

    
    const [interaction, setInteraction] = useState([])
    
    const { addInteraction } = useInteraction();
    
    const handleAction = (type, icon) => {
      const newItem = {
        type: type,
        icon,
        time: new Date().toLocaleDateString(),
        FriendName: friend.name,
      };
      addInteraction(newItem);
      
      setInteraction(prev => [newItem, ...prev])
      toast.success(`${type} with ${friend.name}`)
    }

    return (
        <div className="bg-gray-100 shadow pb-6">
            <div className="px-10 bg-gray-100 rounded mt-4 mb-4 md:flex gap-3">
                <div className="text-center space-y-4">
                    <div className="space-y-2 p-2 bg-white rounded">
                        <figure className="px-10 pt-10 flex justify-center">
                            <img
                                src={friend.picture}
                                alt="friend photo"
                                className="rounded-full"
                            />
                        </figure>
                        <h2 className="text-2xl font-bold">{friend.name}</h2>
                        <div className="flex flex-col gap-3 justify-center items-center">
                            {friend.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="badge badge-success flex flex-col text-center justify-center"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <span
                            className={`badge text-sm text-white ${statusColor[friend.status]}`}
                        >
                            {friend.status}
                        </span>
                        <p className="text-gray-400">"{friend.bio}"</p>
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
                <div className="mt-4">
                    <div className="text-center flex gap-3 flex-wrap">
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
                        <button className="bg-gray-100 p-4" onClick={() => handleAction("call", Call)}>
                            <img
                                src={Call}
                                alt="call"
                                className="w-6 h-6 flex justify-center"
                            />
                            <p>Call</p>
                        </button>
                        <button className="bg-gray-100 p-4" onClick={() => handleAction("text", Text)}>
                            <img
                                src={Text}
                                alt="text"
                                className="w-6 h-6 flex justify-center"
                            />
                            <p>Text</p>
                        </button>
                        <button className="bg-gray-100 p-4" onClick={() => handleAction("video", Video)}>
                            <img
                                src={Video}
                                alt="video"
                                className="w-6 h-6 flex justify-center"
                            />
                            <p>Video</p>
                        </button>
                    </div>

                    <div className="bg-white mt-4 pb-6 rounded">
                      <div className="flex justify-between px-2 pt-2">
                        <h2 className="font-bold">Recent Interations</h2>
                        <button className="btn flex gap-2 items-center"><MdHistory />Full History</button>
                      </div>
                        {
                          interaction.length === 0 ? <h2 className="text-2xl text-center py-10">Not Interaction Yet</h2> : interaction.map((item, index) => (
                          <div key={index} className="flex justify-between p-2">
                            <div className="flex gap-2">
                            <img src={item.icon} alt={item.type} className="w-6 h-6"/>
                            <p>{item.type}</p>
                            </div>
                            <small>{item.time}</small>
                          </div>
                          ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;
