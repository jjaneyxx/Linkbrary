import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Linkbrary',
  description: '나만의 링크를 저장하고 관리하는 서비스',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
