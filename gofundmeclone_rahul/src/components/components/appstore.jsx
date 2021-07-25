import styled from "styled-components";
export default function Appstore({ children })
{
    const Store = styled.div`
       margin-top:30px;
       margin-bottom:30px;
       padding-right:10%;
       padding-left:10%;
       width:80%;
       margin:auto;
       .play
       {
        display:flex;
        column-gap: 10px;
        justify-content:center;
        height:350px;
        width: 60rem;
        .pic{
            width:100%;
        }
        .avaliable
        {
            display:flex;
            flex-direction: column;
            justify-content: center;
            align-items: baseline;
            font-family:sans-serif;
            padding:50px;
            row-gap: 15px;
            h3 {
                color: #666;
                font-weight: 900;
            }
            h2 {
               font-size:1.55rem;
               font-weight: 900;
            }
            p{
                color: #666;
                
            }
            .icon{
                margin-top:20px;
                display:flex;
                align-items:center;
                column-gap:15px;
            }


        }
       }
    `;
    return <Store>{children}</Store>
}