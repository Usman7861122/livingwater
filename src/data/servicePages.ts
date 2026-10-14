import { locations, type Location } from './site';
import { fm } from './familyMedicine';

export type P = [string, string];
export type Svc = {
  slug: string; title: string; short: string; summary: string;
  heroAlt: string; labels: [string, string, string]; alts: [string, string, string];
  intro: [string, string]; help: P[]; when: P[]; steps: [P, P]; faq: P[]; related: string[];
  images: { hero: string; trio: [string, string, string] };
};
const img = (slug: string) => ({ hero: `/images/services/${slug}/hero.jpg`, trio: [`/images/services/${slug}/a.jpg`, `/images/services/${slug}/b.jpg`, `/images/services/${slug}/c.jpg`] as [string, string, string] });

const family: Svc = {
  slug: 'family-medicine', title: fm.title, short: 'family medicine', summary: fm.summary,
  heroAlt: 'Family doctor talking with a mother and her young daughter',
  labels: ['Babies & children', 'Teens & parents', 'Adults & seniors'],
  alts: ['Pediatrician checking a baby', 'Doctor talking with a mother and her teenage son', 'Doctor talking with a senior woman'],
  intro: fm.intro as [string, string], help: fm.help as P[], when: fm.when as P[], steps: fm.steps as [P, P], faq: fm.faq as P[],
  related: ['pediatric-care', 'diabetes', 'asthma', 'annual-wellness-visit', 'remote-patient-monitoring', 'virtual-urgent-care'],
  images: { hero: fm.images.hero, trio: [fm.images.child, fm.images.teen, fm.images.senior] },
};

const ins = 'We accept many plans, including Medi-Cal and Medicare. See the list on our home page, or call our {city} clinic to check.';
const lang = ['Do you offer care in Spanish?', 'Yes. Our {city} team speaks English and Spanish, and the whole website has a Spanish version.'] as P;

const others: Svc[] = [
  {
    slug: 'pediatric-care', title: 'Pediatric Care', short: 'pediatric care',
    summary: 'Gentle, caring health care for babies, children and teens, from first checkups to school-age shots and sick visits.',
    heroAlt: 'Pediatrician examining a child while a parent watches', labels: ['Newborns & babies', 'Kids & school age', 'Teens'],
    alts: ['Pediatrician checking a baby', 'Doctor talking with a child and parent', 'Doctor talking with a teenager'],
    intro: ['Pediatric care in {city} starts with a simple promise: your child is safe, heard and treated with kindness. Our providers know how to put little ones at ease and how to talk with teens in a way that respects them.', 'At our {clinic} location, we follow your child\'s growth from the first week of life through the teen years, and we keep you in the loop at every step.'],
    help: [['Well-child checkups', 'Regular visits to track growth, development, vision, hearing and healthy habits.'], ['Vaccines', 'Shots on schedule, plus school and daycare forms for {city} families.'], ['Sick and injury visits', 'Fever, ear infections, coughs, stomach bugs, rashes and minor injuries.'], ['School and sports physicals', 'Quick, thorough exams so your child is ready for class and play.']],
    when: [['Your baby is new to the family', 'Early checkups catch small problems and answer new-parent questions.'], ['Shots are due', 'Staying on schedule protects your child and classmates.'], ['Your child is sick', 'Fever, trouble breathing or a cough that will not go away should be checked.'], ['You have worries about growth or learning', 'Talk to us early. Many concerns are easy to support when found young.']],
    steps: [['Step 1 · Meet your provider', 'At {clinic}, we review your child\'s history, growth and shots. We answer your questions and do a gentle exam, always at your child\'s pace.'], ['Step 2 · A plan for growing up', 'We set up regular visits, update shots and share simple tips for sleep, food and screen time that fit your family.']],
    faq: [['At what age can my child be seen in {city}?', 'Our {city} team sees patients from newborns through the teen years. Call us to set up your baby\'s first visit.'], ['Do you give school shots?', 'Yes. We keep vaccines up to date and complete school and daycare forms.'], ['Can parents stay with their child?', 'Of course. Parents are welcome at every visit.'], ['Do you take my insurance?', ins]],
    related: ['family-medicine', 'annual-wellness-visit', 'asthma', 'virtual-urgent-care', 'diabetes', 'optometry'],
  },
  {
    slug: 'annual-wellness-visit', title: 'Annual Wellness Visit', short: 'annual wellness visits',
    summary: 'A yearly checkup that looks at your whole health, so small problems are found early and you stay on track.',
    heroAlt: 'Doctor checking a patient\'s blood pressure during a yearly checkup', labels: ['Check your numbers', 'Talk about your goals', 'Plan the year ahead'],
    alts: ['Doctor checking blood pressure', 'Doctor talking with a patient about health goals', 'Doctor reviewing a health plan with a patient'],
    intro: ['An annual wellness visit in {city} is a yearly time to look at your whole health, not just one problem. We check your numbers, review your medicines and talk about what matters to you.', 'At our {clinic} location, the visit is relaxed and clear. You leave knowing where you stand and what to do next. Many insurance plans, including Medicare, cover a yearly wellness visit.'],
    help: [['Health review', 'We go over your history, family risks, medicines and daily habits.'], ['Simple checks', 'Blood pressure, weight, vision and hearing, plus labs when needed.'], ['Screenings and vaccines', 'Age-based screenings and shots to keep you protected.'], ['A personal prevention plan', 'Clear next steps for food, movement, sleep and mental well-being.']],
    when: [['It has been a year or more', 'A yearly visit keeps your records and plan up to date.'], ['You are new to Medicare', 'We help {city} seniors use their wellness benefits.'], ['You feel fine but want peace of mind', 'Many health problems have no early signs.'], ['Your medicines have changed', 'We review everything you take so it all works safely together.']],
    steps: [['Step 1 · Before your visit', 'Bring your insurance card, a list of medicines and any questions. For {clinic}, call ahead to ask about labs or fasting.'], ['Step 2 · During and after', 'We check, talk and plan together. You get a simple written plan, and we schedule any follow-up screenings or visits.']],
    faq: [['Is the wellness visit the same as a sick visit?', 'No. It focuses on prevention and planning. If a new problem comes up, we can also look at it.'], ['How long does the visit take?', 'Most visits take about 30 to 45 minutes at our {city} clinic.'], ['Do I need to fast?', 'Only if we order certain blood tests. Our team will tell you when you book.'], ['Do you take my insurance?', ins]],
    related: ['family-medicine', 'diabetes', 'weight-loss-management', 'remote-patient-monitoring', 'optometry', 'foot-care'],
  },
  {
    slug: 'virtual-urgent-care', title: 'Virtual Urgent Care', short: 'virtual urgent care',
    summary: 'See a provider by video from home when you cannot wait for an office visit. Fast, simple help for common health problems.',
    heroAlt: 'Patient on a video visit with a doctor using a laptop', labels: ['Join from home', 'Talk face to face', 'Get a clear plan'],
    alts: ['Patient on a video call with a doctor', 'Doctor talking by video with a patient', 'Person using a phone for a telehealth visit'],
    intro: ['Virtual urgent care lets {city} patients talk to a Living Water provider by video, without driving to the clinic. It is a simple way to get help for common problems the same day.', 'Your {clinic} care team can see your record, send prescriptions to a pharmacy near you, and book an in-person visit if you need a closer look.'],
    help: [['Colds, flu and coughs', 'Quick answers for common sickness, including when to rest and when to be seen.'], ['Rashes, pink eye and minor infections', 'Many can be reviewed well by video.'], ['Medicine questions', 'Refills, side effects and simple changes to your plan.'], ['Follow-up visits', 'Check in after a visit without a trip to the clinic.']],
    when: [['You cannot get to the clinic', 'Work, travel, kids or low energy should not stop you from getting care.'], ['The problem is not an emergency', 'Virtual visits are best for common, non-life-threatening problems.'], ['You want a fast answer', 'Skip the waiting room and talk to a provider from your own home.'], ['You need a quick follow-up', 'Share how you feel and update your plan by video.']],
    steps: [['Step 1 · Get connected', 'Call {clinic} or request a visit. We send a simple link. Use a phone, tablet or computer with a camera, in a quiet place.'], ['Step 2 · Meet your provider', 'Describe how you feel, show the problem if needed, and get a plan. If you need an exam in person, we help you book one.']],
    faq: [['Is virtual care safe?', 'It is a safe choice for common, mild problems. If we feel you need an in-person exam, we will tell you.'], ['What do I need for a video visit?', 'A phone, tablet or computer with a camera and a steady internet connection.'], ['What if it is an emergency?', 'Call 911 right away. Virtual care is not for emergencies such as chest pain or trouble breathing.'], ['Do you take my insurance?', ins]],
    related: ['family-medicine', 'pediatric-care', 'remote-patient-monitoring', 'annual-wellness-visit', 'asthma', 'diabetes'],
  },
  {
    slug: 'diabetes', title: 'Diabetes', short: 'diabetes care',
    summary: 'Caring, practical support to manage diabetes, lower your risks and feel strong, with a team that knows your family.',
    heroAlt: 'Patient checking blood sugar with a glucose meter', labels: ['Know your numbers', 'Eat well', 'Live well'],
    alts: ['Person checking blood glucose', 'Doctor talking with a patient about healthy food', 'Smiling patient with a doctor after a diabetes visit'],
    intro: ['Diabetes care in {city} is about steady, simple steps. We help you understand your blood sugar, choose foods you enjoy and use medicines safely, without judgment.', 'At our {clinic} location, your team checks your whole health, including heart, eyes, feet and kidneys, because diabetes can affect all of them. We are here for the long run.'],
    help: [['Blood sugar and A1C checks', 'Regular testing and a clear target that fits you.'], ['Medicines and insulin', 'Safe, easy-to-follow plans and help with supplies.'], ['Food and activity coaching', 'Practical ideas for {city} families, using foods you already love.'], ['Complication checks', 'Eye, foot and kidney checks, with referrals to our specialists when needed.']],
    when: [['You were told you have prediabetes', 'Early changes can lower your risk a lot.'], ['You are always thirsty or tired', 'Strong thirst, frequent urination and tiredness should be checked.'], ['Your sugar numbers are hard to control', 'We can adjust your plan and support you.'], ['It has been a while since your last check', 'Regular visits help prevent serious problems.']],
    steps: [['Step 1 · Check and understand', 'At {clinic}, we review your tests, medicines and daily life. We set simple goals together.'], ['Step 2 · Steady support', 'We follow your numbers, adjust your plan and connect you with eye, foot and kidney care when it helps.']],
    faq: [['Can diabetes be controlled?', 'Yes. Many people live well with diabetes with the right plan, medicines and support.'], ['Do you help with prediabetes?', 'Yes. Our {city} team helps lower the risk of type 2 diabetes with simple lifestyle steps.'], ['Do you offer care for eyes and feet too?', 'Yes. We offer optometry and foot care within Living Water Clinic.'], ['Do you take my insurance?', ins]],
    related: ['family-medicine', 'weight-loss-management', 'foot-care', 'optometry', 'nephrology', 'remote-patient-monitoring'],
  },
  {
    slug: 'asthma', title: 'Asthma', short: 'asthma care',
    summary: 'Clear action plans and steady support so you and your family can breathe easier every day.',
    heroAlt: 'Child using an inhaler with a parent', labels: ['Breathe easier', 'Check your lungs', 'Know your plan'],
    alts: ['Child using an asthma inhaler', 'Doctor listening to a patient\'s lungs', 'Doctor explaining an asthma plan to a patient'],
    intro: ['Asthma care in {city} helps you and your child stay ahead of symptoms. We find your triggers, choose the right medicines and teach you what to do if your breathing gets hard.', 'At our {clinic} location, every patient receives a written asthma action plan in plain words, so you always know the next step.'],
    help: [['Breathing tests and exams', 'We check how well your lungs work and look for signs of asthma.'], ['Inhalers and medicines', 'The right medicine, and teaching so you use your inhaler well.'], ['Trigger planning', 'Dust, smoke, pollen and weather can all play a part. We help {city} families plan around them.'], ['An asthma action plan', 'A simple green, yellow and red guide for good days and hard days.']],
    when: [['You cough or wheeze at night', 'Night symptoms can mean asthma is not well controlled.'], ['You use your rescue inhaler often', 'That is a sign your daily plan may need to change.'], ['Your child gets short of breath at play', 'We can help them stay active with a clear plan.'], ['You had an asthma scare', 'A follow-up visit can help prevent the next one.']],
    steps: [['Step 1 · Find your triggers', 'At {clinic}, we talk about symptoms, home and work, and we check your breathing.'], ['Step 2 · Build your plan', 'We prescribe medicines, show you how to use them and write your action plan. We schedule follow-ups to keep it working.']],
    faq: [['Can children have asthma?', 'Yes. Asthma is common in children, and our pediatric team can help.'], ['Will my child outgrow asthma?', 'Some children improve with age, but all should have a plan and regular checks.'], ['When should I go to the emergency room?', 'If you struggle to breathe, your rescue inhaler does not help, or lips turn blue, call 911.'], ['Do you take my insurance?', ins]],
    related: ['pediatric-care', 'family-medicine', 'virtual-urgent-care', 'annual-wellness-visit', 'remote-patient-monitoring', 'diabetes'],
  },
  {
    slug: 'weight-loss-management', title: 'Weight Loss Management', short: 'weight loss management',
    summary: 'Kind, realistic support for healthy weight loss, built around your life, your food and your goals.',
    heroAlt: 'Woman preparing a healthy meal with fruit and vegetables', labels: ['Eat well', 'Move more', 'Stay motivated'],
    alts: ['Fresh fruit and vegetables', 'Person walking outdoors for exercise', 'Doctor encouraging a patient'],
    intro: ['Weight loss management in {city} is not about quick fixes. It is about steady changes you can keep, with a team that listens and does not judge.', 'At our {clinic} location, we look at the full picture: food, sleep, stress, medicines and health conditions. Then we build a plan that fits your family and your budget.'],
    help: [['Health and weight review', 'We check your health, labs and goals before we make a plan.'], ['Food and activity plans', 'Practical meals and movement that work for busy {city} families.'], ['Medical support', 'When it is right for you, we talk about medicine options safely.'], ['Regular check-ins', 'Short follow-ups that keep you motivated and on track.']],
    when: [['Your weight affects your health', 'It can raise the risk of diabetes, blood pressure and joint pain.'], ['Diets have not worked before', 'A medical plan can make a real difference.'], ['You want to feel more energy', 'Small steps can improve sleep, mood and strength.'], ['You want support, not pressure', 'We celebrate every win.']],
    steps: [['Step 1 · Start with your story', 'At {clinic}, we talk about what you have tried, what you enjoy and what is hard. We check your health and labs.'], ['Step 2 · Build and adjust', 'We set small, clear goals and review them often. Your plan changes as you do.']],
    faq: [['Do I need a lot of weight to lose?', 'No. Any amount of healthy weight loss can help your health, and we start where you are.'], ['Will I have to follow a strict diet?', 'No. We focus on balanced eating you can keep long term.'], ['Is this only for adults?', 'Our team can also guide families, and pediatric providers help with children\'s healthy growth.'], ['Do you take my insurance?', ins]],
    related: ['diabetes', 'family-medicine', 'annual-wellness-visit', 'remote-patient-monitoring', 'chiropractic-care', 'foot-care'],
  },
  {
    slug: 'remote-patient-monitoring', title: 'Remote Patient Monitoring', short: 'remote patient monitoring',
    summary: 'Simple devices at home send your health numbers to your care team, so help arrives sooner and you need fewer trips.',
    heroAlt: 'Senior checking blood pressure at home with a monitor', labels: ['Check at home', 'Stay connected', 'Feel supported'],
    alts: ['Senior using a blood pressure monitor', 'Person using a smartwatch to track health', 'Doctor reviewing health numbers with a patient'],
    intro: ['Remote patient monitoring in {city} lets your Living Water care team keep an eye on key numbers from your home, such as blood pressure, blood sugar or weight.', 'At our {clinic} location, your team reviews the readings and calls you if something looks off. You get peace of mind and fewer trips to the clinic.'],
    help: [['Blood pressure monitoring', 'A simple cuff at home to track your numbers over time.'], ['Blood sugar monitoring', 'Share readings so your plan can be adjusted early.'], ['Weight and heart checks', 'Helpful for heart and lung conditions.'], ['Care team follow-up', 'Our {city} team reviews your readings and reaches out when needed.']],
    when: [['You have a long-term condition', 'Regular readings help your team catch changes quickly.'], ['Getting to the clinic is hard', 'Stay in touch from home.'], ['You were recently in the hospital', 'Closer follow-up can help you stay well.'], ['You want more peace of mind', 'Know that someone is watching your numbers.']],
    steps: [['Step 1 · Get set up', 'At {clinic}, we choose the right device, show you how to use it and connect it to your care team.'], ['Step 2 · Check and connect', 'You take simple readings at home. Our team reviews them, calls if needed and updates your plan.']],
    faq: [['Is it hard to use?', 'No. Devices are easy to use, and our team will show you step by step.'], ['Who sees my readings?', 'Your Living Water care team reviews them to support your care.'], ['Does it replace office visits?', 'No. It adds support between visits and helps you get care sooner.'], ['Do you take my insurance?', ins]],
    related: ['diabetes', 'asthma', 'family-medicine', 'virtual-urgent-care', 'annual-wellness-visit', 'nephrology'],
  },
  {
    slug: 'chiropractic-care', title: 'Chiropractic Care', short: 'chiropractic care',
    summary: 'Gentle, hands-on care for back, neck and joint pain, so you can move comfortably and get back to your day.',
    heroAlt: 'Chiropractor treating a patient\'s back', labels: ['Back & neck', 'Joints & muscles', 'Stay active'],
    alts: ['Chiropractor adjusting a patient\'s back', 'Therapist treating a patient\'s shoulder', 'Person stretching outdoors'],
    intro: ['Chiropractic care in {city} focuses on the spine, joints and muscles. Our chiropractors use gentle, hands-on methods to ease pain and help your body move the way it should.', 'At our {clinic} location, care is part of your whole-health plan, so your chiropractor can work together with your primary care provider.'],
    help: [['Back and neck pain', 'Relief for stiffness, aches and pain from work, sleep or injury.'], ['Joint and muscle care', 'Help for shoulders, hips and other sore joints.'], ['Headaches from neck tension', 'Care for headaches linked to the neck and posture.'], ['Movement and posture tips', 'Simple exercises you can do at home or at work in {city}.']],
    when: [['Your back hurts when you sit or lift', 'Gentle care can ease pain and protect your back.'], ['You have a stiff neck', 'Long hours at a desk or screen often cause it.'], ['An injury will not heal', 'Hands-on care may support your recovery.'], ['You want to stay active', 'Good movement helps prevent future problems.']],
    steps: [['Step 1 · Exam and history', 'At {clinic}, we ask about your pain, check how you move and decide if chiropractic care is right for you.'], ['Step 2 · Treatment and home plan', 'We start gentle care, share simple exercises and review your progress at each visit.']],
    faq: [['Does chiropractic care hurt?', 'Most patients feel relief. Care is gentle, and you can tell us if anything feels uncomfortable.'], ['How many visits will I need?', 'It depends on your problem. We will give you a plan after your first exam.'], ['Do I need a referral?', 'Often you do not. Call our {city} clinic and we will guide you.'], ['Do you take my insurance?', ins]],
    related: ['foot-care', 'family-medicine', 'weight-loss-management', 'annual-wellness-visit', 'diabetes', 'virtual-urgent-care'],
  },
  {
    slug: 'optometry', title: 'Optometry', short: 'optometry and eye care',
    summary: 'Eye exams, glasses and eye health care for the whole family, so everyone can see clearly and comfortably.',
    heroAlt: 'Optometrist performing an eye exam on a patient', labels: ['Eye exams', 'Glasses & contacts', 'Eye health'],
    alts: ['Optometrist checking a patient\'s eyes', 'Patient choosing new glasses', 'Eye doctor with a patient'],
    intro: ['Optometry in {city} means complete eye care for adults and children. We check how well you see, look for eye disease and help you find glasses or contacts that fit your life.', 'At our {clinic} location, eye care is part of your whole-health team. This matters most if you have diabetes or high blood pressure, which can affect your eyes.'],
    help: [['Complete eye exams', 'Vision tests, eye pressure and a look at the health of your eyes.'], ['Glasses and contacts', 'Prescriptions and fittings for clear, comfortable sight.'], ['Eye problems and infections', 'Red eyes, dryness, irritation and more.'], ['Diabetic eye checks', 'Regular exams to protect your sight if you have diabetes.']],
    when: [['Your vision is blurry', 'New blur, headaches or eye strain can mean you need glasses.'], ['It has been over a year or two', 'Regular exams keep your prescription and eye health current.'], ['You have diabetes or high blood pressure', 'Yearly eye checks are important.'], ['Your child squints or sits close to the screen', 'Early checks help {city} children do well in school.']],
    steps: [['Step 1 · Your eye exam', 'At {clinic}, we test your sight, check your eye health and talk about any problems you notice.'], ['Step 2 · Your solution', 'We prescribe glasses or contacts if needed, treat eye problems or refer you to a specialist.']],
    faq: [['How often should I have an eye exam?', 'Most adults need one every one to two years. We will tell you what is right for you.'], ['Do you see children?', 'Yes. Our {city} team provides eye exams for children and adults.'], ['Can I get glasses here?', 'Please call the clinic to ask about frames and lenses available at your location.'], ['Do you take my insurance?', ins]],
    related: ['diabetes', 'pediatric-care', 'family-medicine', 'annual-wellness-visit', 'nephrology', 'remote-patient-monitoring'],
  },
  {
    slug: 'foot-care', title: 'Foot Care', short: 'foot care',
    summary: 'Caring treatment for foot and ankle pain, nails, skin and diabetic foot health, so you can keep walking comfortably.',
    heroAlt: 'Podiatrist examining a patient\'s foot', labels: ['Foot & ankle pain', 'Diabetic foot care', 'Keep walking'],
    alts: ['Podiatrist checking a foot', 'Doctor examining a patient\'s ankle', 'Person walking comfortably outdoors'],
    intro: ['Foot care in {city} helps you stay on your feet. Our providers treat foot and ankle pain, skin and nail problems and help protect your feet if you have diabetes.', 'At our {clinic} location, foot care is part of your whole-health plan. Your feet tell us a lot about your circulation, nerves and overall health.'],
    help: [['Heel, arch and ankle pain', 'Relief for common aches from work, sport or worn shoes.'], ['Diabetic foot checks', 'Regular exams to find sores or nerve changes early.'], ['Nails and skin', 'Care for ingrown nails, thick nails, calluses and fungus.'], ['Shoes and support', 'Advice for shoes and inserts that fit your feet.']],
    when: [['Your heel hurts when you stand up', 'Morning heel pain is common and treatable.'], ['You have diabetes', 'A yearly foot exam is important, and sooner if you see a sore.'], ['A nail or sore is not healing', 'Do not wait. Small problems can become big ones.'], ['You are on your feet all day', 'Good foot care helps {city} workers stay comfortable.']],
    steps: [['Step 1 · Exam', 'At {clinic}, we ask about your pain and daily life and examine your feet, skin and how you walk.'], ['Step 2 · Treatment', 'We treat the cause with simple steps such as stretches, supports or nail and skin care. We refer you when you need more.']],
    faq: [['Do I need surgery for foot pain?', 'Most foot problems improve with simple, non-surgical care.'], ['Why do people with diabetes need foot exams?', 'Diabetes can reduce feeling and blood flow, so small injuries may go unnoticed.'], ['Can you treat ingrown toenails?', 'Yes. Call our {city} clinic if your toe is red, sore or swollen.'], ['Do you take my insurance?', ins]],
    related: ['diabetes', 'chiropractic-care', 'family-medicine', 'weight-loss-management', 'annual-wellness-visit', 'remote-patient-monitoring'],
  },
  {
    slug: 'nephrology', title: 'Nephrology', short: 'nephrology and kidney care',
    summary: 'Expert, caring kidney care to protect your health, slow kidney disease and keep you informed at every step.',
    heroAlt: 'Doctor explaining kidney health to a patient', labels: ['Understand your kidneys', 'Protect your health', 'Plan with your team'],
    alts: ['Doctor talking with a patient about kidney health', 'Patient and doctor reviewing results', 'Doctor and patient discussing a care plan'],
    intro: ['Nephrology in {city} means care for your kidneys. They clean your blood and control blood pressure, so keeping them healthy is key. Our team looks for kidney problems early and helps protect the kidney function you have.', 'At our {clinic} location, kidney care works hand in hand with your primary care provider. Diabetes and high blood pressure are common causes of kidney disease, so we treat them together.'],
    help: [['Kidney tests and screening', 'Simple blood and urine tests that show how well your kidneys work.'], ['Chronic kidney disease care', 'Plans to slow damage and protect your health.'], ['Blood pressure and diabetes control', 'The two biggest ways to protect your kidneys.'], ['Medicine and diet guidance', 'Safe medicines and food choices that support your kidneys in {city}.']],
    when: [['You have diabetes or high blood pressure', 'Regular kidney checks are important.'], ['Your test results show a change', 'Early care can slow kidney disease.'], ['You notice swelling or foamy urine', 'These can be signs of a kidney problem.'], ['Kidney disease runs in your family', 'Screening helps find problems before symptoms appear.']],
    steps: [['Step 1 · Test and review', 'At {clinic}, we review your history and order simple blood and urine tests to see how your kidneys are doing.'], ['Step 2 · Protect and plan', 'We build a plan for medicines, food and regular checks, and we explain every step in plain words.']],
    faq: [['What are early signs of kidney disease?', 'Often there are none. That is why testing matters, especially with diabetes or high blood pressure.'], ['Can kidney disease be slowed?', 'Yes. Early care, healthy blood pressure and blood sugar and the right medicines can help.'], ['Do I need a referral?', 'Call our {city} clinic. We will tell you the best way to get started.'], ['Do you take my insurance?', ins]],
    related: ['diabetes', 'remote-patient-monitoring', 'family-medicine', 'annual-wellness-visit', 'weight-loss-management', 'optometry'],
  },
  {
    slug: 'obgyn', title: 'OB-GYN', short: 'OB-GYN and women’s health',
    summary: 'Caring women’s health services, from yearly exams to pregnancy care, in a warm place where you feel heard.',
    heroAlt: 'OB-GYN provider talking with a pregnant patient', labels: ['Women’s health exams', 'Pregnancy care', 'Support at every stage'],
    alts: ['Provider talking with a woman about her health', 'Mother with her young child after a visit', 'Family smiling with their provider'],
    intro: ['OB-GYN care in {city} supports women at every stage of life. Our team provides yearly exams, pregnancy care and help with common women’s health concerns, with respect and without rush.', 'At our {clinic} location, women’s health is part of your whole-health plan. Your provider works with your family medicine team, so your care stays connected and close to home.'],
    help: [['Yearly women’s exams', 'Well-woman visits, breast and pelvic exams and screening such as Pap tests.'], ['Pregnancy and prenatal care', 'Checkups, tests and guidance for you and your baby during pregnancy.'], ['Family planning', 'Honest talks about birth control and planning your family.'], ['Common concerns', 'Help with irregular periods, pelvic pain, infections and menopause changes.']],
    when: [['You think you may be pregnant', 'Early prenatal care helps you and your baby stay healthy.'], ['You are due for a yearly exam or screening', 'Regular visits catch problems early.'], ['Your periods change or you have pelvic pain', 'These symptoms are common and treatable.'], ['You have questions about birth control or menopause', 'Your provider can explain your options clearly.']],
    steps: [['Step 1 · Your visit', 'At {clinic}, we listen to your health history and concerns, then do the exam or tests you need.'], ['Step 2 · Your plan', 'We explain the results in simple words and build a plan with you, including follow-up and referrals if needed.']],
    faq: [['How often should I have a women’s health exam?', 'Many women need a yearly visit. Your provider will tell you how often you need tests such as a Pap test.'], ['Can I see you while I am pregnant?', 'Yes. Call our {city} team to ask about prenatal care and your first visit.'], ['Do you speak Spanish?', 'Yes. Our teams include bilingual providers and staff who speak English and Spanish.'], ['Do you accept Medi-Cal?', 'We accept Medi-Cal, Medicare and many private plans. Call us and we will check your coverage.']],
    related: ['annual-wellness-visit', 'family-medicine', 'pediatric-care', 'diabetes', 'weight-loss-management', 'behavioral-health'],
  },
  {
    slug: 'behavioral-health', title: 'Behavioral Health', short: 'behavioral health and counseling',
    summary: 'Kind, private counseling and mental health support with licensed clinicians, so you do not have to carry hard things alone.',
    heroAlt: 'Person talking with a counselor in a calm room', labels: ['Counseling and support', 'Care for stress and mood', 'Whole-person health'],
    alts: ['Counselor listening to a client', 'Patient talking with a provider by video', 'Teen and parent sitting together'],
    intro: ['Behavioral health in {city} means care for your mind and emotions, just like we care for your body. Our licensed clinicians listen with kindness and help you find steps that work for you.', 'At our {clinic} location, mental health is part of your whole-health plan. Your counselor works with your family medicine team, so your care stays connected.'],
    help: [['Counseling', 'A safe place to talk about stress, grief, relationships and life changes.'], ['Anxiety and low mood', 'Support and a plan for worry, sadness and trouble sleeping.'], ['Care for teens and families', 'Help for young people and for the families who support them.'], ['Connection to more help', 'Referrals for medicine, substance use support and community services.']],
    when: [['You feel stressed, sad or worried most days', 'You deserve support. Asking for help is a strong first step.'], ['Sleep, appetite or energy have changed', 'These can be signs that your mind needs care.'], ['A loss or big change is hard to handle', 'Counseling can help you move through it.'], ['Someone you love is struggling', 'We can help you and your family find the right support.']],
    steps: [['Step 1 · A caring first visit', 'At {clinic}, we listen to what is going on, ask a few simple questions and talk about what you want to change.'], ['Step 2 · Your support plan', 'We build a plan with you, such as counseling visits, healthy habits and referrals if you need more help.']],
    faq: [['Is what I say private?', 'Your visits are private and protected by law. There are limited safety exceptions, and your clinician will explain them.'], ['Do I need a referral?', 'Often you can start by calling your clinic. We will help you find the right first step.'], ['Can children and teens be seen?', 'Please call our {city} team to ask about care for young people.'], ['What if I am in crisis?', 'If you are in danger or thinking of hurting yourself, call or text 988 (Suicide and Crisis Lifeline) or call 911 right away.']],
    related: ['family-medicine', 'annual-wellness-visit', 'virtual-urgent-care', 'pediatric-care', 'weight-loss-management', 'obgyn'],
  },
].map((s) => ({ ...s, images: img(s.slug), help: s.help as P[], when: s.when as P[], faq: s.faq as P[], steps: s.steps as [P, P], labels: s.labels as [string, string, string], alts: s.alts as [string, string, string], intro: s.intro as [string, string] }));

export const services: Svc[] = [family, ...others];
export const bySlug = Object.fromEntries(services.map((s) => [s.slug, s]));
export const svcPath = (s: Svc, l?: Location) => `/services/${s.slug}${l ? '/' + l.id : ''}`;
export const fillS = (t: string, c: { city: string; clinic: string }) => t.replace(/\{city\}/g, c.city).replace(/\{clinic\}/g, c.clinic);
export const seoS = (s: Svc, l?: Location) =>
  l
    ? { title: `${s.title} in ${l.city}, CA | Living Water Clinic`, description: `${s.title} in ${l.city}, CA at Living Water Clinic (${l.name}), ${l.address}, ${l.cityLine}. ${s.summary} Call ${l.phone}.` }
    : { title: `${s.title} in Tulare County, CA | Living Water Clinic`, description: `${s.title} at 5 Living Water Clinic locations in Lindsay, Woodlake, Porterville, Visalia and Selma, California. ${s.summary}` };
export const siblingOf = (l: Location) => (l.type === 'Dental' ? locations.find((x) => x.city === l.city && x.type === 'Medical') : undefined);

export const categories = [
  { id: 'primary', eyebrow: 'Primary care', title: 'Everyday care', em: 'for the whole family.', text: 'Your first stop for checkups, sick visits and healthy habits, from babies to grandparents.', items: ['family-medicine', 'pediatric-care', 'annual-wellness-visit', 'virtual-urgent-care'] },
  { id: 'chronic', eyebrow: 'Chronic care', title: 'Steady support', em: 'for long-term health.', text: 'Clear plans and regular check-ins to help you manage ongoing conditions and feel your best.', items: ['diabetes', 'asthma', 'weight-loss-management', 'remote-patient-monitoring'] },
  { id: 'specialties', eyebrow: 'Specialties', title: 'More than', em: 'primary care.', text: 'Specialty care under the same roof, so your team works together and you travel less.', items: ['chiropractic-care', 'optometry', 'foot-care', 'nephrology', 'obgyn', 'behavioral-health'] },
];
