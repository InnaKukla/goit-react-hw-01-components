import styled from 'styled-components'


export const FriendItem = styled.li`
    display: flex;
    border: 1px solid lightgray;
    border-radius: 3px;

    align-items: center;
    padding: 15px;
    width: 250px;
    justify-content: flex-start;
    box-shadow: 3px 3px 3px 4px lightgray;

    :not(:last-child){
        margin-bottom: 15px;
    }

    svg{
        margin-left: 10px;
        margin-right: 10px;
        position: relative;
        top: -7px;

        fill: ${props => {
        if (props.status === true) {
            return 'green'
        } else {
            return 'red'
        }
        
    }};
    }

`



export const FriendName = styled.p`
    font-size: 30px;
    margin-left: 10px;
`