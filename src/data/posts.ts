export type Post = { slug: string; title: string; tag: string; date: string; img: string; alt: string; excerpt: string; body: { h?: string; p?: string[]; ul?: string[] }[]; cta: [string, string] };
export const posts: Post[] = [
  {
    slug: 'early-signs-of-diabetes', title: 'Don’t Let Diabetes Sneak Up on You: Learn the Early Signs', tag: 'Diabetes', date: '2026-10-07', img: '/images/services/diabetes/hero.jpg', alt: 'A patient checking blood sugar with a care provider',
    excerpt: 'Know the early warning signs of diabetes and when to get screened.',
    body: [
      { p: ['Type 2 diabetes can develop gradually. Many people feel fine for years, so early signs are easy to miss. Early detection can help improve long-term health outcomes.'] },
      { h: 'Common early signs', ul: ['Feeling very thirsty or needing to urinate often', 'Feeling tired all the time', 'Blurry vision', 'Cuts or sores that heal slowly', 'Tingling or numb hands and feet', 'Weight loss you cannot explain'] },
      { h: 'Who should be screened?', p: ['Discuss diabetes screening with your healthcare provider based on your age, medical history, and individual risk factors. Risk factors can include having a parent or sibling with diabetes, being overweight, or not being very active. A simple blood test can show where you stand.'] },
      { h: 'What you can do now', ul: ['Move your body for 30 minutes most days', 'Choose water over sugary drinks', 'Eat more vegetables, beans and whole grains', 'Keep your yearly checkup'] },
      { p: ['If you already have diabetes, our team can help with education, monitoring and a plan that fits your life, in English or Spanish.'] },
    ], cta: ['Learn about diabetes care', '/services/diabetes/'],
  },
  {
    slug: 'bilingual-diabetes-doctor-porterville', title: 'Bilingual Diabetes Care in Porterville: Support in English and Spanish', tag: 'Diabetes', date: '2026-10-07', img: '/images/services/diabetes/a.jpg', alt: 'A provider explaining a diabetes plan to a patient',
    excerpt: 'Care for diabetes is easier when you can talk about it in the language you know best.',
    body: [
      { p: ['Living with diabetes means many choices every day: food, medicine, exercise and checkups. These talks are easier when your provider speaks your language.'] },
      { h: 'Why language matters', p: ['When you understand your plan, you can follow it. Our bilingual providers and staff explain tests, medicines and goals in English or Spanish, and they take time to answer your questions.'] },
      { h: 'What care can include', ul: ['Blood sugar checks and A1C tests', 'Medicine reviews', 'Food and activity coaching', 'Foot, eye and kidney checks', 'Help with supplies and referrals when needed'] },
      { h: 'Visit us in Porterville', p: ['Our Porterville clinic is on West Henderson Avenue. Call ahead to book a visit. We accept Medi-Cal, Medicare and many private plans, and offer a sliding fee program.'] },
    ], cta: ['See the Porterville clinic', '/locations/porterville-medical/'],
  },
  {
    slug: 'hand-cut-stitches-urgent-care-porterville', title: 'Cut on Your Hand? When You Need Stitches and Where to Go in Porterville', tag: 'Urgent Care', date: '2026-10-07', img: '/images/services/virtual-urgent-care/hero.jpg', alt: 'A nurse caring for a hand injury',
    excerpt: 'What to do right away after a cut, and how to know if it needs stitches.',
    body: [
      { p: ['Cuts happen in the kitchen, at work and in the yard. Most are small, but some need a provider.'] },
      { h: 'First steps', ul: ['Wash your hands, then press a clean cloth on the cut', 'Raise the hand above your heart', 'Rinse with clean water when bleeding slows', 'Cover with a clean bandage'] },
      { h: 'You may need stitches if', ul: ['The cut is deep or the edges gape open', 'Bleeding does not slow after 10 minutes of firm pressure', 'The cut is on a joint, palm or finger', 'The wound is deep and may need an in-person exam', 'Dirt or rust is in the wound'] },
      { h: 'Call 911 or go to the ER if', p: ['Bleeding is heavy and will not stop with direct pressure, you can see exposed muscle or bone, there is significant tissue damage, or you cannot move your fingers. Also go if a body part was cut off.'] },
      { p: ['Cuts requiring stitches must be evaluated in person. Contact our Porterville clinic to confirm whether wound care services are available. Certain wounds may also require assessment of your tetanus vaccination status. For life-threatening emergencies or severe uncontrolled bleeding, call 911.'] },
    ], cta: ['Find In-Person Care', '/locations/porterville-medical/'],
  },
  {
    slug: 'pediatric-wellness-checkup-woodlake', title: 'Affordable Pediatric Wellness Checkups in Woodlake', tag: 'Pediatrics', date: '2026-07-31', img: '/images/services/pediatric-care/hero.jpg', alt: 'A smiling child at a wellness checkup',
    excerpt: 'Regular checkups help children grow strong and stay on track.',
    body: [
      { p: ['A wellness checkup is a visit for a healthy child. It helps your provider track growth, learning and health, and catch small problems early.'] },
      { h: 'What happens at a checkup', ul: ['Height, weight and growth check', 'Vaccines, including school requirements', 'Vision, hearing and development check', 'Time to ask your questions about sleep, food and behavior'] },
      { h: 'Cost should not stop you', p: ['Living Water Clinic accepts participating insurance plans and offers a Sliding Fee Discount Program for eligible patients based on household size and income. Eligibility is not limited exclusively to uninsured patients. Contact our Woodlake clinic to confirm your coverage, eligibility, and appointment availability.'] },
      { h: 'Visit us in Woodlake', p: ['Our Woodlake clinic is on North Palm Street. Call to book a visit before the school year starts.'] },
    ], cta: ['See the Woodlake clinic', '/locations/woodlake/'],
  },
  {
    slug: 'child-ear-pain-lindsay', title: 'Child With Severe Ear Pain? What to Do and Where to Go in Lindsay', tag: 'Pediatrics', date: '2026-07-31', img: '/images/services/pediatric-care/a.jpg', alt: 'A provider checking a child’s ear',
    excerpt: 'Ear pain often starts suddenly. Here is how to help your child and when to call us.',
    body: [
      { p: ['Ear infections are common in children, and they can strike at night. Watching your child hurt is hard, but you can take a few simple steps.'] },
      { h: 'Signs of an ear infection', ul: ['Tugging or rubbing the ear', 'Crying more than usual or trouble sleeping', 'Fever', 'Fluid draining from the ear', 'Trouble hearing or responding'] },
      { h: 'What you can do at home', ul: ['Ask your provider about pain medicine that is right for your child’s age and weight', 'Place a warm cloth on the ear', 'Keep your child resting and drinking fluids'] },
      { h: 'See a provider soon if', p: ['Pain lasts more than a day, there is a fever, or fluid drains from the ear. Infants younger than three months with a temperature of 100.4°F (38°C) or higher need immediate medical evaluation. Seek emergency care if your child is unusually lethargic, difficult to wake, has trouble breathing, a stiff neck, or swelling behind the ear. Call 911 for life-threatening emergencies.'] },
      { p: ['Our Lindsay clinics are here to help. Call to ask about same-day availability.'] },
    ], cta: ['See the Lindsay clinic', '/locations/lindsay-medical/'],
  },
];
export const postBySlug = Object.fromEntries(posts.map((p) => [p.slug, p]));
export const fmt = (d: string) => new Date(d + 'T12:00:00').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

// Short page titles for search results (the on-page headline stays the long one).
export const seoTitle: Record<string, string> = {
  'early-signs-of-diabetes': 'Early Signs of Diabetes You Should Not Ignore',
  'bilingual-diabetes-doctor-porterville': 'Bilingual Diabetes Care in Porterville',
  'hand-cut-stitches-urgent-care-porterville': 'Hand Cut? When You Need Stitches in Porterville',
  'pediatric-wellness-checkup-woodlake': 'Pediatric Wellness Checkups in Woodlake',
  'child-ear-pain-lindsay': 'Child Ear Pain: What to Do and Where to Go',
};
