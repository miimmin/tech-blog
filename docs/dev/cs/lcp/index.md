---
title: LCP
description: Largest Contentful Paint 알아보기
tags: [LCP, web-vital, 메트릭]
last_update:
  date: '2022-10-21T13:00'
---

🦊: 아니, 로딩화면만 나오고 컨텐츠는 대체 언제 렌더되는 거에요? LCP 얼마 나와요?  
🐣: 그게 뭐죠...?

<!--truncate-->

## 어떤 메트릭을 사용할까?

:::tip 생각
사용자에게 메인 콘텐츠가 얼마나 빨리 로드되었는지 측정할 때 어떤 메트릭을 사용하면 좋을까?
:::

사용자의 경험 측면에서,

- `load` 같은 이벤트로 웹 사이트의 성능을 측정하는 것은 최초 페이지가 로드되었으나 컨텐츠는 로드되지 않을 때가 있기 때문에 좋은 측정 방식이 아니다.
- `First Contentful Paint(FCP)`은 페이지 컨텐츠의 `일부`만 화면에 렌더링 되었거나 `로딩 화면` 같은 것을 `FCP`로 보기 때문에 정확하다고 볼 수 없다.

가장 정확한 방법은 `가장 큰 요소가 렌더링된 시기`를 확인하는 것이다.
이것이 바로 **LCP**이며, CWV(core-web-vitals)이다.

## LCP란?

- 페이지가 `처음으로 로드를 시작한 시점(FCP)`을 기준으로 `"뷰포트" 내에 있는 가장 큰 이미지 또는 텍스트 블록의 렌더링 시간`이다.

  - 요소가 뷰포트 외부로 확장되거나, 보이지 않거나, 잘려있을 경우에는 포함하지 않는다.
  - 단, 새 성능 항목을 계산하고 디스패치하는 성능 오버헤드를 낮게 유지하기 위해 요소의 크기나 위치를 변경해도 새 LCP 후보는 생기지 않는다.
    - 처음부터 화면 바깥에 있는 이미지는 다음 화면에서 전환된다 하더라도 보고되지 않는다.
    - 처음에 뷰포트 내에 있던 이미지가 아래로 밀려 뷰포트에서 사라지더라도 초기 뷰포트 내에서 크기를 보고한다.

- 2.5초 이하로 측정되면 아주 좋다.

### LCP가 고려하는 요소

- `<img>`
- `<svg>` 요소 내부의 `<image>`
  - 크기가 조정되는 이미지라면 작은 것이 보고된다.
- `<video>`
- `url()` 함수를 통해 로드된 배경 이미지가 있는 요소(CSS 그라데이션과는 대조적임)
- 텍스트 노드 또는 기타 인라인 수준 텍스트 하위 요소를 포함하는 블록 수준 요소
  - 텍스트는 텍스트 노드의 크기만 고려된다.

### 예시 이미지

![instagram](https://web-dev.imgix.net/image/admin/uJAGswhXK3bE6Vs4I5bP.png?auto=format&w=845)  
Instagram 로고가 비교적 일찍 로드되어 다른 콘텐츠가 점진적으로 표시된 후에도 최대 요소로 남아 있다.

:::tip
FCP의 카메라 로고 주위에 초록색 상자가 없는 이유는, 이 아이콘이 `svg`이기 때문이며 LCP 요소로 간주되지 않기 때문이다.
:::

## LCP 개선법

### LCP 영향 요소

- 느린 서버 응답 시간
- 렌더링 차단 JavaScript 및 CSS
- 리소스 로드 시간
- 클라이언트 측 렌더링

#### 느린 서버 응답 시간

서버 응답이 느리면 LCP 뿐만 아니라 무엇이든 렌더링이 늦다. 서버가 콘텐츠를 처리하는 방법을 개선시키자.

1. 서버 최적화

   - 콘텐츠가 문제가 아니다. 서버가 문제인 것이다.
   - 쿼리 실행, 서버에서 복잡한 작업 중 등으로 서버가 힘들어 하는 중일 수도 있다. 즉, 서버 측 코드를 개선한다.

2. 사용자를 가까운 CDN으로 라우팅

   - CDN은 여러 위치에 분산된 서버 네트워크다.
   - 한국에 있는 사용자가 미국에 있는 웹 사이트를 탐색하면 콘텐츠는 느리게 로드될 수밖에 없다.
   - 사용자가 멀리 떨어진 서버에 대한 네트워크 요청을 기다리는 것을 방지하기 위해 CDN을 사용하자

3. 캐시

   - 캐싱을 통해 불필요하게 HTML을 계속 요청하는 일을 방지하자.

4. 조기에 타사 연결 구축

   - `rel="preconnect"`을 사용하여 페이지가 최대한 빨리 연결을 구축할 것임을 브라우저에게 알린다.
   - `rel="dns-prefetch"`을 사용하여 DNS 조회를 빠르게 해결한다.
   - `preconnect`를 지원하지 않는 브라우저는 `dns-prefetch`을 사용하자.

#### 렌더링 차단 JavaScript 및 CSS

브라우저는 HTML 마크업을 DOM 트리로 구문 분석하는데, `<link rel="stylesheet">` 같은 외부 스타일시트나 `<script src="main.js">`와 같은 자바스크립트 태그를 만나면 일시중단된다.  
스타일시트와 스크립트는 FCP를 지연시키므로, LCP까지 지연시켜버린다.  
즉, _중요하지 않은_ 스타일시트와 스크립트를 지연시키면 콘텐츠 로드 속도가 빨라진다.

1. 공백, 주석, 들여쓰기 등을 제거하여 CSS 크기 축소
2. _중요하지 않은_ CSS 지연

   - Chrome DevTools의 Coverage 탭을 사용하여 웹 페이지에서 사용하지 않는 CSS를 찾자
     1. 개발자도구
     2. 커맨드 + 시프트 + P -> coverage 검색
     3. `다시 로드 아이콘` 클릭
     4. 사용 되지 않는 코드 줄은 시작 부분에 빨간 줄이 표시된다.
        ![coverage](https://wd.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/IzpB7injykyaq8PRDVwF.png?auto=format&w=845)
   - 사용하지 않는 CSS를 완전히 제거하거나 사이트의 별도 페이지에서 사용하는 경우 다른 스타일시트로 이동.
   - 초기 렌더링에 필요하지 않은 CSS의 경우 `rel="preload"` 및 `onload`를 활용해 비동기식으로 파일을 로드

3. **중요한** CSS 즉시 처리

   - `<head>`에 포함해 즉시 처리

4. 이미지 최적화 및 압축

   - 처음부터 이미지를 사용하지 않는다.
   - 이미지를 압축한다.
   - 이미지를 WebP로 변환한다.
   - 반응형 이미지를 사용한다.
   - 이미지 CDN을 사용한다.

5. 중요한 리소스를 `rel="preload"`으로 미리 로드한다.
6. 텍스트 파일을 Gzip으로 압축한다.
7. 중요 JS를 축소하여 최소화한다.
8. 사용하지 않는 JS를 지연한다.

### 렌더링 패턴

사이트의 성격에 맞는 렌더링 패턴을 택하여 개선한다.

### LCP를 개선하기 위한 개별 성능 기술

- PRPL 패턴으로 즉각적 로딩 적용
- 중요 렌더링 경로 최적화
- CSS 최적화
- 이미지 최적화
- 웹 글꼴 최적화
- JavaScript 최적화(클라이언트 렌더링 사이트용)

## Reference

- [web.dev의 LCP](https://web.dev/lcp)
- [web.dev의 LCP 최적화](https://web.dev/optimize-lcp/)
- [web.dev의 vitals](https://web.dev/vitals/)