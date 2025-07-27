import ThemeSwitcher from "@/app/components/themeSwitcher";

export default function Header() {
  return (
    <header className="text-very-dark-blue dark:bg-dark-blue w-full bg-white px-4 py-8 shadow-md md:px-0 dark:text-white">
      <div className="mx-auto flex w-full justify-between md:w-11/12 xl:w-10/12">
        <h1 className="text-sm font-bold md:text-lg xl:text-xl">
          Where in the World?
        </h1>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
