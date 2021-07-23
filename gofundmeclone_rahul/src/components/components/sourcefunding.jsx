import styled from "styled-components";
export default function SourceFund({children})
{
    const Source = styled.div`
     width:100%;
     min-height:450px;
     background-color:#fbf8f6;
     padding:6% 0;
     font-family:sans-serif;
     h1{
         text-align:center;
         font-weight:900;
         font-size:20px;
     }
     .sourceClass
     {
        display: grid;
        grid-template-columns: 24% 24% 24%;
        grid-template-rows: 35% 35%;
        height: 400px;
        justify-content: center;
        margin-top: 30px;
        grid-gap: 20px;
        .flexImg{
            display:flex;
            column-gap:20px;
            margin-top: 20px;
            div
            {
                h5
                {
                    font-weight: 900;
                    font-size:14px;
                }
                p
                {
                    margin-top:18px;
                    color: #666;
                    line-height:20px;
                    font-size:15px;
                }
            }
        }
     }
     .drip
     {
         display:flex;
         width:100%;
         justify-content:center;
        button {
            text-align:center;
            background-color:#02a95c;
            height:60px;
            width:200px;
            color:white;
            font-weight:900;
            border:none;
            font-size:16px;
            box-shadow:0 0.3125rem 0.875rem 0.0625rem rgb(0 0 0 / 10%);
            border-radius:5px;
        }
     }
     
    `;
    return <Source>{ children }</Source>
}