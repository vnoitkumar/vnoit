export function FullLogo({ className }) {
  return (
    <>
      <img
        src="/vnoit-full-dark-color-logo.svg"
        className={`block dark:hidden ${className}`}
      />
      <img
        src="/vnoit-full-light-color-logo.svg"
        className={`hidden dark:block ${className}`}
      />
    </>
  );
}

export default FullLogo;
