export const legalContact = {
  name: 'Living Water Clinic · Clínica Agua Viva',
  email: 'livingwaterclinic@livingwaterclinic.com',
  phone: '(559) 562-1361',
  address: '833 North Sequoia Avenue, Lindsay, CA 93247',
  updated: 'October 12, 2026',
};
type Sec = { h: string; p?: string[]; ul?: string[] };
export type Legal = { slug: string; title: string; short: string; desc: string; intro: string; sections: Sec[] };
const c = legalContact;
const ask = (what: string): Sec => ({ h: 'Contact us', p: [`${what} Contact ${c.name} at ${c.phone}, by email at ${c.email}, or by mail at ${c.address}.`] });

export const legal: Legal[] = [
  {
    slug: 'privacy-policy', title: 'Privacy Policy', short: 'How we collect and use website information.', desc: 'How Living Water Clinic collects, uses and protects information from visitors to this website.',
    intro: 'We care about your privacy. This policy explains what information we collect on this website, how we use it, and the choices you have. It covers our website only. Your medical records are protected under our Notice of Privacy Practices.',
    sections: [
      { h: 'Information we collect', p: ['Information you give us, such as your name, phone number, email address and message when you use our contact form or request an appointment.', 'Information collected automatically, such as your IP address, browser type, device, pages visited and the time of your visit.'], ul: [] },
      { h: 'Please do not send health details through the website', p: ['Our website forms are not a secure way to share medical information. Do not include diagnoses, test results or other private health details. Call your clinic for care questions.'] },
      { h: 'How we use information', ul: ['To answer your questions and set up appointments', 'To run, protect and improve this website', 'To meet legal duties', 'To send reminders or updates you asked for'] },
      { h: 'Sharing information', p: ['We do not sell your personal information. We share it only with trusted service providers who help us run the website, and only as needed. We may also share it when the law requires.'] },
      { h: 'Cookies', p: ['We use cookies and similar tools. See our Cookie Policy for details and your choices.'] },
      { h: 'Third-party links and maps', p: ['Our site links to other websites and shows maps from Google. Those sites have their own privacy rules. We are not responsible for them.'] },
      { h: 'Security', p: ['We use reasonable steps to protect your information. No method of sending data over the internet is fully secure.'] },
      { h: 'Your California privacy rights', p: ['If you live in California, you may ask what personal information we hold about you, ask us to correct or delete it, and ask us not to sell or share it. We do not sell personal information. Health information covered by HIPAA follows separate rules, described in our Notice of Privacy Practices.'] },
      { h: 'Children', p: ['This website is for adults. We do not knowingly collect information from children under 13 through the website.'] },
      { h: 'Changes to this policy', p: ['We may update this policy. The date at the top shows the latest version.'] },
      ask('Questions or requests about privacy?'),
    ],
  },
  {
    slug: 'notice-of-privacy-practices', title: 'Notice of Privacy Practices', short: 'How your health information may be used and your rights (HIPAA).', desc: 'HIPAA Notice of Privacy Practices for Living Water Clinic and Clínica Agua Viva: how your health information is used and your rights.',
    intro: 'This notice describes how medical information about you may be used and shared, and how you can get access to it. Please read it carefully.',
    sections: [
      { h: 'Our duties', p: ['We are required by law to keep your health information private, to give you this notice, and to follow the notice that is in effect. We will tell you if there is a breach that may have exposed your information.'] },
      { h: 'How we may use and share your information', ul: ['Treatment: to give you care and coordinate it with other providers', 'Payment: to bill you or your insurance plan', 'Health care operations: to run our clinics, check quality and train staff', 'As required by law, for public health, abuse reporting, health oversight, court orders and similar legal needs', 'To reduce a serious threat to health or safety'] },
      { h: 'Uses that need your written permission', p: ['We need your written permission for most uses of psychotherapy notes, for marketing, and for the sale of health information. You may cancel your permission in writing at any time.'] },
      { h: 'Your rights', ul: ['See and get a copy of your records', 'Ask us to correct information you believe is wrong', 'Ask for private communication, for example at a different phone or address', 'Ask us to limit certain uses or sharing', 'Get a list of certain times we shared your information', 'Get a paper copy of this notice', 'Choose someone to act for you'] },
      { h: 'Complaints', p: ['If you think your privacy rights were violated, you can file a complaint with us or with the U.S. Department of Health and Human Services Office for Civil Rights. We will not punish you for filing a complaint.'] },
      { h: 'Changes to this notice', p: ['We may change this notice. The new notice will apply to all information we hold. We will post it in our clinics and on this website.'] },
      ask('To use your rights or ask a question, speak with our Privacy Officer.'),
    ],
  },
  {
    slug: 'cookie-policy', title: 'Cookie Policy', short: 'What cookies we use and how to control them.', desc: 'How Living Water Clinic uses cookies and similar tools, and how you can change your choices.',
    intro: 'Cookies are small text files that a website stores on your device. This page explains the cookies and similar tools we use and how you can control them.',
    sections: [
      { h: 'Cookies we use', ul: ['Strictly necessary: needed to run the site and to remember your cookie choice. These are always on.', 'Preferences: remember choices such as your language (English or Spanish).', 'Third-party content: maps and fonts from Google may set their own cookies or collect your IP address when they load.'] },
      { h: 'Your choices', p: ['When you first visit, you can accept all cookies or keep only the necessary ones. You can change your choice any time using “Cookie settings” in the footer of every page. You can also block or delete cookies in your browser settings. Some parts of the site may not work well without them.'] },
      { h: 'How long we keep them', p: ['Your cookie choice and language setting are kept on your device until you clear your browser data.'] },
      { h: 'Changes', p: ['If we add new tools, such as site analytics, we will update this page and ask for your choice again.'] },
      ask('Questions about cookies?'),
    ],
  },
  {
    slug: 'accessibility', title: 'Accessibility Statement', short: 'Our promise to make this site usable for everyone.', desc: 'Living Water Clinic is committed to making its website accessible to people with disabilities. Learn about our goals and how to get help.',
    intro: 'Living Water Clinic is committed to making this website easy to use for everyone, including people with disabilities. We want every patient to find care information without barriers.',
    sections: [
      { h: 'Our goal', p: ['We work to follow the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA. We test and improve the site as we update it.'] },
      { h: 'What we do', ul: ['Use clear headings, links and labels', 'Support keyboard use and a “Skip to content” link', 'Provide text descriptions for images', 'Keep strong color contrast and readable text sizes', 'Offer the site in English and Spanish', 'Respect your device setting to reduce motion'] },
      { h: 'Known limits', p: ['Some content from other companies, such as embedded maps, may not be fully accessible. Some older documents may also be harder to use. We are working to fix these.'] },
      { h: 'Need help?', p: ['If you have trouble using any part of this site, or you need information in another format, please tell us. We will help you by phone or find another way to give you the information. Please say which page you were on and what problem you had.'] },
      ask('Send us your accessibility feedback.'),
    ],
  },
  {
    slug: 'terms-of-use', title: 'Terms of Use', short: 'Rules for using this website.', desc: 'Terms and conditions for using the Living Water Clinic website.',
    intro: 'By using this website, you agree to these terms. If you do not agree, please do not use the site.',
    sections: [
      { h: 'General information only', p: ['This site gives general information. It does not give medical advice, diagnosis or treatment, and it does not create a patient-provider relationship. See our Medical Disclaimer.'] },
      { h: 'Acceptable use', p: ['You agree not to use the site for anything unlawful, to harm or overload the site, or to try to reach information you are not meant to see.'] },
      { h: 'Content you submit', p: ['If you send us a message, review or feedback, please do not include private or confidential information such as health details, phone numbers or addresses. Do not post vulgar, hateful, threatening, false or illegal content, or advertising.'] },
      { h: 'Links to other sites', p: ['This site links to other websites that we do not control. A link does not mean we endorse the site. We are not responsible for their content.'] },
      { h: 'Our content', p: ['The text, images and logos on this site belong to Living Water Clinic or its licensors. You may view and print pages for personal use. Other use needs our written permission.'] },
      { h: 'No warranty and limits of liability', p: ['The site is provided “as is.” To the fullest extent the law allows, we are not liable for losses from using the site.'] },
      { h: 'Changes', p: ['We may change these terms, and the site, at any time. The date at the top shows the latest version.'] },
      { h: 'Governing law', p: ['These terms follow the laws of the State of California.'] },
      ask('Questions about these terms?'),
    ],
  },
  {
    slug: 'nondiscrimination', title: 'Nondiscrimination and Language Access', short: 'Equal care for everyone, with free language help.', desc: 'Living Water Clinic does not discriminate. Free language assistance and aids for people with disabilities are available.',
    intro: 'Living Water Clinic and Clínica Agua Viva follow federal and California civil rights laws. We do not discriminate, exclude or treat people differently because of race, color, national origin, age, disability, sex, sexual orientation, gender identity or religion.',
    sections: [
      { h: 'Free help for you', ul: ['Free interpreters and written information in other languages', 'Free aids and services for people with disabilities, such as sign language interpreters and written information in other formats', 'Our staff and providers speak English and Spanish'] },
      { h: 'How to ask for help', p: [`Tell any staff member or call ${c.phone}. If you are deaf or hard of hearing, you can use the California Relay Service by dialing 711.`] },
      { h: 'Ayuda en español', p: ['Si habla español, hay servicios gratuitos de asistencia con el idioma disponibles para usted. Llame al ' + c.phone + '.'] },
      { h: 'If you feel you were treated unfairly', p: ['You can file a grievance with us. You may also file a civil rights complaint with the U.S. Department of Health and Human Services Office for Civil Rights, or with the California Department of Health Care Services. We will not retaliate against you for filing.'] },
      ask('To file a grievance or get help.'),
    ],
  },
  {
    slug: 'medical-disclaimer', title: 'Medical Disclaimer', short: 'Website content is not medical advice.', desc: 'Information on the Living Water Clinic website is general and is not medical advice. In an emergency, call 911.',
    intro: 'The information on this website is for general education only. It does not replace advice from your own doctor or care team.',
    sections: [
      { h: 'Not medical advice', p: ['Do not use this site to diagnose or treat a health problem. Always ask a qualified provider about your health and before you start or stop any treatment.'] },
      { h: 'In an emergency', p: ['If you think you have a medical emergency, call 911 or go to the nearest emergency room right away. Do not wait for a reply from this website, a form or an email.'] },
      { h: 'No patient relationship', p: ['Using this website, sending a message or reading our blog does not make you a patient of Living Water Clinic.'] },
      { h: 'Accuracy', p: ['We try to keep the information correct and up to date, but we cannot promise that it is complete. Services and hours can differ by clinic. Please call your clinic to confirm.'] },
      ask('Have a question about your care?'),
    ],
  },
];
export const legalBySlug = Object.fromEntries(legal.map((x) => [x.slug, x]));
