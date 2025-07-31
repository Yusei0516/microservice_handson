import React, { useState } from 'react';

const API_ENDPOINT1 = 'https://iol1ep95cl.execute-api.ap-northeast-1.amazonaws.com/ms_message_1';
const API_ENDPOINT2 = 'https://iol1ep95cl.execute-api.ap-northeast-1.amazonaws.com/ms_message_2';

function App() {
  const [result, setResult] = useState('結果がここに表示されます');
  const [loadingButton, setLoadingButton] = useState('');

  const callLambda = async (endpoint, buttonId) => {
    setLoadingButton(buttonId);
    setResult('読み込み中...');
    try {
      const response = await fetch(endpoint);
      const data = await response.text();
      setResult(data);
    } catch (error) {
      setResult('エラーが発生しました: ' + error.message);
    } finally {
      setLoadingButton('');
    }
  };

  return (
    <>
      <header className="header">
        <div className="header-logo">MicroService</div>
        <div className="user-info">
          <div className="user-icon">S</div>
          Student
        </div>
      </header>

      <div className="main-content">
        <div className="container">
          <h1>AWS Lambda Demo</h1>
          <div className="button-container">
            <button
              onClick={() => callLambda(API_ENDPOINT1, 'b1')}
              disabled={loadingButton === 'b1'}
              className={loadingButton === 'b1' ? 'loading' : ''}
            >
              メッセージ1を取得
            </button>
            <button
              onClick={() => callLambda(API_ENDPOINT2, 'b2')}
              disabled={loadingButton === 'b2'}
              className={loadingButton === 'b2' ? 'loading' : ''}
            >
              メッセージ2を取得
            </button>
          </div>
          <div id="result" className={result !== '' ? 'active' : ''}>
            {result}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
