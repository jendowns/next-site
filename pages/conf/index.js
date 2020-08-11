import { SkipNavContent } from '@reach/skip-nav';
import Page from '../../components/page';
import { ORG_NAME } from '../../lib/constants';
import SocialMeta from '../../components/social-meta';

export default function Conf() {
  return (
    <Page title="Next.js Conf">
      <SocialMeta
        image="/static/twitter-cards/home.jpg"
        title={`Next.js by ${ORG_NAME} - The React Framework`}
        url="https://nextjs.org"
        description={`Production grade React applications that scale. The world’s leading companies use Next.js by ${ORG_NAME} to build static and dynamic websites and web applications.`}
      />
      <SkipNavContent />
    </Page>
  );
}
