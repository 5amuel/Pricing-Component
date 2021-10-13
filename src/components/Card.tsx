import styled from '@emotion/styled';
import RangeSlider from './RangeSlider';

const CardComponent = styled.div`
    background-color: #ffffff;
    width: 300px;
    border-radius: 3px;
`
const CardContainer = styled.div`
    display:flex;
    justify-content:center;
    
`

const Card: React.FunctionComponent = () => {
    return(
        <CardContainer>
            <CardComponent>
                <RangeSlider />
            </CardComponent>
        </CardContainer>
    )
}
export default Card;