# Debug Guide

### Breakpoint
- 프로그램을 실행하는 도중에 유저가 필요한 시점에 프로그램을 일시 정지 시키는 역활

1. 에러메세지를 분석하여 어느 줄에 에러가 발생하는지 찾고 해당 코드에 중단점을 놓습니다.
2. 에러를 발생시키는 함수/변수에 사용되는 값들을 살펴봅니다.
3. 이 값들이 내가 코드를 작성할 때 기대했던 값과 어떻게 다른지, 왜 다른지 생각하고
4. 이 값들을 내가 기대하는 값이 되도록 코드로 변경하거나, 이 값으로 처리 할 수 있도록 에러를 발생하는 함수나 변수의 코드를 변경합니다.

### Watch

한 줄씩 실행해가면서 특정 변수의 값들을 감시할 수 있다.

### Call Stack
- 함수 호출을 기록하는 스택
- 요청이 들어올 때마다 콜스택에 담아서 처리한다.
- 우리가 어디에 있는지 기록하는 데이터 구조.
- 함수가 실행되면 현재 함수의 기록을 스택 맨 위에 추가되고(push), 실행이 끝나면 스택에서 빠진다(pop)

### 단축키 및 용어 설명
- Continue / Pause F5: 다음 중단점으로 점프
- Step Over F10: 다음줄로 점프
- Step Into F11: 다음 줄에 함수가 포함되어 있으면 해당 함수로 점프하고 첫 줄에서 멈춥니다.
- Step Out ⇧F11: 현재 함수의 나머지 부분을 실행한 다음 함수 호출 뒤 다음 명령문에서 일시중지합니다.
- Restart ⇧⌘F5
- Stop ⇧F5

### node.js 디버깅 

- VSCode안에 node.js 디버거가 내장되어 있음.
- `.vscode`폴더 안의 `launch.json`파일에 디버깅 설정이 저장되어있음
- launch.json의 항목들은 디버거마다 다르므로 자동완성 기능으로 검색가능
- Launch와 Attach 두가지 모드가 있음
  - 이미 nodemon같은 프로그램으로 실행하고 있을 때, 간단하게 Attach함으로써 비쥬얼 스튜디오 코드에서 디버깅이 편하게 가능하다.

- Node.js 디버깅을 VSCode에서 진행하면 DEBUG CONSOLE탭에 어느 포트로 디버거가 돌아가는지 확인할 수 있다.
- `about://inspect`의 Discover network targets에 디버거 포트를 입력하면 하단의 `Remote Target`에 VSCode로 진행하고 있던 타겟을 확인할 수 있고, 이를 그대로 크롬에서 디버깅할 수 있다.

### Attach하는 법

- 간단한 서버 코드를 작성한다
```js
const http = require('http');
const server = http.createServer((req, res) => {
    res.end('hello world!');
})

server.listen(3000);
```
- 해당 코드를 `node attach.js` 실행시킨다.
- 원하는 부분에 중단점을 건다.
- VSCode 디버깅 툴 옵션 중에서 `Attach By Process`을 선택한다.
- `attach.js`가 실행되던 터미널에서 `Debugger Attached.` 메세지를 확인할 수 있다.
- 브라우저로 `http://localhost:3000`에 접속하면 VSCode 디버거가 중단점에 멈춰있는 걸 확인할 수 있다.