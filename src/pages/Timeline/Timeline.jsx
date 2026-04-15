import React from "react";

const Timeline = () => {
    return (
        <div>
            <div className="mt-6 px-6 md:mt-8 md:px-47">
                <h2 className="text-2xl font-bold mb-6">Timeline</h2>
                <select
                    defaultValue="Filter Timeline"
                    className="select select-success"
                >
                    <option disabled={true}>Filter Timeline</option>
                    <option>Text</option>
                    <option>Meet up</option>
                    <option>Call</option>
                    <option>Video</option>
                </select>
                
                <h2 className="text-2xl font-bold text-center flex justify-center items-center h-screen md:text-4xl ">Your Timeline is empty</h2>
            </div>
        </div>
    );
};

export default Timeline;
