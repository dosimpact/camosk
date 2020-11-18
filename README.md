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

- 1. 앨리베이터 키오스크 (ElevatorPage)

```
header  : Clock-component , Weather-component, News-component
Body    :  메인광고 패널*2 - component > User Info > 광고 추천
Cam     : FaceRekogCam , FaceInfoCam, PoepleCaptureCam
```

![camosk1.png](./docs/camosk1.png)

- 2. 매장내 키오스크
- 2.1

- 3. 로드상의 키오스크

- 4. 버스 정류장의 키오스크

# 서버사이트 광고 추천 업데이트
