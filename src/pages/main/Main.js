import { Divider } from '../../components/atoms/divider';
import StyledCarousel from '../../components/atoms/StyledCarousel';

const Main = () => {
  const x2beeImg = [
    {
      url: '/img/portfolio/x2bee-main.png',
      alt: 'x2bee main',
    },
    {
      url: '/img/portfolio/x2bee-cart.png',
      alt: 'x2bee cart',
    },
    {
      url: '/img/portfolio/x2bee-pay-toss.png',
      alt: 'x2bee pg',
    },
  ];

  const cpoImg = [
    {
      url: '/img/portfolio/cpo-main.png',
      alt: 'cpo main',
    },
    {
      url: '/img/portfolio/cpo-mypage.png',
      alt: 'cpo mypage',
    },
  ];

  return (
    <main className="flex-grow space-y-10">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text text-4xl font-extrabold m-12">개발자, 이지은</h2>
        <div className="container mx-auto px-4 space-y-3">
          <p className="text-center">
            안녕하세요, 시각화와 문서로 소통하는 것을 중요하게 생각하는 3년차
            웹개발자 이지은입니다.
          </p>
          <p className="text-center">
            첫 번째, UML을 활용하여 비즈니스 로직에 대한 원활한 소통을
            추구합니다.
          </p>
          <p className="text-center">
            두 번째, 가이드 문서와 swagger를 작성하여 프로젝트의 품질을 높이기
            위해 노력하고 있습니다.
          </p>
          <p className="text-center">
            세 번째, 문서화를 통해 기술 공유, 인수인계 시 신속하고 정확하게
            수행합니다.
          </p>
        </div>
      </div>
      <Divider variant="lineThin">경력 기술서</Divider>
      <div className="container flex mx-auto flex-col items-center space-y-20">
        {/*X2BEE 솔루션*/}
        <div className="flex space-x-10 items-start">
          <div className="flex-1 p-4 max-w-md space-y-2">
            <p className="text text-lg font-bold bg-indigo-200">
              플래티어 x2bee 솔루션 개선
            </p>
            <span className="font-bold ">2024.04 ~ </span>
            <div>
              <div className="mt-5 mb-5">
                <p>[역할]</p>
                <ul className="list-disc pl-6 mb-5">
                  <li>NIFI DB 동기화</li>
                  <li>토스 PG 결제/빌링 개발</li>
                  <li>멀티사이트 서비스 솔루션 설계 및 개발</li>
                </ul>
              </div>
              <div>
                <p>[성과]</p>
                <ul className="list-disc pl-6 mb-5">
                  <li>이메일, SMS 수신인 일괄등록 성능 개선</li>
                  <li>PG 연동 확장성 있는 설계</li>
                </ul>
              </div>
              <div className="mt-5 mb-5">
                <p>[Comment]</p>
                <p>
                  토스 PG 연동을 통해 관리자 페이지에서 PG사를 이니시스와 토스
                  중 선택할 수 있도록 개선했습니다. 추후 확장을 고려하여 전략
                  패턴(Strategy Pattern)이 적용되었습니다.
                </p>
              </div>
            </div>
            <p className="text text-lg font-bold bg-indigo-200">
              플래티어 x2bee 솔루션 개발
            </p>
            <span className="font-bold">2023.10 ~ 03</span>
            <div>
              <p className="mt-5 mb-5">
                X2BEE 이커머스 솔루션의 Front Office 기술을 VUE에서 REACT로
                마이그레이션하는 프로젝트 입니다.
              </p>
              <div className="mt-5 mb-5">
                <p>[역할]</p>
                <ul className="list-disc pl-6 mb-5">
                  <li>주문/결제 : 장바구니, 배송요청사항 변경 개발</li>
                  <li>회원 : 쿠폰함 개발</li>
                  <li>이벤트 : 댓글, 쿠폰 다운로드 개발</li>
                </ul>
              </div>
              <div>
                <p>[성과]</p>
                <ul className="list-disc pl-6 mb-5">
                  <li>UML(시퀀스, 클래스 다이어그램) 사용하여 시각화</li>
                  <li>swagger, release note 문서화</li>
                  <li>개발 환경 설정 가이드 작성</li>
                </ul>
              </div>
              <div className="mt-5 mb-5">
                <p>[Comment]</p>
                <p>
                  함수형 프로그래밍에 대한 고민을 하면서 개발한 프로젝트입니다.
                </p>
              </div>
            </div>
          </div>
          <div className="relative max-w-md flex-1 bg-gray-100 p-6">
            <StyledCarousel images={x2beeImg}></StyledCarousel>
          </div>
        </div>

        {/*인증중고차*/}
        <div className="flex space-x-10 items-start">
          <div className="relative max-w-md flex-1 bg-gray-100 p-6 h-auto">
            <StyledCarousel images={cpoImg}></StyledCarousel>
          </div>
          <div className="flex-1 p-4 max-w-md space-y-2">
            <p className="text text-lg font-bold bg-indigo-200">
              현대 인증중고차 구축 프로젝트
            </p>
            <span className="font-bold ">2024.04 ~ </span>
            <div>
              <div className="mt-5 mb-5">
                <p>
                  [기술] java, Spring boot, thymeleaf, javascript, jQuery,
                  postgreSQL
                </p>
              </div>
              <div className="mt-5 mb-5">
                <p>[역할]</p>
                <ul className="list-disc pl-6 mb-5">
                  <li>내차팔기, 내차팔기 관리 일부 화면 개발</li>
                  <li>내차팔기 API 개발</li>
                </ul>
              </div>
              <div>
                <p>[성과]</p>
                <ul className="list-disc pl-6 mb-5">
                  <li>내차팔기 차량 조회 api 캐싱 적용하여 성능 개선</li>
                  <li>callback 함수를 async / await 사용하여 가독성 개선</li>
                  <li>
                    개발완료 준수 건 / 총 개발건, 157/157을 유지하여 일정 준수율
                    100% 달성
                  </li>
                  <li>시퀀스 다이어그램 작성하여 업무 인계에 활용</li>
                </ul>
              </div>
              <div className="mt-5 mb-5">
                <p>[Comment]</p>
                <p>...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Divider variant="lineThin">기술 스택</Divider>
    </main>
  );
};

export default Main;
