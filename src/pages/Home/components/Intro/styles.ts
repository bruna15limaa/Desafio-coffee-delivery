import styled from "styled-components";
import introBackgroundImg from '../../../../assets/Background.png'
import { TitleText } from "../../../../components/typography";

export const IntroConteiner = styled.section`
    width: 100%;
    height: 34rem;
    background: ${() => `url(${introBackgroundImg}) no-repeat center`};
    background-size: cover;
`;

export const IntroTitle = styled(TitleText)`
    margin-bottom: 1rem;
`;

export const IntroContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3.5rem;
`;