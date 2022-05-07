const  _apiBase = 'https://gist.githubusercontent.com/avydashenko/e1702c1ef26cddd006da989aa47d4f62/raw/633c9211d1a1816d8286368d9ff9717f343c508a/view.json';
// const   _apiBaseKey = 'qwerty123';

const  getData = async () => {
  const res = await fetch(_apiBase, {
          method: "GET",
          // mode: 'no-cors',
          // headers: {
          // //   'Content-Type': 'application/json',
          // //   'Authentication': _apiBaseKey,
          //   'Access-Control-Allow-Origin': '*',
          //   // 'mode': 'cors',
          // },
          // body: JSON.stringify()
        });
    if (!res.ok) {
      throw new Error(`Could not fetch Calls, DataBase received ${res.status}`);
    };
    const parseData = await res.json();
    console.log('parseData >', parseData)
    // const data = Object.values(parseData.Calls);
    // console.log(data);
    return parseData;
    }

export default getData;