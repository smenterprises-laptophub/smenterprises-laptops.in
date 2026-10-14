const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#year').textContent = new Date().getFullYear();
const form = document.querySelector('.quote-form');
form?.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(form);
  const value = key => String(data.get(key) || '').trim();
  const subject = `Quotation enquiry from ${value('company')}`;
  const body = [
    'SM Enterprises — quotation enquiry', '',
    `Name: ${value('name')}`,
    `Company: ${value('company')}`,
    `Business email: ${value('email')}`,
    `Phone: ${value('phone')}`,
    `Requirement: ${value('product')}`,
    `Quantity: ${value('quantity') || 'Not specified'}`,
    `Delivery location: ${value('location') || 'Not specified'}`,
    '', 'Specifications / additional details:', value('details') || 'Not provided'
  ].join('\n');
  const mailto = `mailto:purchase@smenterprises-laptops.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const status = form.querySelector('.form-status');
  status.textContent = 'Opening your email application with the enquiry details. Please review and send the email to submit your request.';
  window.location.href = mailto;
});
