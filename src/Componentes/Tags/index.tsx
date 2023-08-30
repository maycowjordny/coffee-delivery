import { TagsContainer } from "./styles";
import { TagsCoffeeProps } from "../../interfaces";

export function Tags(props: TagsCoffeeProps) {
    return (
        <TagsContainer>
            {props.name}
        </TagsContainer>
    )
}