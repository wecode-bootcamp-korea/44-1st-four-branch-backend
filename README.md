# 44-1st-four-branch-backend
 장다희, 왕광현

## 프로젝트 기간 & 인원
* 프로젝트 기간: 2주 (2023.04.03 ~ 2023.04.16)   
* 개발 인원:   
  `Frontend`: 김영운, 박지연
  `Backend`: 장다희(Project Manager), 왕광현(Product Manager)
 
 
 ## 적용기술
* BackEnd   
<img src="https://camo.githubusercontent.com/d2e764d63294c27eff3598ae3a0df5884b4efcabbdbbd200e51472cddf4a3f03/68747470733a2f2f74656368737461636b2d67656e657261746f722e76657263656c2e6170702f6a732d69636f6e2e737667" width=5%> <img src="https://camo.githubusercontent.com/418cbff54fe0ff385225ac464200a519c169c0fd3fb80402a8a9f977efd63c7a/68747470733a2f2f74656368737461636b2d67656e657261746f722e76657263656c2e6170702f6e67696e782d69636f6e2e737667" width=5%> <img src="https://camo.githubusercontent.com/b3578157355b1ac74d38d0f89d1022095ba7f7a988db091cef0fa4a62685e87e/68747470733a2f2f74656368737461636b2d67656e657261746f722e76657263656c2e6170702f6d7973716c2d69636f6e2e737667" width=5%>
* 협업  
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/trello-0055cc?style=for-the-badge&logo=trello&logoColor=yellow"> <img src="https://img.shields.io/badge/slack-4A154B?style=for-the-badge&logo=Slack&logoColor=wihte"> <img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white"> 

 ## ERD
 
 ![4bsop-data (Dahee)](https://user-images.githubusercontent.com/122084854/232357000-63a4813b-85de-4ae2-b3fe-a7ddbd2c5af7.png)

 ## 기능구현
 
 ### User
 
 * ##### 회원가입 - 이메일과 비밀번호 유효성을 정규표현식 사용하여 검증, DB에 있는 이메일로 가입시도 시 가입하지 못하게 하고, bcrypt사용하여 비밀번호 암호화하여 DB에 저장
 
 * ##### 로그인 - bcrypt로 암호화 된 비밀번호와 사용자가 입력한 비밀번호 비교하여 일치하지 않을 시 오류메세지 출력, 성공적으로 로그인 시 jwt이용하여 토큰 발급

 
 ### Product

 * ##### 상품검색 - 상품의 id, 이름, 이미지를 쿼리파라미터로 요청 받아 해당 키워드가 있는 제품만 노출되게 함
 
 * ##### 상품리스트 - 

 * ##### 
