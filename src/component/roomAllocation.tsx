import React, { useState, useEffect } from 'react';
import Room, { IRoom } from './room';

interface RoomAllocationProps {
    guest: number;
    room: number;

    onChange: (event: any) => void;
}
const RoomAllocation: React.FC<RoomAllocationProps> = ({
    room, onChange
}) => {

    const [roomResult, setRoomResult] = useState<Array<IRoom>>([]);
    const handleRoomChange = (roomInfo: IRoom) => {

        let newRoomResult: Array<IRoom> = [...roomResult];
        newRoomResult[Number(roomInfo.roomIndex)] = {
            adult: roomInfo.adult,
            child: roomInfo.child
        }

        setRoomResult(newRoomResult)

        onChange(newRoomResult);

    };
    useEffect(() => {
        let tmpResult: Array<IRoom> = [];
        for (let i = 0; i < room; i++) {
            tmpResult.push({
                adult: 1, child: 0
            })
        }
        setRoomResult(tmpResult)
    }, [])


    return (
        <div>
            {Array.from({ length: 3 }).map((_, index) => (
                <Room key={index} index={index} onChange={handleRoomChange}></Room>
            ))}
        </div>
    );
}
export default RoomAllocation;
