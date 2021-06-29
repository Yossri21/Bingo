import React, { useEffect, useState } from 'react';
import Result from '../component/Result/Result';
import Table from '../component/Table/Table';
import { checkResult, getLucky, getRandomData } from '../utils/utils';
import { ContainerWrap } from '../style';

function Home() {
  if (localStorage.getItem('bingoDataStorage') === null) {
    localStorage.setItem('bingoDataStorage', JSON.stringify(getRandomData()));
  }

  const [tableData, setTableData] = useState(JSON.parse(localStorage.getItem('bingoDataStorage')));
  const [bingoScore, setBingoScore] = useState(0);

  useEffect(() => {
    setBingoScore(checkResult(tableData));
    localStorage.setItem('bingoDataStorage', JSON.stringify(tableData));
  }, [tableData]);

  return (
    <ContainerWrap>
      {bingoScore > 0 && <Result bingo={bingoScore} />}

      <div className={bingoScore > 0 ? 'container container-bingo ' : 'container'}>
        <div className="bottomAction">
          <button
            className="btn btn-risk"
            onClick={() => {
              setTableData(getLucky(tableData));
            }}
          >
            Get Lucky
          </button>
          <button
            className="btn btn-again"
            onClick={() => {
              setTableData(getRandomData());
            }}
          >
            New Card
          </button>
        </div>
        <Table tbodyData={tableData} func={setTableData} />
      </div>
    </ContainerWrap>
  );
}

export default Home;
