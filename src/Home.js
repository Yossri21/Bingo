import React, { useEffect, useState } from 'react';
import Result from './component/Result/Result';
import Table from './component/Table/Table';
import { checkResult, getGetRisk, getRandomData } from './utils/utils';
import { ContainerWrap } from './style';
function Home() {

  const [tab, setTab] = useState(getRandomData());
  const [bingo, setBingo] = useState(0);

  useEffect(() => {

    setBingo(checkResult(tab));

  }, [tab]);

  return (
    <ContainerWrap>
      {bingo > 0 && <Result bingo={bingo} />}

      <div className={bingo > 0 ? "container container-bingo " : "container"}>
      <div className="bottomAction">
          <button
            className="btn btn-risk"
            onClick={() => {
              setTab(getGetRisk(tab));
            }} > Get Lucky </button>
          <button className="btn btn-again" onClick={() => { setTab(getRandomData()); setBingo(0) }} > New Card </button>
        </div>
        <Table tbodyData={tab} func={setTab} />
        
      </div>

    </ContainerWrap>
  );
}

export default Home;
