import styled from 'styled-components';


export const ContainerWrap = styled.div`
.container{
    max-width:600px;
    margin:20px auto 0; 
    padding:0 15px;
}
.header{
  padding:15px 0;
  text-align:center;
  background:#0e2a54;
  margin:0 0 20px;
  border-radius:0 0 15px 15px;
  width: 100%;
  h1{
    color:#b8dcfd;
    font-size:28px;
    line-height: 35px;
    margin:0;
    font-weight:bold;
    letter-spacing:1px;
  }
  @media only screen and (max-width : 640px) {
    h1{ 
      font-size:25px;  
      line-height: 35px;
    }
  }
}

.container-bingo {
  .btnBingo{
    min-height: 100px; 
    transition: all 0.3s ease-in-out;
  }
}
.btnBingo{
  background:#F2F2F2;
  border-radius:5px;
  border:1px solid #979797;
  min-height: 110px; 
  width:100%;
  padding:5px;
  font-size:14px;
  color:#000;
  cursor:pointer;
  transition: all 0.3s ease-in-out;
  &:hover{
    box-shadow:inset 5px 5px 28px -9px rgba(0,0,0,0.65);
    transition: all 0.3s ease-in-out;
  }

  @media only screen and (max-width : 767px) {
    min-height: 115px;
    }
    
  @media only screen and (max-width : 640px) {
      font-size:13px;
      padding:5px;
    }

  @media only screen and (max-width : 576px) {
      min-height: 100px;
    }

    
  @media only screen and (max-width : 479px) {
      min-height: 90px;
      padding:4px;
      font-size:10px;
    }
}
.bottomAction{
  text-align: center;
  padding:20px 0;
  text-align:center;
}
.btn{
  padding: 0 15px;
  border-radius: 20px !important;
  min-width: 127px;
  border: 1px solid rgb(199, 199, 199);
  background: #E8E8E8;
  font-size:17px !important;
  line-height: 36px; 
  color:#444;
  margin:5px 7px;
  cursor:pointer;
  transition:all 0.3s ease-in-out;
 
  &.btn-prev{
    background: #E8E8E8;
    background: radial-gradient(#E8E8E8, #F4F4F4);
    border-radius: 20px !important;
    border:1px solid #BDBDBD;
  }
  &.btn-risk{
  border-radius: 20px !important;
  border:1px solid #5a0505;
  background: #FC5E5E;
  background: radial-gradient(#FC5E5E, #c13030);
  color:#fff;
  }
  &.btn-again,
  &.btn-secondary{
    border-radius: 20px !important;
    border:1px solid #2A7278;
    background: #3EB5C8;
    background: radial-gradient(#3EB5C8, #4DBB99);
    color:#fff;
    }
  &:hover{
    background: #444;
    color:#fff !important;
    background: radial-gradient(#444, #333);
    color:#fff;
    transition:all 0.3s ease-in-out;
  }
}
table td.tdBingo{
  width:20%
}

.confetti {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 70px;
  padding:0 15px;
  overflow: hidden;
}

.confetti-piece {
  position: absolute;
  width: 8px;
  height: 16px;
  background: #ffd300;
  top: 0;
  opacity: 0;
}
.confetti-piece:nth-child(1) {
  left: 7%;
  transform: rotate(-61deg);
  -webkit-animation: makeItRain 1000ms infinite ease-out;
          animation: makeItRain 1000ms infinite ease-out;
  -webkit-animation-delay: 248ms;
          animation-delay: 248ms;
  -webkit-animation-duration: 1054ms;
          animation-duration: 1054ms;
}
.confetti-piece:nth-child(2) {
  left: 14%;
  transform: rotate(22deg);
  -webkit-animation: makeItRain 1000ms infinite ease-out;
          animation: makeItRain 1000ms infinite ease-out;
  -webkit-animation-delay: 38ms;
          animation-delay: 38ms;
  -webkit-animation-duration: 880ms;
          animation-duration: 880ms;
}
.confetti-piece:nth-child(3) {
  left: 21%;
  transform: rotate(-74deg);
  -webkit-animation: makeItRain 1000ms infinite ease-out;
          animation: makeItRain 1000ms infinite ease-out;
  -webkit-animation-delay: 119ms;
          animation-delay: 119ms;
  -webkit-animation-duration: 1037ms;
          animation-duration: 1037ms;
}
.confetti-piece:nth-child(4) {
  left: 28%;
  transform: rotate(54deg);
  -webkit-animation: makeItRain 1000ms infinite ease-out;
          animation: makeItRain 1000ms infinite ease-out;
  -webkit-animation-delay: 16ms;
          animation-delay: 16ms;
  -webkit-animation-duration: 1198ms;
          animation-duration: 1198ms;
}
.confetti-piece:nth-child(5) {
  left: 35%;
  transform: rotate(18deg);
  -webkit-animation: makeItRain 1000ms infinite ease-out;
          animation: makeItRain 1000ms infinite ease-out;
  -webkit-animation-delay: 307ms;
          animation-delay: 307ms;
  -webkit-animation-duration: 1057ms;
          animation-duration: 1057ms;
}
.confetti-piece:nth-child(6) {
  left: 42%;
  transform: rotate(17deg);
  -webkit-animation: makeItRain 1000ms infinite ease-out;
          animation: makeItRain 1000ms infinite ease-out;
  -webkit-animation-delay: 23ms;
          animation-delay: 23ms;
  -webkit-animation-duration: 1021ms;
          animation-duration: 1021ms;
}
.confetti-piece:nth-child(7) {
  left: 49%;
  transform: rotate(-50deg);
  -webkit-animation: makeItRain 1000ms infinite ease-out;
          animation: makeItRain 1000ms infinite ease-out;
  -webkit-animation-delay: 198ms;
          animation-delay: 198ms;
  -webkit-animation-duration: 795ms;
          animation-duration: 795ms;
}
.confetti-piece:nth-child(8) {
  left: 56%;
  transform: rotate(24deg);
  -webkit-animation: makeItRain 1000ms infinite ease-out;
          animation: makeItRain 1000ms infinite ease-out;
  -webkit-animation-delay: 109ms;
          animation-delay: 109ms;
  -webkit-animation-duration: 1149ms;
          animation-duration: 1149ms;
}
.confetti-piece:nth-child(9) {
  left: 63%;
  transform: rotate(38deg);
  -webkit-animation: makeItRain 1000ms infinite ease-out;
          animation: makeItRain 1000ms infinite ease-out;
  -webkit-animation-delay: 484ms;
          animation-delay: 484ms;
  -webkit-animation-duration: 708ms;
          animation-duration: 708ms;
}
.confetti-piece:nth-child(10) {
  left: 70%;
  transform: rotate(24deg);
  -webkit-animation: makeItRain 1000ms infinite ease-out;
          animation: makeItRain 1000ms infinite ease-out;
  -webkit-animation-delay: 109ms;
          animation-delay: 109ms;
  -webkit-animation-duration: 802ms;
          animation-duration: 802ms;
}
.confetti-piece:nth-child(11) {
  left: 77%;
  transform: rotate(-42deg);
  -webkit-animation: makeItRain 1000ms infinite ease-out;
          animation: makeItRain 1000ms infinite ease-out;
  -webkit-animation-delay: 124ms;
          animation-delay: 124ms;
  -webkit-animation-duration: 982ms;
          animation-duration: 982ms;
}
.confetti-piece:nth-child(12) {
  left: 84%;
  transform: rotate(5deg);
  -webkit-animation: makeItRain 1000ms infinite ease-out;
          animation: makeItRain 1000ms infinite ease-out;
  -webkit-animation-delay: 1ms;
          animation-delay: 1ms;
  -webkit-animation-duration: 745ms;
          animation-duration: 745ms;
}
.confetti-piece:nth-child(13) {
  left: 91%;
  transform: rotate(-50deg);
  -webkit-animation: makeItRain 1000ms infinite ease-out;
          animation: makeItRain 1000ms infinite ease-out;
  -webkit-animation-delay: 52ms;
          animation-delay: 52ms;
  -webkit-animation-duration: 752ms;
          animation-duration: 752ms;
}
.confetti-piece:nth-child(odd) {
  background: #17d3ff;
}
.confetti-piece:nth-child(even) {
  z-index: 1;
}
.confetti-piece:nth-child(4n) {
  width: 5px;
  height: 12px;
  -webkit-animation-duration: 2000ms;
          animation-duration: 2000ms;
}
.confetti-piece:nth-child(3n) {
  width: 3px;
  height: 10px;
  -webkit-animation-duration: 2500ms;
          animation-duration: 2500ms;
  -webkit-animation-delay: 1000ms;
          animation-delay: 1000ms;
}
.confetti-piece:nth-child(4n-7) {
  background: #ff4e91;
}

@-webkit-keyframes makeItRain {
  from {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  to {
    transform: translateY(200px);
  }
}

@keyframes makeItRain {
  from {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  to {
    transform: translateY(200px);
  }
}

  `;