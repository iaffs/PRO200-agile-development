import React from "react";
//testing comment
function RouteCard(props) {
  return (
    <div
      onClick={props.click} 
      className={
        props.active === props.id 
          ? "bg-vy-green-100 border border-vy-green-300 rounded-md p-4 mb-5 cursor-pointer"
          : "bg-white border border border-gray-300 rounded-md p-4 mb-5 cursor-pointer hover:bg-vy-green-100 hover:border-vy-green-300"
        }
      >
      <div className="flex items-center justify-between border-b border-gray-300 pb-4">
        <div>
          <p className="text-gray-800 text-base font-medium">{props.startStation}</p>
          <p className="mt-2 text-gray-800 text-xl font-bold">{props.startTime}</p>
          <p className="mt-2 text-gray-700 text-sm">Spor {props.track}</p>
        </div>
        <div className="text-center">
          <p className="text-gray-700 text-sm">{props.travelTime} timer</p>
          <span className="mt-5 block px-2 py-2 border border-vy-green-300 rounded-md text-vy-green-300">R30x</span>
        </div>
        <div>
          <p className="text-gray-800 text-base font-medium">{props.endStation}</p>
          <p className="mt-2 text-gray-800 text-xl font-bold">{props.endTime}</p>
          <p className="mt-2 text-gray-700 text-sm">{props.numOfStops} stopp</p>
        </div>
      </div>
      <div className="flex items-center justify-between pt-3">
        <div className="flex items-center">
          <span className="rounded-full bg-vy-green-300 h-2 w-2" />
          <p className="ml-2 text-gray-700 text-sm">I rute ved Asker kl. 21:19</p>
        </div>
        <p className="text-green-700 text-sm text-vy-green-300 font-medium">kr {props.price}</p>
      </div>
    </div>
  );    
}
export default RouteCard;
