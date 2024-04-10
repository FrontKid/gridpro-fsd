import { Condition } from './ui/Condition';
import { ContactUs } from './ui/ContactUs';
import { Hero } from './ui/Hero';
import { Layout } from './ui/Layout';
import { OurMission } from './ui/OurMission';
import { Service } from './ui/Service';

const HomePage = () => {
  return (
    <Layout
      hero={<Hero />}
      services={<Service />}
      condition={<Condition />}
      ourMission={<OurMission />}
      contactUs={<ContactUs />}
    />
  );
};

export { HomePage };
