import Image from "next/image";

export function FullLogo() {
  return (
    <>
      <img
        src="/vnoit-full-dark-color-logo.svg"
        className="h-12 m-auto block dark:hidden"
      />
      <img
        src="/vnoit-full-light-color-logo.svg"
        className="h-12 m-auto hidden dark:block"
      />
    </>
  );
}

export default FullLogo;
