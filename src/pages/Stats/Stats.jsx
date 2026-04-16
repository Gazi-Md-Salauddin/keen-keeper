import React from "react";
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { useInteraction } from "../../context/InteractionContext";

const Stats = () => {
    const { interactions = [] } = useInteraction() || {};

    const getCount = type =>
        interactions.filter(item => item.type === type).length;

    const data = [
        { name: "text", value: getCount("text"), fill: "#047f31" },
        { name: "call", value: getCount("call"), fill: "#2e047f" },
        { name: "video", value: getCount("video"), fill: "#06cd60" }
    ];

    return (
        <div className="bg-gray-100 h-screen">
            <h1 className="text-2xl font-bold pt-8 px-4 md:px-20">
                Friendship Analytics
            </h1>
            <div className="bg-white">
                <h2 className="text-xl font-bold bg-white mx-4 py-4 md:mx-18 py-8 px-4 mt-6 rounded">
                    By Interaction Type
                </h2>

                <div className="md:px-48">
                    <ResponsiveContainer
                        style={{
                            width: "100%",
                            height: "100%",
                            maxWidth: "500px",
                            maxHeight: "80vh",
                            aspectRatio: 1
                        }}
                    >
                        <PieChart>
                            <Pie
                                data={data}
                                innerRadius={80}
                                outerRadius={100}
                                // Corner radius is the rounded edge of each pie slice
                                cornerRadius={50}
                                fill="#8884d8"
                                // padding angle is the gap between each pie slice
                                paddingAngle={5}
                                dataKey="value"
                                isAnimationActive={true}
                            />
                            <Legend />
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Stats;
