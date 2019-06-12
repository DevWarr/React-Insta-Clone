import styled, {css} from 'styled-components';

export const TimeStamp = styled.p`
    margin: 0 0 15px;
    color: gray;
    font-size: 0.9em;
    text-align: left;
    padding-left: 15px;
`;

export const Form = styled.form`
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #DDDDDD;
`;

export const Input = styled.input`
    border: none;
    padding: 20px 0 20px 15px;
    flex-grow: 1;
`;

export const Button = styled.button`
    background: transparent;
    border: none;
    font-weight: bold;
    padding-right: 15px;

    ${props => {
        if (props.commenting !== "") {
            return (css`cursor: pointer;   color: #4664F5;`)
        } else {
            return (css`cursor: default;   color: lightblue;`)
        }
    }}
`;

export const Username = styled.span`font-weight: bold;`;

export const DeleteComment = styled.span`
    cursor: pointer;
    margin-right: 15px;
    padding: 0 5px;
    position: absolute;
    right: 0;
    top: 0;
    background: white;
    color: lightblue;
    display: none;
    &:hover {
        color: #4664F5;
    }
`;

export const CommentContent = styled.p`
    position: relative;
    margin: 0;
    padding: 4px 0;
    text-align: left;
    padding-left: 15px;
    &:hover {
        ${DeleteComment} {
            display: block;
        }
    }
`;

// Do you see that? Up above!
// Nesting rules with Styled components really works O.O