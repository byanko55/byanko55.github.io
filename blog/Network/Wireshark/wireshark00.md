---
layout: subpage
theme: blog
parent: Wireshark
grand_parent: Network
title: "Wireshark 가이드 #0 -- ✨소개✨"
date: "2021-05-24"
thumbnail: "https://i.ibb.co/xD9G17f/image.webp"
---

네트워크상에서 주고받는 메시지 데이터 블록의 기본 단위를 **패킷**이라고 부릅니다. 이메일을 보내거나, 파일을 다운로드받거나, 유튜브 동영상을 시청하는 등, 인터넷을 기반한 모든 행위는 패킷의 운송 과정을 통해 이뤄질 수 있죠.

![topics](https://i.ibb.co/gymf3TX/image.png)*이미지 출처: https://www.geeksforgeeks.org/packet-switched-network-psn-in-networking/*

눈에 보이지 않지만, 우리가 쓰는 컴퓨터나 모바일 기기에서는 매초 수천~수만 개의 패킷 데이터가 들어오고 빠져나가곤 합니다. 네트워크 분석이라함은 이러한 패킷의 이동 경로와 내부 정보를 파악하는 것입니다.

# Wireshark 란
---

![topics](https://i.ibb.co/kGBn289/22.webp){: .img-sm} 

***Wireshark***는 가장 보편적인 무료 **오픈 소스 네트워크 패킷 분석 프로그램**입니다. 감히 장담하건데, 네트워크 관련 종사자분들 중에서 *Wireshark*를 써보지 않으신 분들은 극히 드물겁니다.

***Wireshark***는 개별 패킷 하나하나를 비트 단위서부터 쪼개어 <u>OSI 7계층에 해당하는 영역을 매우 세부적으로 분석</u>해줍니다. 사용자들은 패킷의 송신자/수신자가 누구인지, 패킷 발생 시간, 디바이스 정보, 프로토콜 유형 등과 같은 정보를 제공 받을 수 있습니다.

![topics](https://i.ibb.co/5267ypt/19.webp)

특히, Ethernet 인터페이스에만 국한되지 않고 IEEE 802.11 (무선랜), Bluetooth, IoT 프로토콜을 포함하여 <u>현존하는 수천여개의 프로토콜을 대부분 지원</u>하고 있어 다양한 현장 또는 실습 환경에서 활용 가능합니다.

## Wireshark로 할 수 있는 것들

* <u>패킷 수집 및 필터링</u> 기능
* 네트워크 디바이스 또는 IP/Port 별 <u>패킷 통계 분석</u>
* TCP/HTTP 등 스트림(Stream) 데이터 분석
* 네트워크 트러블 슈팅 및 <u>각종 보안 이슈 진단</u>
* 오브젝트 데이터(ex., 이미지, 문서, json 파일 등) 추출

![topics](https://i.ibb.co/TYmSKrY/image.webp)*이미지 출처: https://unit42.paloaltonetworks.com/wireshark-tutorial-examining-ursnif-infections/*
![topics](https://i.ibb.co/jTZCBdY/image.webp)*패킷으로 전송되는 이미지 데이터 추출 예시*

*Wireshark*는 기본적으로 Windows, Linux, macOS, FreeBSD와 같은 멀티 플랫폼을 지원합니다. 

이외에 ***Tshark*** (Wireshark의 CLI 버전), *Capinfos*, *Mergecap* 등 각종 유틸리티를 제공하는 점에서 네트워크 분야에 입문하시는 분들에겐 아주 유용한 실습 도구라고 할 수 있습니다.



# 관련 목차
---

이하 문서들에서 본격적으로 Wireshark의 구성과 활용법을 소개해드리고자 합니다.

1-a. [Wireshark 설치 (in **Windows**)](https://www.pyromaniac.me/404/)
1-b. [Wireshark 설치 (in **Linux**)](https://www.pyromaniac.me/404/)
2\. [Wireshark 인터페이스](https://www.pyromaniac.me/404/)
3\. [Wireshark 패킷 필터링](https://www.pyromaniac.me/404/)
4\. [Wireshark Display 항목 설정](https://www.pyromaniac.me/404/)
5\. [Wireshark Host 정보 조회](https://www.pyromaniac.me/404/)
6\. [Wireshark Meta 데이터 추출](https://www.pyromaniac.me/404/)
7\. [기타 유틸리티: Tshark](https://www.pyromaniac.me/404/)
8\. [기타 유틸리티: Capinfos, Editcap, Mergecap](https://www.pyromaniac.me/404/)
 