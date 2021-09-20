
const activeCore = [
    // {
    //   name: '연계플랫폼',
    //   subname: '문화정보다부처연계플랫폼',
    //   period: '2018.09~2019.02',
    //   github: 'culture.JPG',
    //   flag: '국가차원에 문화정보를 수집 데이타베이스화여 대국민서비스하기위한 메타정보 플랫폼을 구축 기존에 정형화된 데이타에서 한층 진일보하여 비정형데이타를 수집하여 이를 체계적으로 분류하여 수집가공함 이는 적합한 문화정보서비스에 전초적 역할을 수행하는 작업이었음.',
    //   city: 'Java,Jsp,jQuery,전자정부,Tibero,리얼그리드,eChart',
    // },
    // {
    //   name: '전자구매',
    //   subname: 'LS엠트론전자구매',
    //   period: '2018.01~2018.03',
    //   github: 'elbuy.JPG',
    //   flag: '기업이 분사하면서 ERP구축과 함께 인발브된 전자구매시스템, 계약요청,단가합의,업체가입을 맡아서 함.',
    //   city: 'Java,Jsp,전자정부,AngularJS,MSSQL',
    // },
    // {
    //   name: '클라우드쇼핑몰',
    //   subname: '알리클라우드',
    //   period: '2016.10~2016.12',
    //   github: 'ali.JPG',
    //   flag: '제2의 아마존이라 불리는 알리바바에 알리클라우드 상품 중계 쇼핑몰 알리클라우드에서 제공해주는 데이타를 제공받아 한국에서 자체쇼핑몰을 만들어 클라우드 상품을 판매함 회원관리 고객센터 부터 클라우드 구성 판매까지 아우르는 하드웨어 인프라 토탈 전문 쇼핑몰 회원관리,로그인,고객센터(공지사항,QNA,포럼,교육신청,FAQ)를 전담맡아서 개발',
    //   city: 'Spring Boot,jquery,MySql,tiles',
    // },
    // {
    //   name: 'RB-MES',
    //   subname: '리퍼비시 모바일기기 관리',
    //   period: '2016.07~2016.09',
    //   github: 'iron.png',
    //   flag: '모바일기기 리퍼비시에 대한 제조 공정 관리. 입고 분해 조립 공정 라벨링등을 관리하는 프로세스구현 대상은 미국입고 제품 입고와 라벨링을 개발',
    //   city: 'Spring,X플랫폼,알티베이스'
    // },
    // {
    //   name: '빅데이터',
    //   subname: '리포팅UI',
    //   period: '2015.11~2015.12',
    //   github: 'heti.png',
    //   flag: '경영에 지표로 사용되어지는 세일즈 raw데이타를 집계가공 데이타마트를 구성하여 이를 비주얼하게 화면에 표시해주는것을 구현 최종적인 시각화는 챠트로 구현됨.',
    //   city: 'Spring,AngularJs,DevExtream'
    // },
    // {
    //   name: '기준정보관리',
    //   subname: '자재기준정보관리',
    //   period: '2015.09~2015.10',
    //   github: 'ironreps.png',
    //   flag: '제품을 만들기 위한 재목 자재에대한 관리 부품생성 조립 완제품 ERP에 전송 까지 망라하는 구현',
    //   city: 'EJB,XFlatForm,MS SQL'
    // },
    // {
    //   name: '성과관리',
    //   subname: '인사성과관리',
    //   period: '2013.08~2013.12',
    //   github: '1.jpg',
    //   flag: '개인평가 1차평가 2차평가 매트릭스평가로 구성되는 성과관리 시스템. 2차평가를 맡아서 개발함.',
    //   city: '오라클ADF,Oracle,Jquery'
    // },
    // {
    //   name: '신보험UI',
    //   subname: '농협생명신보험',
    //   period: '2013.02~2013.05',
    //   github: 'pathfora.png',
    //   flag: '농협생명 차세대 신보험 시스템  일반지급과 신계약 UI를 개발함 기간계 개발자와에 끊임없는 의사소통은 주요 골자였음.',
    //   city: 'X플랫폼,Report Designer'
    // },
    // {
    //   name: 'G-SCM',
    //   subname: '글로벌 SCM',
    //   period: '2012.04~2012.11',
    //   github: 'dzrpt.jpg',
    //   flag: '삼성전자의 공급망 관리 시스템 개발 디멘딩 플래닝, 팩토리플래닝등을 개발 팀원간에 유기적인 협업은 일을 진행함에 있어 최상에 요소였으며, 더할나위 없는 결과로 이어짐',
    //   city: 'XFlatForm,오라클'
    // },
    // {
    //   name: 'G-MES',
    //   subname: '글로벌 MES-MOBILE',
    //   period: '2011.09~2012.01',
    //   github: 'kasra.jpg',
    //   flag: '삼성전자의 글로벌 생산관리 시스템 세계각지에 퍼저있는 생상공장에대한 생산부터 리소스 관리 품질관리에 이르는 모든것을 구축하는 프로젝 여기서 생산관리 모바일웹을 구현하여 현지 근로자들이 편리하게 업무를 수행하도록 함. 특히 출하시 모바일 바코드 스캔은 모바일기기 활용에 백미였음. 애자일 개발 방법론으로 진행 애자일 개발방법론중에서도 스프린트방식으로 진행하여 촉박한 납기일정을 맞추도록 하였으며, 지체하지 않고 끊임없이 신속히 앞으로 나가는 프로젝트 분위기는 애자일 방법론에 극대화였음',
    //   city: '삼성sds 모바일 솔루션,jQuery'
    // },
    // {
    //   name: 'R.C 모바일',
    //   subname: 'R.C 모바일',
    //   period: '2010.11~2011.04',
    //   github: 'mobimall.jpg',
    //   flag: '삼성 화재 리스크 컨설턴트들이 영업용으로 사용하기 위해 모바일 기기를 타깃으로 회원가입부터 청약까지 모바일로 구축 피엘 주도하에 매일 아침마다 진행하는 팀원 소집은 팀원들을 현실적으로 일에 인발브시키는 요소였으며, 관리자와 팀원간에 유대관계를 복돋우는 방법이었음',
    //   city: 'jQuery,EJB,Struts'
    // },
    // {
    //   name: 'WEB INNOVATION',
    //   subname: '삼성카드 웹이노베이션',
    //   period: '2010.02~2010.06',
    //   github: 'outseeker.jpg',
    //   flag: '삼성카드 홈페이지 개편 프로젝트 좌초된 프로젝트에 결말을 여지없이 보여주는 프로젝트였으며, 초반 작업범위 파악에 중요도를 보여주었음. 어드민 일부분을 맡아서 개발함. 컨버전에 위험성을 극악명료하게 시사해 주었으며, 이는 너무 값비싼 대가를 치루어 알게된 결과였음. 애즈이즈투비 컨셉에 있어 컨버전으로 접근하면 안되며 애즈이즈를 최대한 폐기하고 작업하는것이 베스트임 아예 배제하고 갈것이며 참신하게 구축하는 것이 포인트',
    //   city: 'jQuery,EJB,Struts'
    // },
    // {
    //   name: '국가대표포탈',
    //   subname: '행자부 국가대표포탈',
    //   period: '2009.09~2010.01',
    //   github: 'ppl-quiz.png',
    //   flag: '국민이 원하는 정보를 일목요연하게 볼 수 있도록 구성 검색을 강화한 사이트. 연계를 담당해서 개발.',
    //   city: '전자정부프레임웍,MySql,Spring'
    // },
    // {
    //   name: '노인장기요양보험',
    //   subname: '건보 노인장기요양보험',
    //   period: '2007.11~2008.06',
    //   github: 'restaurantReason.jpg',
    //   flag: '노인장기요양보험 판정부터 급여 급여사후 부당수급 환급등을 관리하는 시스템 부당수급과 기타징수일부를 맡아서함 특히 이 사업은 노인장기요양보험 첫 적용 사업이며 순조로운 출발로 인하여 지금도 널리 활용되고 있음.',
    //   city: 'MiPlatform,Oracle,Spring,Rexpert Report'
    // },
    // {
    //   name: '새올행정고도화',
    //   subname: '새올행정시군구고도화',
    //   period: '2007.08~2007.11',
    //   github: 'nd.jpg',
    //   flag: '새올행정 시군구 고도화 3차로 수산업무를 맡아서 분석설계및산출물 작업을함.',
    //   city: 'ejb,Oracle,trustForm,together'
    // },
    // {
    //   name: '전자계약포탈',
    //   subname: '홈플러스전자계약포탈',
    //   period: '2007.08~2007.11',
    //   github: '1.jpg',
    //   flag: 'AJAX를 도입하여 유려한 사용자 인터페이스를 구현함.',
    //   city: 'Java,Jsp,Oracle,Struts'
    // },
    // {
    //   name: '등기운영',
    //   subname: '대법원등기시스템운영',
    //   period: '2006.06~2007.03',
    //   github: '1.jpg',
    //   flag: 'CMML5 기반에 안정적인 환경에서 근무',
    //   city: 'Java,Jsp,Oracle,EJB,TrustForm'
    // },
    // {
    //   name: '보험사기인지고도화',
    //   subname: '금감원보험사기인지고도화',
    //   period: '2006.01~2006.04',
    //   github: '1.jpg',
    //   flag: '각보험사로부터 다량에 데이타를 수집및가공하여 이를 시각적으로 표현하여 보험사기를 적발과 예방에 활용함',
    //   city: 'Java,Jsp,Oracle,OLAP'
    // },
    // {
    //   name: '체화공매전자입찰',
    //   subname: '관세청 체화공매 전자입찰',
    //   period: '2005.07~2005.12',
    //   github: 'html5.jpg',
    //   flag: '여행자들이 세관에서 압수당한 물건을 관세청에서 입찰로 판매하는 입찰 프로젝트 구현에 키 롤을 맡았으며, 관리자부분을 전담해서 함.',
    //   city: 'Java,Jsp,Oracle,Ant'
    // },
    // {
    //   name: 'PDSS',
    //   subname: '삼성인사관리시스템',
    //   period: '2004.10~2005.03',
    //   github: '1.jpg',
    //   flag: '삼성그룹인사관리시스템으로 외부솔루션을 도입하지 않고 자체적으로 구축함.',
    //   city: 'Java,Jsp,Oracle,EJB,IBSHEET'
    // },
    // {
    //   name: '함정포탈',
    //   subname: '해군함정포탈',
    //   period: '2004.01~2004.06',
    //   github: '1.jpg',
    //   flag: '해군함정포탈.',
    //   city: 'Java,Jsp,Oracle,핸디그룹웨어'
    // },
    // {
    //   name: '교육공무원포탈',
    //   subname: '서울시교육공무원포탈',
    //   period: '2003.05~2003.10',
    //   github: '1.jpg',
    //   flag: '짧은시간에 매우 많은 것을 만을어야 하는 작업이었음.',
    //   city: 'Java,Jsp,Oracle'
    // },
    {
      name: '일하는방식변경을위한원격기술검증',
      subname: '일하는방식변경을위한원격기술검증',
      period: '',
      github: 'webrtc.png',
      flag: '크게 어시스턴스가 있고 워커가 있는 구조 일단 stun과 turn 서버를 사용하여 웹영상 통신 경로를 설정함. 이때 통신은 udp 방식. 브라우저에서 제공하는 getusermedia를 사용하여 카메라를 오픈 이렇게 하면 영상통화 준비가 됨 콜러가 rtc peer connection으로 다이얼링을 하면 수신자가 이에 응답하면 영상 채널이 열리게 됨 이단계에서 기술적으로 create offer create answer ice candiate 같은 시그널링을 하게 됨 다음으로 rtc data channel이 열리게 되면 채팅을 할 수 있게 되고 이미지 파일도 전송할수 있게 됨 모든 행위는 이벤트 방식으로 이루어지게 되며 이때 이벤트 발생에 행위는 서버를 통하여 이루어 지게 됨 중계서버는 노드 제이에스를 사용하여 구현 mysql 데이타베이스를 사용하여 영상회의에 대한 기록을 저장관리하였습니다.                                                                              ',
      city: 'NodeJs,Ejs,Webrtc,Git',
    },
  {
    name: 'Dashboard',
    subname: 'Dashboard',
    period: '',
    github: 'atl.jpg',
    flag: '많은 기업체에서 쓰는 콜레보레이션 툴 아틀라시안 제품군에 대한 복잡한 UI를 간소화 표시성에 대두로 인해 구현. 프레임웍 구성과 개발을 담당함.                                                                              ',
    city: 'Java,Spring,Oracle,Git,reactJs,TypeScript,mobx',
  },
    {
      name: 'CDW',
      subname: 'CDW 포탈',
      period: '',
      github: 'abio.png',
      flag: `병원 암센터 진료 연구 포탈 PCR 유전체검사장비 보험적용 확대와 아데노 카리시노마 분자 단위 풀 시퀀스 염기서열분석이
      가능해 지면서 이에 대한 메모리얼암센터와에 지식 공유포탈과 환자에 유전자 변이 추이를 Mutation 
      그래프로의 표현과 ct스캔, surgery, 조직검사,병리검사등에 
      진료를 년도별 월별 일자별 타임 라인 그래프로 표현하여 진료에 용이성과 환자별 초진, 재진, 서바이벌 추적분석이 가능하다.
      특히 타임라인 그래프는 라파엘을 사용하여 본 개발자에 아이디어로 창조함. `
      ,
      city: 'Java,Spring,mariaDB,reactJs,TypeScript,mobx',
    },
    {
      name: '다부처정보공유플랫폼',
      subname: '다부처정보공유플랫폼',
      period: '',
      github: 'culture.JPG',
      flag: '국가차원에 문화정보를 수집 데이타베이스화여 대국민서비스하기위한 메타정보 플랫폼을 구축 기존에 정형화된 데이타에서 한층 진일보하여 비정형데이타를 수집하여 이를 체계적으로 분류하여 수집가공하여 수집률을 집계표현.',
      city: 'Java,Jsp,jQuery,전자정부,Tibero,리얼그리드,eChart',
    },
    {
      name: '전자구매',
      subname: 'LS엠트론전자구매',
      period: '',
      github: 'elbuy.JPG',
      flag: '기업이 분사하면서 ERP구축과 함께 인발브된 전자구매시스템, 계약요청,단가합의,업체가입을 맡아서 함.',
      city: 'Java,Jsp,전자정부,AngularJS,MSSQL',
    },
    {
      name: '클라우드플랫폼',
      subname: '클라우드플랫폼',
      period: '',
      github: 'ali.JPG',
      flag: '제2의 아마존이라 불리는 알리바바에 알리클라우드 상품 중계 쇼핑몰 알리클라우드에서 제공해주는 데이타를 제공받아 한국에서 자체쇼핑몰을 만들어 클라우드 상품을 판매함 회원관리 고객센터 부터 클라우드 구성 판매까지 아우르는 하드웨어 인프라 토탈 전문 쇼핑몰 회원관리,로그인,고객센터(공지사항,QNA,포럼,교육신청,FAQ)를 전담맡아서 개발',
      city: 'Spring Boot,jquery,MySql,tiles',
    },
    // {
    //   name: 'RB-MES',
    //   subname: '리퍼비시 모바일기기 관리',
    //   period: '',
    //   github: 'iron.png',
    //   flag: '모바일기기 리퍼비시에 대한 제조 공정 관리. 입고 분해 조립 공정 라벨링등을 관리하는 프로세스구현 대상은 미국입고 제품 입고와 라벨링을 개발',
    //   city: 'Spring,X플랫폼,알티베이스'
    // },
    // {
    //   name: '분석리포팅시각화',
    //   subname: '분석리포팅시각화',
    //   period: '',
    //   github: 'heti.png',
    //   flag: '경영에 지표로 사용되어지는 세일즈 raw데이타를 집계가공 데이타마트를 구성하여 이를 비주얼하게 화면에 챠트등으로 표시해주는구현.',
    //   city: 'Spring,AngularJs,DevExtream'
    // },
    {
      name: '기준정보관리',
      subname: '자재기준정보관리',
      period: '',
      github: 'ironreps.png',
      flag: '제품을 만들기 위한 재목 자재에대한 관리 부품생성 조립 완제품 ERP에 전송하는것을 구현',
      city: 'EJB,XFlatForm,MS SQL'
    },
    {
      name: '성과관리',
      subname: '인사성과관리',
      period: '',
      github: '1.jpg',
      flag: '개인평가 1차평가 2차평가 매트릭스평가로 구성되는 성과관리 시스템. 2차평가를 맡아서 개발함.',
      city: '오라클ADF,Oracle,Jquery'
    },
    // {
    //   name: '신보험',
    //   subname: '신보험UI',
    //   period: '',
    //   github: 'pathfora.png',
    //   flag: '차세대 신보험 시스템. 일반지급과 신계약 엑스플랫폼을 개발함',
    //   city: 'X플랫폼,Report Designer'
    // },
    {
      name: 'GSCM',
      subname: 'GSCM',
      period: '',
      github: 'dzrpt.jpg',
      flag: '글로벌 공급망 관리 시스템 개발 디멘딩 플래닝, 팩토리플래닝등을 개발',
      city: 'XFlatForm,오라클'
    },
    {
      name: 'GMES',
      subname: 'Global MES-MOBILE',
      period: '',
      github: 'kasra.jpg',
      flag: '글로벌 생산관리 시스템 세계각지에 퍼저있는 생상공장에대한 생산부터 리소스 관리 품질관리에 이르는 모든것을 구축하는 프로젝 여기서 생산관리 모바일웹을 구현하여 현지 근로자들이 편리하게 업무를 수행하도록 함. 특히 출하시 모바일 바코드 스캔은 모바일기기 활용에 백미였음. 애자일 개발 방법론으로 진행 애자일 개발방법론중에서도 스프린트방식으로 진행하여 촉박한 납기일정을 맞추도록 하였으며, 지체하지 않고 끊임없이 신속히 앞으로 나가는 프로젝트 분위기는 애자일 방법론에 극대화였음',
      city: 'SEMP,jQuery'
    },
    {
      name: 'R.C 모바일',
      subname: 'R.C 모바일',
      period: '',
      github: 'mobimall.jpg',
      flag: '보험 리스크 컨설턴트들이 영업용으로 사용하기 위해 모바일 기기를 타깃으로 회원가입부터 청약까지 모바일로 구축 피엘 주도하에 매일 아침마다 진행하는 팀원 소집은 팀원들을 현실적으로 일에 인발브시키는 요소였으며, 관리자와 팀원간에 유대관계를 복돋우는 방법이었음',
      city: 'jQuery,EJB,Struts'
    },
    {
      name: 'WEB INNOVATION',
      subname: '카드회사 웹이노베이션',
      period: '',
      github: 'outseeker.jpg',
      flag: '카드회사 홈페이지 개편 프로젝트 좌초된 프로젝트에 결말을 여지없이 보여주는 프로젝트였으며, 초반 작업범위 파악에 중요도를 보여주었음. 어드민 일부분을 맡아서 개발함. 컨버전에 위험성을 극악명료하게 시사해 주었으며, 이는 너무 값비싼 대가를 치루어 알게된 결과였음. 애즈이즈투비 컨셉에 있어 컨버전으로 접근하면 안되며 애즈이즈를 최대한 폐기하고 작업하는것이 베스트임 아예 배제하고 갈것이며 참신하게 구축하는 것이 포인트',
      city: 'jQuery,EJB,Struts'
    },
    {
      name: '국가대표포탈',
      subname: '행자부 국가대표포탈',
      period: '',
      github: 'ppl-quiz.png',
      flag: '국민이 원하는 정보를 일목요연하게 볼 수 있도록 구성 검색을 강화한 사이트. 연계를 담당해서 개발.',
      city: '전자정부프레임웍,MySql,Spring'
    },
    {
      name: '노인장기요양보험',
      subname: '건보 노인장기요양보험',
      period: '',
      github: 'restaurantReason.jpg',
      flag: '노인장기요양보험 판정부터 급여 급여사후 부당수급 환급등을 관리하는 시스템 부당수급과 기타징수일부를 맡아서함 특히 이 사업은 노인장기요양보험 첫 적용 사업이며 순조로운 출발로 인하여 지금도 널리 활용되고 있음.',
      city: 'MiPlatform,Oracle,Spring,Rexpert Report'
    },
    {
      name: '새올행정고도화',
      subname: '새올행정시군구고도화',
      period: '',
      github: 'nd.jpg',
      flag: '새올행정 시군구 고도화 3차로 수산업무를 맡아서 분석설계및산출물 작업을함.',
      city: 'ejb,Oracle,trustForm,together'
    },
    {
      name: '전자계약포탈',
      subname: '홈플러스전자계약포탈',
      period: '',
      github: '1.jpg',
      flag: 'AJAX를 도입하여 유려한 사용자 인터페이스를 구현함.',
      city: 'Java,Jsp,Oracle,Struts'
    },
    {
      name: '등기운영',
      subname: '대법원등기시스템운영',
      period: '',
      github: '1.jpg',
      flag: 'CMML5 기반에 안정적인 환경에서 근무',
      city: 'Java,Jsp,Oracle,EJB,TrustForm'
    },
    {
      name: '보험사기인지고도화',
      subname: '금감원보험사기인지고도화',
      period: '',
      github: '1.jpg',
      flag: '각보험사로부터 다량에 데이타를 수집및가공하여 이를 시각적으로 표현하여 보험사기를 적발과 예방에 활용함',
      city: 'Java,Jsp,Oracle,OLAP'
    },
    {
      name: '체화공매전자입찰',
      subname: '관세청 체화공매 전자입찰',
      period: '',
      github: 'html5.jpg',
      flag: '여행자들이 세관에서 압수당한 물건을 관세청에서 입찰로 판매하는 입찰 프로젝트 구현에 키 롤을 맡았으며, 관리자부분을 전담해서 함.',
      city: 'Java,Jsp,Oracle,Ant'
    },
    {
      name: 'PDSS',
      subname: '삼성인사관리시스템',
      period: '',
      github: '1.jpg',
      flag: '삼성그룹인사관리시스템으로 외부솔루션을 도입하지 않고 자체적으로 구축함.',
      city: 'Java,Jsp,Oracle,EJB,IBSHEET'
    },
    {
      name: '함정포탈',
      subname: '해군함정포탈',
      period: '',
      github: '1.jpg',
      flag: '해군함정포탈.',
      city: 'Java,Jsp,Oracle,핸디그룹웨어'
    },
    {
      name: '교육공무원포탈',
      subname: '서울시교육공무원포탈',
      period: '',
      github: '1.jpg',
      flag: '관리자단과 사용자 단으로 나누어 게시판에 파일올리고 글 게시하고 수정하고 보여주고 한는 컨텐츠 작업이 주였음.',
      city: 'Java,Jsp,Oracle'
    },
  ];
  
  export default activeCore;
