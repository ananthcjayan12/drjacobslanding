import { Helmet } from 'react-helmet-async';
import Container from '@components/common/Container';
import SectionHeading from '@components/common/SectionHeading';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Dr. Jacobs Orthodontic Centre & Advanced Dental Care</title>
      </Helmet>
      <section className="pt-32 pb-20">
        <Container size="small">
          <SectionHeading title="Privacy Policy" />
          <div className="prose prose-gray max-w-none text-gray-600 space-y-6">
            <p>
              Dr. Jacobs Orthodontic Centre & Advanced Dental Care values your privacy. This policy explains how we use
              the personal information submitted on this website.
            </p>
            <h3 className="text-xl font-bold text-gray-900 mt-8">Information We Collect</h3>
            <p>
              We may collect your name, phone number, and preferred appointment date through our contact form.
            </p>
            <h3 className="text-xl font-bold text-gray-900 mt-8">How We Use Your Information</h3>
            <p>
              We use submitted details only to contact you regarding appointments, treatment queries, and clinic service
              communication.
            </p>
            <h3 className="text-xl font-bold text-gray-900 mt-8">Data Sharing</h3>
            <p>
              We do not sell your personal data. Information may be shared only with authorized clinic staff for
              appointment management and patient support.
            </p>
            <h3 className="text-xl font-bold text-gray-900 mt-8">Data Security</h3>
            <p>
              We use reasonable safeguards to protect submitted information from unauthorized access or misuse.
            </p>
            <h3 className="text-xl font-bold text-gray-900 mt-8">Contact</h3>
            <p>
              For privacy-related concerns, contact us at +91 8075059701.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default PrivacyPolicy;
