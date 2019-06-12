import styled, { css } from 'styled-components';

export const Header = styled.div`
    z-index: 10;
    width: 100%;
    position: fixed;
    background: #FFFFFF;
    border-bottom: 1px solid #DDDDDD;
    display: flex;
    justify-content: space-around;
    padding: 15px 20px;
`;

export const ImageContainer = styled.div`
    height: 32px;
    border-left: 1px solid black;
    padding-left: 10px;
    margin-left: 5px;
`;

export const Image = styled.img`
    height: 32px;
    width: auto;
`;

export const Form = styled.form`
    flex-grow: 1;
`;

export const Search = styled.input`
    height: 28px;
    width: 218px;
    text-align: center;
    background: #F8F8F8;
    border: 1px solid #DDDDDD;
    border-radius: 5px;
    box-shadow: none;
`;

export const Logout = styled.div`
    cursor: pointer;
    position: fixed;
    top: 50px;
    right: 32px;
    padding: 10px 20px;
    border: 1px solid #DDDDDD;
    border-radius: 3px;
    background: white;
    color: lightblue;
    &:hover {
        color: #4664F5;
    }

    ${props => {
        if (props.menu) {return css`display: block`}
        else {return css`display: none`}
    }}
`;

export default styled;