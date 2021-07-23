import styled from "styled-components";
export default function Trending({ children })
{
    const Topic = styled.div`
       width:100%;
       min-height:500px;
       background-color:#fbf8f6;
       padding: 0 14%;
       box-sizing:border-box;
       span
       {
          color: #960064;
          font-size: 15px;
          font-weight:600;
       }
       .mainTrend:nth-child(even)
       {
        flex-direction: row-reverse;
       }
       .mainTrend
       {
        display: flex;
        min-height: 300px;
        column-gap: 30px;
        margin-top: 30px;
        margin-bottom:30px;
        .first
        {
            width:40%;
        }
        .second{
            width:60%;
            p{
                font-family:sans-serif;
                margin-bottom:20px;
                line-height:28px;
                a{
                    text-decoration:none;
                    color:#02a95c;
                }
            }
        }
       }
       button {
        background-color:#02a95c;
        color:white;
        border:none;
        padding:2%;
        border-radius:2px;
        font-weight:600;
        font-size:20px;
        box-shadow:0 0.3125rem 0.875rem 0.0625rem rgb(0 0 0 / 10%);
    }

    button:hover{
        background-color:red;
    }

    `;

    return <Topic>{children }</Topic>

 }