import React, { useState, FocusEvent } from 'react';
import styled from "styled-components";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

interface CustomInputNumberProps {
    min: number;
    max: number;
    step: number;
    name: string;
    value: number;
    disabled: boolean;
    onChange: (count: number) => void;
    onBlur: (event: FocusEvent<HTMLInputElement>) => void;
}
const CustomInputNumber: React.FC<CustomInputNumberProps> = ({
    min,
    max,
    step,
    name,
    value,
    disabled,
    onChange,
    onBlur,
}) => {
    const Wrapper = styled.div`
        display: flex;
        background-color: white;
        align-items: center;
        margin-top:10px;
        margin-bottom:10px;
    `
    const Text = styled.text`
     color: rgb(134,190,221);
     font-size: 16px;
     margin-right: 8px;

    `
    const Button = styled.button`
        color: rgb(134,190,221);
        border-color: rgb(134,190,221);
        border: 2px solid;
        border-radius: 5px;
        background-color:white;
        display: flex;
        justify-content: center;
        align-items: center;
        width:48px;
        height:48px;
        &:disabled {
            cursor: default;
            opacity: 0.3;
        }
     `;

    const NewAiOutlinePlus = styled(AiOutlinePlus)`
        width:48px;
        height:48px;
       
    `;
    const NewAiOutlineMinus = styled(AiOutlineMinus)`
        width:48px;
        height:48px;
    `;

    const InputFieldContainer = styled.input`
        width: 100%;      
        font-size: 16px;
      
        text-align: center; 
        border-radius: 5px;
        border: 2px solid rgb(134,190,221);
        border-radius:  5px;
    `;
    const WrapperTest = styled.div`
        display: flex;      
        width: 48px;
        height: 48px;
        margin-left: 8px;
        margin-right: 8px;
    
    `
    const [inputValue, setInputValue] = useState(value);

    const handleInputChange = (event: { target: { value: any; }; }) => {
        const newValue = event.target.value;
        if (newValue > max) {
            setInputValue(Number(inputValue));
            return;

        }
        setInputValue(newValue);
        onChange(newValue)
    };

    const handleBlur = () => {

    };
    const handleDecrement = () => {
        const newValue = Math.max(min, inputValue - step);
        setInputValue(newValue);
        onChange(newValue)
    };

    const handleIncrement = () => {
        const newValue = Math.min(max, inputValue + step);
        setInputValue((prev: any) => Math.min(max, prev + step));
        onChange(newValue)
    };
    return (
        <Wrapper>
            <Text>{name}</Text>
            <Button onClick={handleDecrement}>
                <NewAiOutlineMinus></NewAiOutlineMinus>
            </Button>
            <WrapperTest>
                <InputFieldContainer
                    inputMode='numeric'
                    name={name}
                    value={inputValue}
                    min={min}
                    max={max}
                    step={step}
                    disabled={disabled}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                ></InputFieldContainer>
            </WrapperTest>



            <Button disabled={disabled} onClick={handleIncrement}>
                <NewAiOutlinePlus></NewAiOutlinePlus>

            </Button>
        </Wrapper>
    );
}
export default CustomInputNumber;
