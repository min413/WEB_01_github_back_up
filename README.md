WEB_Study
===
<a href="https://min413903.tistory.com/" target="_blank"><img src="https://t1.daumcdn.net/cfile/tistory/9931DF3D5B95428108" width="44" height="24" alt="tistory"></a>
<a href="https://github.com/min413" target="_blank"><img src="https://miro.medium.com/max/318/1*1OKmA2EdGln8O6RCVORgGg.png" width="24" height="24" alt="github"></a>
### 공부 계획

(학습할 때 마다 취소선으로 표시됨)

#### WEB2 - Node.js
- ~~[Node.js - MySQL](https://opentutorials.org/course/3347) 복습~~  
- ~~[Node.js - Express](https://opentutorials.org/course/3370) 복습~~  
- ~~[Node.js - 쿠키와 인증](https://opentutorials.org/course/3387) 복습~~  
- ~~[세션과 인증](https://opentutorials.org/course/3400) 복습~~  
- [Passport.js](https://opentutorials.org/course/3402)

#### WEB2 - Javascript
- [WEB2 - JavaScript](https://opentutorials.org/course/3085) 복습
- [Ajax](https://opentutorials.org/course/3281) 복습

***

### 노트
<Node.js>  
~~(sanitize-html npm 모듈은 내용 입력에서 태그 사용의 자유성을 위해 넣지는 않았음)~~  
그럴려다 그냥 보안상 이유를 배운다는 셈 치고 다시 넣었음   
8월 안에는 웹에 대한 다양한 이론을 접해보고 적용해보는 시간을 제대로 가져야겠다  


***

### 활동 내역 
<b>[2020-07-26]</b>   
마크다운으로 WEB_Study의 README.md 파일 내용 작성 시작  
WEB2 - Node.js 3회차 공부 마무리 및 결과물 깃허브에 업로드  
Github Desktop 사용  
  
<b>[2020-07-28]</b>  
Mysql 프로그램 세팅 맞추는데 은근 시간 걸렸음  
github 데스크탑으로 올리다가 오류때문에 그냥 직접 덮어 써지는지 테스트 할겸 파일 업로드함  
(다행히 파일 이름만 같으면 via upload 뭐시기 하면서 덮어씌어짐)  

<b>[2020-07-29]</b>  
저자 삭제 기능 구현까진 배워봤음  
npm 모듈들 까지 모두 올릴수는 없어서 그냥 파일 백업용으로만 생각해야한다  

<b>[2020-08-03]</b>  
express 강의 완강함  
nodejs를 기반으로 express 관련 모듈들을 활용하면 재밌을 것 같음  
express 관련 파일은 [여기](https://github.com/min413/WEB_express) 따로 저장소를 만들어서 백업함  
역시나 사용된 모듈들 까지 업로드 하면 파일 개수에 제한이 걸려 코드들만 업로드함  

<b>[2020-08-08]</b>  
쿠키와 인증 강의 완료 [파일](https://github.com/min413/WEB_cookie)  
기존의 배웠던 이론과 스스로 인터넷에 정보를 찾아서 적용해 보는 연습도 해야겠다  
그리고 PHP언어도 강의가 준비되어 있어 PHP도 방학동안 돌려봐야 겠다  

<b>[2020-08-09]</b>  
express-session 강의 완료 [파일](https://github.com/min413/WEB_express-session)  
개인적으로 지금까지 제일 이해하기 힘들고 어려웠다  
아직 로그아웃에서 왜 오류가 생기는지 찾지 못했다  
request.session.destory이 함수가 아니라는 오류만 계속 출력되는데  
코드를 그대로 적고 다른 코드들도 틀리지 않게 적어도 계속 오류가 뜬다  
마무리 강의에서는 유저 관리를 다른 곳에서 관리하고 나는 그 식별자만을 통해 유저들을 구분할 수 있는 federation authentication라는 개념을 소개했다  
그 내용을 알려주는 수업 중 하나가 바로 Passport.js이다  
타사 계정으로 로그인해서 사용자, 관리자 모두 편하게 사용할 수 있는 도구가 Oauth이다  
아직 node.js에 대해 익숙하지 않으므로 좀 더 nodejs에 익숙해지는 시간을 가지고 유저 관리에 대한 개념에 대해 살펴봐야겠다  
