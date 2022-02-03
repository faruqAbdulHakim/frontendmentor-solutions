const faqAccordionsWrapper = document.querySelector('.faqs__accordions-wrapper');

const faqs = [
  {
    title: 'How many team members can I invite?',
    content:
      'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.',
  },
  {
    title: 'What is the maximum file upload size?',
    content:
      'No more than 2GB. All files in your account must fit your allotted storage space.',
  },
  {
    title: 'How do I reset my password?',
    content:
      'Click “Forgot password” from the login page or “Change password” from your profile page.A reset link will be emailed to you.',
  },
  {
    title: 'Can I cancel my subscription?',
    content:
      'Yes! Send us a message and we`ll process your request no questions asked.',
  },
  {
    title: 'Do you provide additional support?',
    content:
      'Chat and email support is available 24/7. Phone lines are open during normal business hours.',
  },
];

faqs.forEach((faq) => {
  const faqItem = document.createElement('li');
  faqItem.classList.add('faq__accordion')

  const faqButton = document.createElement('button');
  faqButton.classList.add('faq__accordion__button');
  faqButton.type = 'button';
  faqButton.innerText = faq.title;
  faqButton.addEventListener('click', () => {
    if (faqItem.classList.contains('active')) {
      faqItem.classList.remove('active');
    } else {
      document.querySelectorAll('.faq__accordion.active').forEach((item) => {
        item.classList.remove('active');
      })
      faqItem.classList.add('active');
    }
  })

  const faqContent = document.createElement('div');
  faqContent.classList.add('faq__accordion__content');
  faqContent.innerText = faq.content;


  faqItem.appendChild(faqButton);
  faqItem.appendChild(faqContent);


  faqAccordionsWrapper.appendChild(faqItem);
})
