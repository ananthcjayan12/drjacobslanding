import { Helmet } from 'react-helmet-async';
import Container from '@components/common/Container';
import SectionHeading from '@components/common/SectionHeading';

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Smile Craft Dental Clinic</title>
      </Helmet>
      <section className="pt-32 pb-20">
        <Container size="small">
          <SectionHeading title="Terms of Service" />
          <div className="prose prose-gray max-w-none text-gray-600 space-y-6">
            <h3 className="text-xl font-bold text-gray-900">1. Acceptance of Terms</h3>
            <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
            <h3 className="text-xl font-bold text-gray-900 mt-8">2. Appointments</h3>
            <p>Scheduling an appointment through our website does not guarantee a specific time slot until confirmed by our clinic staff via phone or message.</p>
            <h3 className="text-xl font-bold text-gray-900 mt-8">3. Cancellations</h3>
            <p>Please notify us at least 24 hours in advance if you need to cancel or reschedule your appointment.</p>
            <h3 className="text-xl font-bold text-gray-900 mt-8">4. Privacy</h3>
            <p>Your use of the website is also governed by our Privacy Policy.</p>
            <h3 className="text-xl font-bold text-gray-900 mt-8">5. Modifications</h3>
            <p>Smile Craft Dental Clinic reserves the right to change these terms at any time without notice.</p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default TermsOfService;
