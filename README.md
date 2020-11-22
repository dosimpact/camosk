# 캡스톤 디자인

- 스트리밍 서비스 구현 , BaseCode setting 완료

# 초기 셋팅

- dev.js 추가
- env 설정 ( gitignore )

```
MONGO_URI = "mongodb://dosimpact:589742@localhost:27017/admin"

```

- ffmpeg 설정

```
process.env.FFMPEG_PATH = path.normalize("C:/ffmpeg/bin/ffmpeg.exe");
```

# 범용 키오스크 구성하기

- 1. ✔ 앨리베이터 키오스크 (ElevatorPage)

```
header  : Clock-component , Weather-component, News-component
Body    :  메인광고 패널*2 - component > User Info > 광고 추천

Cam     : FaceRekogCam , FaceInfoCam, PoepleCaptureCam
```

![camosk1.png](./docs/camosk1.png)

- 2. 🚀 매장내 키오스크

```
header  : FaceRekogCam, Order
Body    : Order-component > User Info > 과거 주문 셋팅
Cam     : FaceRekogCam ,  PoepleCaptureCam
```

```
TODO LIST
✔ 과거 주문 기록 API
🚀 과거 주문 기록 불러와서 메뉴로 셋팅해주기
```

- 3. 🚀 로드상의 키오스크

```
header  : 닮은 연애인 꼴 컴포넌트, 세이프 벨
Body    :  메인광고 패널*1 - component > User Info > 광고 추천
Cam     : FaceRekogCam , FaceInfoCam, PoepleCaptureCam
```

```
TODO LIST
💥 닮은 연애인 꼴 컴포넌트 티쳐블 머신 ( 실패 라이브러리 문제 .. )
🚀 메일 API , 문자 메시지 API
```

- 4. 🚀 버스 정류장의 키오스크

```
header  : 버스 위치 정보 조회 서비스  - component, 세이프 벨
Body    :  메인광고 패널*1 - component > User Info > 광고 추천
Cam     : FaceRekogCam , FaceInfoCam, PoepleCaptureCam
```

```
TODO LIST
🎂 범죄자 얼굴 정보 , (API 없이 직접 얼굴 및 정보 구축)
🎂 버스 위치 정보 조회 서비스
```

```
# 서버사이트 광고 추천 업데이트
```
