import React from "react";
import { Pie, PieChart, ResponsiveContainer } from "recharts";

const data = [
    { name: "messege", value: 400 },
    { name: "call", value: 300 },
    { name: "video", value: 200 }
];

const Stats = () => {
    return (
        <div className="bg-gray-100 h-screen">
            <h1 className="text-2xl font-bold pt-8 md:px-20">
                Friendship Analytics
            </h1>
            <div>
                <h2 className="text-xl font-bold bg-white mx-18 py-8 px-4 mt-6 rounded">
                    By Interaction Type
                </h2>

                <ResponsiveContainer>
                    <PieChart
                        style={{
                            width: "100%",
                            maxWidth: "500px",
                            maxHeight: "80vh",
                            aspectRatio: 1
                        }}
                    >
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
                            // isAnimationActive={isAnimationActive}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Stats;
