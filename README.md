# 포트폴리오 리뉴얼 

1. 메인 페이지 완료 (2020-08-01)

2. 프로젝트 페이지 완료 (2020-08-02)
    * scrollEvent 적용 모바일/웹페이지 각각 적용 완료
    * typewriter.js를 사용하였으며, scroll에 따라 반복 실행되는걸 막기위해서🤔<br/>
    control변수를 만들어서 제어하였다.😃
    ```javascript
    let control = 0;
        if(control === 0) {
            sotongType();
            control++; // 컨트롤의 숫자로 실행하여 재반복을 막음
        }
    ```