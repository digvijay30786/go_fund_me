import styled from "styled-components";
export default function TopFund({ children }) {

  const Fnd = styled.div`
    display: flex;
    column-gap: 20px;
    flex-wrap: wrap;
    margin-top: 30px;
    justify-content: center;
    min-height:450px;
    div {
      width: 30%;
      height: 350px;
      border-radius: 6px;
      display: flex;
      flex-direction: column;
      
      div {
        width: 100%;
          img {
            width: 100%;
            height: 190px;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
          }
        }
        .details {
          padding-top:10px;
          padding-left:10px;
          span{
            padding-bottom:5px;
            color: #02a95c;
            font-size: .875rem;
            font-weight: 900;
            text-transform: uppercase;
          }
          h4{
            padding-bottom:10px;
          }
          p{
            line-height:30px;
          }
          .time{
            padding-top:17px;
            color: #666;
            font-size: .875rem;
          }
          .bar{
            padding-top:5px;
            padding-bottom:10px;
            padding-right:20px;
          }
      }
    }
  `;
  return <Fnd sp="handle">{children}</Fnd>;
}
