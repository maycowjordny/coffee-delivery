import { TagsContainer } from "./styles";

export interface TagsCoffeeProps {
    id: number,
    name: string,
}

export function Tags(props: TagsCoffeeProps) {
    return (
        <TagsContainer>
            {props.name}
        </TagsContainer>
    )
}