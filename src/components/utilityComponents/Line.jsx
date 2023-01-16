import React from 'react'
import styled from "styled-components";

function Line() {
    return (
        <div>
            <Seperator>
                <hr />
            </Seperator>
        </div>
    )
}

const Seperator=styled.div`
@media (max-width: 500px){
padding:0 5px;
hr{
    border: 2px solid red;
}
}
`

export default Line
