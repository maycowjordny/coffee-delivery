import { styled } from "styled-components";

export const HomeContainer = styled.div`

padding:5rem 10rem 0;
`;

export const AboutCoffeeDelivery = styled.div`
display: flex;
justify-content: space-between;
gap: 3.5rem;
color: ${props => props.theme.BACKGROUND_BASE_TITLE};

.description h2{
    font-family:'Baloo 2';
    font-size: 3rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    margin-bottom: 1rem;
    max-width:36rem;
}

.description p{
    font-family: 'Roboto';
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
}

.icons-wrapper {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 3.5rem;
}

.box-icons{
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
}

.box-icons p{
    font-family: 'Roboto';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%
}

.box-icons div{
    display: flex;
    align-items: center;
    gap: 0.75rem;
}
`;

const STATUS_COLOR = {
    yellowDark: 'YELLOW_DARK',
    yellow: 'YELLOW',
    gray: 'BACKGROUND_BASE_TEXT',
    purple: 'PURPLE'

} as const

interface PointsProps {
    pointscolor: keyof typeof STATUS_COLOR
}

export const Points = styled.span<PointsProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 50%;
    background: ${props => props.theme[STATUS_COLOR[props.pointscolor]]};

`;