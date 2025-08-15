
import Button from '@components/common/Button';
import { useAuth } from '@contexts/AuthContext';
import Logo from '@assets/icons/logo.svg'

const Landing: React.FC = () => {
  const { handleLogin } = useAuth();

  return (
    <main className="min-h-screen bg-[#FFF7E6]">
      {/* Header spacing to avoid sticking to top */}
      <section className="mx-auto flex max-w-5xl flex-col items-center justify-center px-6 py-20 text-center sm:py-28">
        {/* Logo */}
        <img
          src={Logo}
          alt="링크브러리 서비스 로고"
          className="mb-8 h-14 w-auto sm:h-16"
        />

        {/* Headline */}
        <h1 className="text-balance text-3xl font-extrabold tracking-tight text-[#1F2937] sm:text-5xl">
          개발자를 위한 자동 분류 <span className="text-[#F59E0B]">링크 저장소</span>
        </h1>

        {/* Sub text */}
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#4B5563] sm:mt-6 sm:text-lg">
          URL만 붙여넣으면 사이트별로 자동 정리됩니다. 
          <br /> 분류 걱정 없이 수집하고,
          다시 찾을 때는 빠르게 검색하세요.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <Button
            text="링크 추가하기"
            className="w-[220px] py-3 text-base sm:w-[260px] sm:py-3.5 sm:text-lg"
            type="button"
            onClick={handleLogin}
          />
        </div>
      </section>

      {/* Feature strip (simple, clean) */}
      <section className="mx-auto grid max-w-5xl grid-cols-1 gap-4 px-6 pb-16 sm:grid-cols-3">
        <div className="rounded-xl border border-[#FDEFD3] bg-white/70 p-5 text-left shadow-sm backdrop-blur">
          <h3 className="font-semibold text-[#111827]">자동 분류</h3>
          <p className="mt-1 text-sm text-[#6B7280]">도메인 기준으로 폴더를 자동 생성해 정리 시간을 줄여요.</p>
        </div>
        <div className="rounded-xl border border-[#FDEFD3] bg-white/70 p-5 text-left shadow-sm backdrop-blur">
          <h3 className="font-semibold text-[#111827]">빠른 검색</h3>
          <p className="mt-1 text-sm text-[#6B7280]">제목·사이트·태그로 즉시 필터링해 원하는 자료를 찾아요.</p>
        </div>
        <div className="rounded-xl border border-[#FDEFD3] bg-white/70 p-5 text-left shadow-sm backdrop-blur">
          <h3 className="font-semibold text-[#111827]">PWA 설치</h3>
          <p className="mt-1 text-sm text-[#6B7280]">홈 화면에서 앱처럼 실행하고 오프라인에서도 메모해요.</p>
        </div>
      </section>
    </main>
  );
};

export default Landing;
