# 44-1st-four-branch-backend
 장다희, 왕광현

## 프로젝트 기간 & 인원
* 프로젝트 기간: 2주 (2023.04.03 ~ 2023.04.16)   
* 개발 인원:   
  `Frontend`: 김영운, 박지연 <br>
  `Backend`: 장다희(Project Manager), 왕광현(Product Manager) <br>
* [프론트엔드 Github 저장소](https://github.com/wecode-bootcamp-korea/44-1st-four-branch-frontend)
* 모델링한 사이트: [이솝(Aesop)](https://www.aesop.com/kr/)
 
 ## 적용 기술

* BackEnd   

 |JavaScript|Node.js|MySql|Rest|Prettier|Docker|AWS|
|---|---|---|---|---|---|---|
|<div style="display: flex; align-items: flex-start;"><img src="https://techstack-generator.vercel.app/js-icon.svg" alt="icon" width="65" height="65" /></div>| <div style="display: flex; align-items: flex-start;"><img src="https://techstack-generator.vercel.app/nginx-icon.svg" alt="icon" width="65" height="65" /></div>| <div style="display: flex; align-items: flex-start;"><img src="https://techstack-generator.vercel.app/mysql-icon.svg" alt="icon" width="65" height="65" /></div>|<div style="display: flex; align-items: flex-start;"><img src="https://techstack-generator.vercel.app/restapi-icon.svg" alt="icon" width="65" height="65" /></div>|<div style="display: flex; align-items: flex-start;"><img src="https://techstack-generator.vercel.app/prettier-icon.svg" alt="icon" width="65" height="65" /></div>|<div style="display: flex; align-items: flex-start;"><img src="https://techstack-generator.vercel.app/docker-icon.svg" alt="icon" width="65" height="65" /></div>|<div style="display: flex; align-items: flex-start;"><img src="https://techstack-generator.vercel.app/aws-icon.svg" alt="icon" width="65" height="65" /></div>|
<br>

* 협업 <br><br>
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <br>
<img src="https://img.shields.io/badge/trello-0055cc?style=for-the-badge&logo=trello&logoColor=yellow"> <br>
<img src="https://img.shields.io/badge/slack-4A154B?style=for-the-badge&logo=Slack&logoColor=wihte"> <br>
<img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white"> <br>

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
