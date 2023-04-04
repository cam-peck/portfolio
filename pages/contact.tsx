import ContactForm from '@/components/carousel/contact-form';

export default function Contact() {
  return (
    <div>
      <main className="max-w-6xl mx-auto px-6 pt-4 mdlg:pt-8">
        <div className="mb-16 pb-2 border-b-2">
          <h1 data-testid="main-header" className="text-[48px] font-bold text-charcoal text-center mdlg:text-left">
            Contact Me
          </h1>
        </div>
        <ContactForm />
      </main>
    </div>
  );
}
