import Image from "next/image";

export function FullLogo() {
  return (
    <>
      <Image
        height={200}
        width={100}
        alt="Vnoit dark logo"
        src="/vnoit-full-dark-color-logo.svg"
        className="block dark:hidden m-auto"
      />
      <Image
        height={200}
        width={100}
        alt="Vnoit light logo"
        src="/vnoit-full-light-color-logo.svg"
        className="hidden dark:block m-auto"
      />
    </>
  );
}

export default FullLogo;
