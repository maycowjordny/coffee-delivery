import { Plus, Minus } from "phosphor-react";
import { InputNumberContainer } from "./styles";
import { InputNumberProps } from "../../interfaces";

export function InputNumber(props: InputNumberProps) {
    const { quantity, setQuantity } = props

    const handleCount = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newCount = parseInt(e.target.value)
        setQuantity!(newCount)
    }

    function handleMinusCount() {
        const newCount = quantity == 0 ? quantity : quantity - 1
        setQuantity(newCount)
    }

    function handlePlusCount() {
        const newCount = quantity + 1
        setQuantity(newCount)
    }

    return (
        <InputNumberContainer variant={props.variant}>
            {
                quantity == 1 ?
                    <button disabled>
                        <Minus size={16} color="#c9c2c2" weight="bold"
                            onClick={handleMinusCount}
                            className="buttonInput" />
                    </button>
                    :
                    <button>
                        <Minus size={16} color="#8047F8" weight="bold"
                            onClick={handleMinusCount}
                            className="buttonInput" />
                    </button>
            }
            <input type="number"
                value={quantity}
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