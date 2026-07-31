import { AppLayout } from 'extraction-ui';

import { Footer, Header, HomeMainContent, SideNav } from './components';

export default function Home() {
  return (
    <AppLayout>
      <AppLayout.Header>
        <Header />
      </AppLayout.Header>
      <AppLayout.Body>
        <AppLayout.Sidenav className="w-auto gap-1 p-4">
          <SideNav />
        </AppLayout.Sidenav>
        <AppLayout.Main>
          <AppLayout.Section className="p-8">
            <HomeMainContent />
          </AppLayout.Section>
          <AppLayout.Section className="m-8 rounded-lg bg-neutral-50/50 py-24">
            <Footer />
          </AppLayout.Section>
        </AppLayout.Main>
      </AppLayout.Body>
    </AppLayout>
  );
}
