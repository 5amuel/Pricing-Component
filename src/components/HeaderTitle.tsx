import styled from '@emotion/styled';


const TitleContainer = styled.div`
    text-align:center;
    margin-top: 70px;
    
`
const Title = styled.h2 `
    color: black;

`
const Subtitle = styled.h5 `
    color: gray;

`


const HeaderTitle:React.FunctionComponent = ( ) => {

    return (
        <TitleContainer>
            <Title>Simple, traffic-based pricing</Title>
            <Subtitle>Sign-up for our 30-day-trial. No credit card required</Subtitle>
        </TitleContainer>
        
        
    )

}

export default HeaderTitle;