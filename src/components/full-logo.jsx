import Image from "next/image";

export function FullLogo() {
  return (
    <>
      <img
        src="/vnoit-full-dark-color-logo.svg"
        className="m-auto block dark:hidden"
        height={200}
        width={100}
        alt="Vnoit dark color logo"
      />
      <img
        src="/vnoit-full-light-color-logo.svg"
        className="m-auto hidden dark:block"
        height={200}
        width={100}
        alt="Vnoit light color logo"
      />
    </>
  );
}

export default FullLogo;
