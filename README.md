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

- 1. 앨리베이터 키오스크

- ElevatorPage

```
header : Clock , Weather, News > 광고에 대한 메타정보 , QR , Homepage 썸네일?
Body :  메인광고 패널 > 광고 추천
```

- 4.1 얼굴인식 피드백
- 4.2 얼굴 인식 후 > 광고 패널 2개 > 각각 추천 받아온 영상 url로 체인지

- 2. 매장내 키오스크

- 3. 로드상의 키오스크

- 4. 버스 정류장의 키오스크
