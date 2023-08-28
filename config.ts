/** 스타일 관련 설정 */
const STYLE = {
  PRIMARY_COLOR: '#ff3272ff', // 전역적으로 사용되는 주요 색
  BACKGROUND_COLOR: '#f8f5f3', // (PWA) 배경색
};


/** 프로그레시브 웹앱 관련 설정 */
const PWA = {
  APP_NAME: 'YOUR APP', // 기본 이름
  APP_SHORT_NAME: 'APP', // 짧은 이름 (공간이 부족할 때나 앱 아이콘에 표시되는 이름)
  APP_THEME_COLOR: STYLE.PRIMARY_COLOR, // 테마 컬러 (기본값: PRIMARY_COLOR)
  APP_BACKGROUND_COLOR: STYLE.BACKGROUND_COLOR, // 배경색
  DESCRIPTION: 'DESCRIPTION' // 앱 설명
};

/** 메타 설정 */
const META = {
  TITLE: 'YOUR APP', // 브라우저 탭에 표시되는 이름
  THEME_COLOR: STYLE.PRIMARY_COLOR, // 모바일 브라우저 주소 창 색
};

/** 페이지 관련 설정 */
const PAGE = {
  CAHPTER_COUNT: 5, // 챕터(페이지) 전체 개수 
  PREFIX: 'ch' // 주소 url에 붙는 문자열 (/ch1, /ch2 ...)
}

/** 기타 설정 */
const APP = {
  GITHUB_ID : 'milmilkim', // github 아이디
  GITHUB_REPO_NAME : 'react-novel' // 해당 레포지토리 이름
}

export { PWA, STYLE, META, PAGE, APP };
