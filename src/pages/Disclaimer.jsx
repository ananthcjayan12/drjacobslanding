import { Helmet } from 'react-helmet-async';
import Container from '@components/common/Container';
import SectionHeading from '@components/common/SectionHeading';

const Disclaimer = () => {
  return (
    <>
      <Helmet>
        <title>Disclaimer | Smile Craft Dental Clinic</title>
      </Helmet>
      <section className="pt-32 pb-20">
        <Container size="small">
          <SectionHeading title="Disclaimer" />
          <div className="prose prose-gray max-w-none text-gray-600 space-y-6">
            <p className="text-lg font-medium text-gray-900 leading-relaxed italic">
              "Results may vary from person to person. Consult our doctors for a personalized plan."
            </p>
            <p>
              The information provided on this website is for general informational purposes only. All information on the site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
            </p>
            <p>
              Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
            </p>
            <p>
              The site cannot and does not contain medical/health advice. The medical/health information is provided for general informational and educational purposes only and is not a substitute for professional advice.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Disclaimer;
