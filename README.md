# 4bsop 화장품 브랜드 커머셜 웹사이트 제작
> 위코드 44기 1차 프로젝트 - Backend <br>
> 하이엔드 화장품 브랜드 Aesop을 모델링하여 커머셜 웹사이트 제작<br>
> Team: four-branch<br>
> 장다희, 왕광현<br>

## 프로젝트 기간 & 인원
* 프로젝트 기간: 2주 (2023.04.03 ~ 2023.04.16)   
* 개발 인원:  
  `Frontend`: 김영운, 박지연 <br>
  `Backend`: 장다희(Project Manager), 왕광현(Product Manager) <br>
* [프론트엔드 Github 저장소](https://github.com/wecode-bootcamp-korea/44-1st-four-branch-frontend)
* 모델링한 사이트: [이솝(Aesop)](https://www.aesop.com/kr/)
 
 ## 사용 기술

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
 
![image](https://user-images.githubusercontent.com/120387100/233080857-d5912540-1add-4c1d-aa7f-048d97d52026.png)

 ## 핵심 기능
 
 ### Users
 

 **회원가입**
 
 : 고가 화장품 브랜드 특성상 구매 주기가 길고 선물용 1회성 구매가 많다는 점을 고려하여, user 수집 정보를 최소화하고 쉽고 간편한 회원 가입 기능 구현
 - 정규표현식 사용하여 이메일과 비밀번호의 유효성 검증
 - 기 가입된 이메일로 중복 가입 시도 시 가입 불가하도록 에러 메시지 반환
 - bcrypt를 사용하여 비밀번호 암호화 후 DB에 저장
<br> 


 **로그인** 
 - DB내 저장된 암호화 된 비밀번호와 사용자가 입력한 비밀번호를 bcrypt로 암호화하여 비교 후 불일치하지 시 에러 메세지 반환 
 - jwt를 활용하여 로그인 성공 시 토큰 발급

***
 
 ### Products
 

 **상품 정보** 
 : 메인 카테고리/서브 카테고리 필터, 가격순 정렬, 상품 id 필터 적용 가능한 상품 정보 조회 API 구현
 - Frontend에서 동일한 endpoint에 필요에 따라 조건을 query parameter로 추가여 요청할 수 있도록 구현
 - 화장품에 있어 성분이 중요한 요소이므로, 성분과 상품이 다대다 관계인 ERD 구축
 - Product Dao 내 함수에서 단락평가를 활용하여 각 조건문의 인자 유무를 판단, 하나의 query문으로 동작하도록 함
 - Order by와 Sorting, Offset과 Limit와 같이 두 인자가 함께 수신되어야 하는 경우, 하나의 인자만 수신되었을 때 에러 메시지 노출

<br>

 **상품 검색**
 : 검색어 입력 시 해당 단어가 상품명에 포함된 상품 정보 리스트 전송 API 구현
 - 검색어를 query parameter로 수신하여 검색어가 상품명에 포함된 상품들의 상품 id, 상품명, 이미지url 전송 
  

### Carts

### Orders
**주문**
**결제**
