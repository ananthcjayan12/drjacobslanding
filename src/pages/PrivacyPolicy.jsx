import { Helmet } from 'react-helmet-async';
import Container from '@components/common/Container';
import SectionHeading from '@components/common/SectionHeading';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Smile Craft Dental Clinic</title>
      </Helmet>
      <section className="pt-32 pb-20">
        <Container size="small">
          <SectionHeading title="Privacy Policy" />
          <div className="prose prose-gray max-w-none text-gray-600 space-y-6">
            <p>At Smile Craft Dental Clinic, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Smile Craft Dental Clinic and how we use it.</p>
            <h3 className="text-xl font-bold text-gray-900 mt-8">Information We Collect</h3>
            <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
            <p>If you contact us through our booking form, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>
            <h3 className="text-xl font-bold text-gray-900 mt-8">How we use your information</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide, operate, and maintain our website</li>
              <li>To improve, personalize, and expand our website</li>
              <li>To understand and analyze how you use our website</li>
              <li>To develop new products, services, features, and functionality</li>
              <li>To communicate with you to schedule appointments</li>
            </ul>
            <h3 className="text-xl font-bold text-gray-900 mt-8">Log Files</h3>
            <p>Smile Craft Dental Clinic follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.</p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default PrivacyPolicy;
