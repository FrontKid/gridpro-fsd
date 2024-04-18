import { Disclosure } from './ui/Disclosure';
import { Layout } from './ui/Layout';
import { PersonalData } from './ui/PersonalData';
import { Purpose } from './ui/Purpose';
import { RetentionPeriod } from './ui/RetentionPeriod';
import { Security } from './ui/Security';
import { UsagePersonalData } from './ui/UsagePersonalData';
import { YourRights } from './ui/YourRights';

const PrivacyPage = () => {
  return (
    <Layout
      personalData={<PersonalData />}
      usePersonalData={<UsagePersonalData />}
      security={<Security />}
      purpose={<Purpose />}
      retentionPeriod={<RetentionPeriod />}
      disclosure={<Disclosure />}
      yourRights={<YourRights />}
    />
  );
};

export { PrivacyPage };
