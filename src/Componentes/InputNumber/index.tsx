import { Plus, Minus } from "phosphor-react";
import { InputNumberContainer } from "./styles";
import { useState } from "react"


interface InputNumber {
    variant?: any
    count?: number
}

export function InputNumber(props: InputNumber) {

    const [count, setCount] = useState(0)

    const handleCount = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newCount = parseInt(e.target.value)
        setCount(newCount)
    }

    function handleMinusCount() {
        const newCount = count == 0 ? count : count - 1
        setCount(newCount)
    }

    function handlePlusCount() {
        const newCount = count + 1
        setCount(newCount)
    }


    return (
        <InputNumberContainer variant={props.variant}>
            <button>
                <Minus size={16} color="#8047F8" weight="bold"
                    onClick={handleMinusCount}
                    className="buttonInput" />
            </button>
            <input type="number"
                value={count}
                onChange={handleCount}
                readOnly
            />
            <button>
                <Plus size={16} color="#8047F8" weight="bold"
                    onClick={handlePlusCount}
                    className="buttonInput" />
            </button>
        </InputNumberContainer>
    )
}