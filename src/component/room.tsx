import React, { useState } from 'react';
import styled from "styled-components";
import CustomInputNumber from './customInputNumber';

interface RoomProps {
    onChange: (roomInfo: IRoom) => void;
    index: number
}
export interface IRoom {
    roomIndex?: number;
    adult: number;
    child: number;
}
const Room: React.FC<RoomProps> = ({
    onChange, index
}) => {
    const Wrapper = styled.div`
    `
    const Text = styled.text`
    color: rgb(134,190,221);
    font-size: 16px;
    `
    const handleAdultChange = (count: any) => {
        let tmp = { ...room };
        tmp.adult = count
        tmp.roomIndex = index;
        setRoom(tmp)
        onChange(tmp)
    };
    const handlChildChange = (count: any) => {
        let tmp = { ...room };
        tmp.child = count
        tmp.roomIndex = index;
        setRoom(tmp)
        console.log('tmp',tmp)
        onChange(tmp)
    };

    const handleBlur = (event: { target: { name: any; value: any; }; }) => {
        console.log(`Input blurred. Name: ${event.target.name}, Value: ${event.target.value}`);
    };


    const [room, setRoom] = useState<IRoom>({ adult: 1, child: 0 });

    const { adult, child } = room;

    return (
        <Wrapper>
            <Text>{`房間: ${adult + child} 人`}</Text>

            <CustomInputNumber
                min={1}
                max={4}
                step={1}
                name="大人"
                value={adult}
                disabled={adult >= 4 || child + adult >= 4}
                onChange={handleAdultChange}
                onBlur={handleBlur}
            />
            <CustomInputNumber
                min={0}
                max={4}
                step={1}
                name="小孩"
                value={child}
                disabled={child >= 4 || child + adult >= 4}
                onChange={handlChildChange}
                onBlur={handleBlur}
            />
        </Wrapper>
    );
}
export default Room;
