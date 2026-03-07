import { Helmet } from 'react-helmet-async';
import Container from '@components/common/Container';
import SectionHeading from '@components/common/SectionHeading';

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Dr. Jacobs Orthodontic Centre & Advanced Dental Care</title>
      </Helmet>
      <section className="pt-32 pb-20">
        <Container size="small">
          <SectionHeading title="Terms of Service" />
          <div className="prose prose-gray max-w-none text-gray-600 space-y-6">
            <h3 className="text-xl font-bold text-gray-900">1. Appointments</h3>
            <p>
              Appointment requests submitted through the website are subject to confirmation by our clinic team.
            </p>
            <h3 className="text-xl font-bold text-gray-900 mt-8">2. Patient Responsibility</h3>
            <p>
              Patients are requested to provide accurate contact information and relevant health details during booking and consultation.
            </p>
            <h3 className="text-xl font-bold text-gray-900 mt-8">3. Cancellations & Rescheduling</h3>
            <p>
              Kindly inform the clinic at least 24 hours in advance for cancellation or rescheduling, where possible.
            </p>
            <h3 className="text-xl font-bold text-gray-900 mt-8">4. Website Content</h3>
            <p>
              Content on this website is for general information and does not replace professional diagnosis or treatment advice.
            </p>
            <h3 className="text-xl font-bold text-gray-900 mt-8">5. Updates</h3>
            <p>
              We may revise these terms from time to time. Continued use of this website indicates acceptance of the updated terms.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default TermsOfService;
