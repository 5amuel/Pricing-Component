import styled from '@emotion/styled';
import sliderIcon from '../images/icon-slider.svg'
// import { useState } from 'react';
const Styles = styled.div`
    display: flex;
    align-items: center;
    margin-top: 2rem;
    margin-bottom:2rem;
    
    .slider {
        -webkit-appearance: none;
        width: 100%;
        height: 7px;
        background: #eaeefb;
        border-radius: 50px;
        background-image: linear-gradient(#a5f3eb, #a5f3eb);
        background-size: 50% 100%;
        background-repeat: no-repeat;
        
        &::-webkit-slider-thumb{
            -webkit-appearance: none;
            height: 35px;
            width: 35px;
            border-radius: 50%;
            background-image: url(${sliderIcon});
            background-repeat: no-repeat;
            background-color: #10d5c2;
            cursor: pointer;
            box-shadow: 0px 9px 30px 1px #10d5c2;
            transition: background .3s ease-in-out;
            background-position: center;
            background-size: 50%;
        }
        
        &:active::-webkit-slider-thumb{
            background-color: #0ebeac;
        }        
    }
`

const RangeSlider: React.FunctionComponent = () => {
    // const [sliderValue, setSliderValue] = useState();

    const handleSliderFill = (e:any) => {
        e.preventDefault();
        const slider = e.target
        const min = e.target.min
        const max = e.target.max
        const value = parseInt(e.target.value)
        slider.style.backgroundSize = (value - min) * 100 / (max - min) + '% 100%'
    }

    return (
        <Styles >
            <input onChange={handleSliderFill} className="slider" type="range" min="0" max="100" step="1"/>
        </Styles>
    )
}
export default RangeSlider;