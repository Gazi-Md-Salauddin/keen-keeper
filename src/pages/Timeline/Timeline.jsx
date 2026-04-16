import React, { useState } from "react";
import { useInteraction } from "../../context/InteractionContext";

const Timeline = () => {
    const { interactions = [] } = useInteraction() || {};
    
    //filter state
    const [filter, setFilter] = useState("all");
    
    const filteredInteractions = filter === "all" ? interactions : interactions.filter(item => item.type === filter);

    return (
        <div>
            <div className="mt-6 px-6 md:mt-8 md:px-47">
                <h2 className="text-2xl font-bold mb-6">Timeline</h2>
                <select 
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    defaultValue="Filter Timeline"
                    className="select"
                >
                    <option disabled={true}>Filter Timeline</option>
                    <option value="all">All</option>
                    <option value="text">Text</option>
                    <option value="call">Call</option>
                    <option value="video">Video</option>
                </select>
                {filteredInteractions.length === 0 ? (
                    <h2 className="text-2xl font-bold text-center flex justify-center items-center h-screen md:text-4xl ">
                        Your Timeline is empty
                    </h2>
                ) : (
                    filteredInteractions.map((item, index) => (
                        <div key={index}>
                            <div className="flex gap-2 rounded shadow my-6 p-2">
                              <div>
                                <img src={item.icon} alt={item.type} className="w-6 h-6 flex items-center"/>
                              </div>
                                <div>
                                    <p>{item.type} with {item.FriendName}</p>
                                    <p className="text-sm">{item.time}</p>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Timeline;
