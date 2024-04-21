# TDD-CLIENT 
#### tdd-server를 백엔드로 사용하는 클라이언트 서버
#### 일반적인 게시판 개념을 확장하여 그룹 게시판을 구현한다. 사용자는 그룹A, 그룹B와 같이 여러 게시판 그룹을 생성하고 소속될 수 있으며 소속되어 있는 그룹의 게시판에 읽기, 쓰기할 수 있다.

## [개발환경]
- React
- React Router
- Redux
- Styled-component
- Storybook

## [기능]
### 로그인
- JWT 토큰을 리덕스 스토어에 보관
- 로그인 외 REST api 요청 시 공통적으로 스토어의 JWT 토큰을 http header에 추가하는 컴포넌트 사용

## [참고자료]
### 도서
#### - 리액트를 다루는 기술

## [가이드]
### Storybook
- 스토리북을 적용하여 atom 단위의 컴포넌트 관리

### Commit Message
- 양식
    - [카테고리] 개발 내용
- `카테고리` 옵션
    - feat : 새로운 기능 추가
    - fix : 버그 수정
    - docs : 문서 작성 및 수정
    - test : 테스트 코드 작성
