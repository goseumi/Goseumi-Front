import React, { Children } from "react";
import styled from "styled-components";

const SiteContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;

`;

const Site = styled.a`
    width : 77px;
    height : 77px;
    border-radius: 50%;
    border: 1px solid #A7968E;
`;

const Text = styled.div`
    margin-top: 15px;
    font-size: 14px;
    weight:400;
    text-align: center;
`;

function SiteTab({href, children, text}) {
    return(
        <SiteContainer>
            <Site href={href} target="_blank">
                {children}
            </Site>
            <Text>{text}</Text>
        </SiteContainer>


    );
}

export default SiteTab;