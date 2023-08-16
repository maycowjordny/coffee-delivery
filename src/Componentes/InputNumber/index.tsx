import { Plus, Minus } from "phosphor-react";
import { InputNumberContainer } from "./styles";


export function InputNumber() {
    return (
        <InputNumberContainer>
            <button><Minus size={16} color="#8047F8" weight="bold" /> </button>
            <input type="number" />
            <button><Plus size={16} color="#8047F8" weight="bold" /></button>
        </InputNumberContainer>
    )
}