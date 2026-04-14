import { use } from "react";

const Friends = ({ friendsPromise }) => {
  
  const friends = use(friendsPromise)
  
  const statusColor = {
    overdue : "bg-[#EF4444]",
    "almost due" : "bg-[#E4AD44]",
    "on-track" : "bg-[#244D3F]",
  };
  
    return (
        <div className="px-4 space-y-4 md:px-47 mt-10">
            <h2 className="text-xl font-bold">Your Friends</h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
              {
                friends.map((friend) => (
                <div key={friend.id} className="card bg-base-100 w-full shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src={friend.picture}
                            alt="friend photo"
                            className="rounded-full"
                        />
                    </figure>
                    <div className="px-28 py-4 space-y-2 items-center text-center md:px-4">
                        <h2 className="card-title">{friend.name}</h2>
                        <p>{friend.days_since_contact}d ago</p>
                        <span className="badge badge-success">NEW</span>
                        <span className={`badge text-sm text-white ${statusColor[friend.status]}`}>{friend.status}</span>
                    </div>
                </div>
                
                ))
              }
            </div>
        </div>
    );
};

export default Friends;
