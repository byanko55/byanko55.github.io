---
layout: subpage
theme: blog
parent: Wireshark
grand_parent: Network
title: "Wireshark 가이드 #1-a -- ✨설치 (Windows)✨"
date: "2021-06-05"
thumbnail: "https://i.ibb.co/tZ7dhf9/111.webp"
---


# Wireshark 설치 과정
---

*Wireshark*는 아래 주소에서 다운로드받을 수 있습니다.

> [https://www.wireshark.org/download.html](https://www.wireshark.org/download.html)

1\. 빨간색 박스 영역을 클릭해서 설치파일을 먼저 받도록 합니다.
![topics](https://i.ibb.co/510NQR5/1.webp) ![topics](https://i.ibb.co/Rj5xDVG/2.webp){: .img-sm}

2\. 설치 파일을 실행시켜 `▶Next`버튼을 선택하고 라이센스까지 동의합니다 (`▶Noted`)
![topics](https://i.ibb.co/PwkLCDy/3.png){: .img-lg} ![topics](https://i.ibb.co/ZzLL3dS/4.webp){: .img-lg}

3\. 설치 요소는 아래 그림처럼 구성되어 있습니다. 딱히 건드릴 필요는 없으니 `▶ Next`
![topics](https://i.ibb.co/GsMSf11/5.webp){: .img-lg} ![topics](https://i.ibb.co/cTKtvLd/7.webp){: .img-lg} ![topics](https://i.ibb.co/mRhmHCP/8.webp){: .img-lg} ![topics](https://i.ibb.co/yy0dhFG/9.webp){: .img-lg} ![topics](https://i.ibb.co/X2P7kB2/10.webp){: .img-lg}

4\. `Install` 버튼까지 넘어오면 본격적으로 *Wireshark*의 설치가 진행됩니다. 여기서 설치 중간에 아래와 같이 생긴 창이 하나 더 생기는데요. 이는 *Wireshark* 실행에 필요한 ***Npcap***이라는 드라이버를 따로 설치하기 위함이니 `I Agree` 버튼을 선택하시고 설치를 이어나가 주세요.
![topics](https://i.ibb.co/mFkfcNz/11.webp){: .img-lg} ![topics](https://i.ibb.co/W00gdb8/12.webp){: .img-lg} ![topics](https://i.ibb.co/wMccH26/13.webp){: .img-lg}
 
5\. *Npcap* 설치가 완료되면 잠시 중단됬던 *Wireshark* 설치 과정이 재개되고, 곧이어 아래와 같이 설치가 모두 끝났다는 창이 생성됩니다. 설치된 *Wireshark*의 원활한 동작을 위해 재부팅을 하는 것이 원칙이지만, 제 경우에는 바로 실행할 수 있네요.
![topics](https://i.ibb.co/4twXxjq/14.webp){: .img-lg}

# Wireshark 실행 (Windows)
---

하단 바에서 *Wireshark*를 검색하면 해당 앱이 리스트에 뜨는 것을 확인하실 수 있습니다. 

![topics](https://i.ibb.co/gP8djqv/15.webp){: .img-lg}

*Wireshark*를 실행시키면 다음과 같은 UI가 나옵니다. '`이더넷`'이라고 쓰인 영역을 주의 깊게 보시면 옆에 아날로그 신호같이 생긴 그래프가 그려지는 것을 확인하실 수 있습니다. 이 네트워크 인터페이스를 통해 데이터가 들어오고 나가는 양을 표현한다고 보시면 됩니다.

![topics](https://i.ibb.co/QdZ15W9/16.webp)
 

`이더넷`을 더블 클릭하면 창이 하나 더 생기면서 아래와 같이 생긴 테이블에 여러 값이 우수수 쏟아져 나오는 것을 보시게 될텐데요 (개인 IP는 blur처리 했습니다). 각 행이 하나의 패킷과 대응하며, 현재 인터넷에 접속해 있는 상태에서 수집되는 패킷들을 차례대로 나타나게 됩니다.

![topics](https://i.ibb.co/vc2jrK6/17.webp)
 

패킷 데이터 수집을 중단하기 위해선 상단 메뉴바에 빨간 박스를 클릭하면 됩니다.

![topics](https://i.ibb.co/Z8XfnGc/18.webp){: .img-lg}
 

위에서 보시는 인터페이스가 앞으로 패킷 분석을 하는 데에 계속 활용될 텐데요, 다음 포스트에서는 *Wireshark*를 활용해서 어떤 네트워크 정보들을 알아낼 수 있는지 간단한 실습을 통해 알아보고자 합니다.

