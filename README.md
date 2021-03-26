

## 카모스크 - 사용자 맞춤형 AI 광고 추천 키오스크

- 사용자 맞춤형 광고 솔루션으로 광고 효과를 높이고자 함.
- 사용자의 익명정보 분석
- 맞춤형 광고 선별
- 광고비용 절감 효과

## 졸업 작품 캡스톤 디자인

- 개발 계획서 PPT
[https://drive.google.com/file/d/1HU3pthFMwLZjJxMZgPNE5bZW0exScHsW/view?usp=sharing](https://drive.google.com/file/d/1HU3pthFMwLZjJxMZgPNE5bZW0exScHsW/view?usp=sharing)
- 중간 보고서 Docs
[https://drive.google.com/file/d/1mSuHdIWSn-FxaN5lx9jpdmuAZ7_kmzus/view?usp=sharing](https://drive.google.com/file/d/1mSuHdIWSn-FxaN5lx9jpdmuAZ7_kmzus/view?usp=sharing)
- 최종 보고서 Docs
[https://drive.google.com/file/d/1E47aoqpW7gNagVyNpNIywFDMm5QPq6uZ/view?usp=sharing](https://drive.google.com/file/d/1E47aoqpW7gNagVyNpNIywFDMm5QPq6uZ/view?usp=sharing)
- 최종 발표 PPT
[https://drive.google.com/file/d/1UEjLPVKFIJRjEr3fKG4p6uvN5cCBMdow/view?usp=sharing](https://drive.google.com/file/d/1UEjLPVKFIJRjEr3fKG4p6uvN5cCBMdow/view?usp=sharing)

![./docs/purpose.png](./docs/purpose.png)

## 아키텍쳐

![./docs/arc.png](./docs/arc.png)


##  셋팅
- dev.js 추가
- env 설정 ( gitignore )
- ffmpeg 설정
```
MONGO_URI = "mongodb://dosimpact:589742@localhost:27017/admin"
process.env.FFMPEG_PATH = path.normalize("C:/ffmpeg/bin/ffmpeg.exe");
```

## 설치 및 실행
```
yarn install && cd ./client && yarn install
yarn start
cd ./client && yarn start
```

## 범용 키오스크 구성하기

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

![./docs/camosk2.png](./docs/camosk2.png)

- 3. 🚀 로드상의 키오스크

```
header  : 닮은 연애인 꼴 컴포넌트, 세이프 벨
Body    :  메인광고 패널*1 - component > User Info > 광고 추천
Cam     : FaceRekogCam , FaceInfoCam, PoepleCaptureCam
```



- 4. 🚀 버스 정류장의 키오스크

```
header  : 버스 위치 정보 조회 서비스  - component, 세이프 벨
Body    :  메인광고 패널*1 - component > User Info > 광고 추천
Cam     : FaceRekogCam , FaceInfoCam, PoepleCaptureCam
```




