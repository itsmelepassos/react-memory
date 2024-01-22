import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    background-color: #1550ff;
    color: #fff;
    border-radius: 8px;
    cursor: pointer;
    font-size: 3rem;
    opacity: 1;
    transition: all ease 0.25s;
    width: 100%;
    max-width: 200px;

    &:hover {
        opacity: 0.75;
    }
`;

export const IconArea = styled.div`
    display: flex;
    align-self: center;
    justify-content: center;
    border-right: 1px solid #ffffff20;
`;

export const Icon = styled.img`
    padding: 8px;
`;

export const Label = styled.div`
    display: flex;
    align-self: center;
    justify-content: center;
    flex: 1;
`;