import styled from "styled-components";
export default function StartFund({children})
{
    const Source = styled.div`
     width:100%;
    height:230px;
     background-color:RGB(255, 255, 255);
     font-family:sans-serif;
    
     
     .drip
     {
         display:flex;
         flex-direction:column;
         width:100%;
         margin: 2% auto;
         justify-content:center;
      button {
            text-align:center;
            background-color:#02a95c;
            height:55px;
            width:200px;
            color:white;
            font-weight:900;
            border:none;
            font-size:16px;
            box-shadow:0 0.3125rem 0.875rem 0.0625rem rgb(0 0 0 / 10%);
            border-radius:5px;
            margin: 50px auto;
        }
           p {    
                    margin: auto;
                    color: #666;
                    font-family: Lato,Arial,sans-serif;
                    font-size: 1.5rem;
                    font-weight: 300;
                    line-height: 2rem;
              }

         
     }
     
    `;
    return <Source>{ children }</Source>
}