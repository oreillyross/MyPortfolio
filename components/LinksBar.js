import React from 'react';
import styled from "styled-components";


const StyledLinks = styled.div`
  height:30px;
  background-color: #4be3ac;

`

const LinksBar = () => {
    return (
        <StyledLinks>
About Projects Blog 
        </StyledLinks>
    )
}

export { LinksBar }