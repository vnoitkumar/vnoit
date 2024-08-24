import Image from "next/image";

export function FullLogo() {
  return (
    <>
      <img
        src="/vnoit-full-dark-color-logo.svg"
        className="h-12 m-auto block dark:hidden"
        alt="Vnoit dark logo"
      />
      <img
        src="/vnoit-full-light-color-logo.svg"
        className="h-12 m-auto hidden dark:block"
        alt="Vnoit light logo"
      />
    </>
  );
}

export default FullLogo;
