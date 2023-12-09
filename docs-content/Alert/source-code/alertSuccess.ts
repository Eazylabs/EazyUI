import AlertSuccess from '../blocks/AlertSuccess';

export const ALERTSUCCESS = {
  html: `<div class="alert alert-success">
  <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
    <path
      d='M8.5 12.875L11.125 15.5L15.5 9.375M22.5 12C22.5 13.3789 22.2284 14.7443 21.7007 16.0182C21.1731 17.2921 20.3996 18.4496 19.4246 19.4246C18.4496 20.3996 17.2921 21.1731 16.0182 21.7007C14.7443 22.2284 13.3789 22.5 12 22.5C10.6211 22.5 9.25574 22.2284 7.98182 21.7007C6.70791 21.1731 5.55039 20.3996 4.57538 19.4246C3.60036 18.4496 2.82694 17.2921 2.29926 16.0182C1.77159 14.7443 1.5 13.3789 1.5 12C1.5 9.21523 2.60625 6.54451 4.57538 4.57538C6.54451 2.60625 9.21523 1.5 12 1.5C14.7848 1.5 17.4555 2.60625 19.4246 4.57538C21.3938 6.54451 22.5 9.21523 22.5 12Z'
      stroke='white'
      stroke-width='2.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </svg>
  <span>A simple alert for showing message.</span>
</div>`,
  css: `.alert {
  padding: 10px 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 16px;
}

.alert-success {
  background-color: #14b789;
  color: #fff;
}`,
  element: AlertSuccess,
};
