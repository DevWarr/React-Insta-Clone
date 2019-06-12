import styled, { css } from 'styled-components';

export const App = styled.div`
    text-align: center;
`;

export const Spacer = styled.div`
    ${props => css`height: ${props.space}`}
`;

export const PostContainer = styled.div`
    margin: 0 auto 60px;
    width: 614px;
    border: 1px solid #DDDDDD;
    border-radius: 5px;
    background: #FFFFFF;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
`;

export const UserThumbnail = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin: 0 10px;
`;

export const Username = styled.h3`font-size: 1rem;`;

export const ImageContainer = styled.div`
    width: 100%;
    height: auto;
`;

export const Image = styled.img`width: 100%;`;

export const Footer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 10px 15px 5px;
`;

export const Likes = styled.p`
    width: 100%;
    margin: 0;
    margin-top: 5px;
    text-align: left;
    font-weight: bold;
`;